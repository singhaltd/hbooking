import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import MCustomer from 'App/Models/MCustomer'
import MMenu from 'App/Models/MMenu'
import Muser from 'App/Models/Muser'
import SignInValidator from 'App/Validators/SignInValidator'
import SignUpValidator from 'App/Validators/SignUpValidator'

export default class AuthController {

    public async dashboard({ view, auth, session }: HttpContextContract) {
        const room = await Database.rawQuery('select rs.scode,rs.name,IFNULL(r.amt,0) amt from room_statuses rs left join (select count(*) amt, status from rooms group by status) r on rs.scode = r.status')
        return view.render('dashboard', {
            room: room[0]
        })
    }
    public async login({ view }: HttpContextContract) {
        return view.render('login')
    }
    public async register({ view }: HttpContextContract) {
        return view.render('register')
    }


    public async singup({ request, response, auth, session }: HttpContextContract) {
        const user = await Muser.create(request.all())
        await auth.login(user)
        session.flash({ notification: "Logged in successfully" });
        return response.redirect('/peot')
    }

    public async signin({ request, response, auth, session }: HttpContextContract) {
        const { username, password, remember_me } = request.all()
        // const { username, password, remember_me } = await request.validate(SignInValidator)

        // const loginAttemptsRemaining = await AuthAttemptService.getRemainingAttempts(username)
        // if (loginAttemptsRemaining <= 0) {
        //     session.flash('error', 'Your account has been locked due to repeated bad login attempts. Please reset your password.')
        //     return response.redirect('/forgot-password')
        // }

        try {
            // await auth.attempt(username, password)
            await auth.use('web').attempt(username, password)
            response.redirect('/peot')
            // await AuthAttemptService.deleteBadAttempts(uid)
        } catch (error) {
            console.log(error)
            // await AuthAttemptService.recordLoginAttempt(uid)

            session.flash('errors', { form: 'ຊື່ຜູ້ໃຊ້ງານ ແລະ ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ' })
            return response.redirect().back()
        }

        session.flash('success', 'Welcome back!')

        return response.redirect('/peot')
    }
    public async signinApi({ request, response, auth }: HttpContextContract) {
        const { username, password, remember_me } = request.all()
        try {
            // await auth.attempt(username, password)
            return await auth.use('api').attempt(username, password)
            // await AuthAttemptService.deleteBadAttempts(uid)
        } catch (error) {
            return response.status(201).json({
                error: true,
                message: 'login Faild'
            })
        }
    }
    public async profileApi({ request, auth, response }: HttpContextContract) {
        const autUser = await auth.use('api').user
        const user = await MCustomer.findOrFail(autUser?.istaff)
        console.log(user)
        return user

    }

    public async registerApi({ request, auth, response }: HttpContextContract) {
        const { fname, lname, username, password, email, mobile } = request.all()
        const cust_no = Math.floor(1000 + Math.random() * 9000);
        try {
            const User = await Muser.firstOrCreate({ username, email, mobile, }, { fname, lname, username, email, mobile, password, istaff: cust_no, role: 3 })
            if (User) {
                await MCustomer.updateOrCreate({
                    email,
                    mobile,
                    id: User?.istaff
                }, {
                    fname: User?.fname,
                    lname: User?.lname,
                    email: User?.email,
                    mobile: User?.mobile,
                    id: User?.istaff
                })
            }
            return response.status(200).json({ error: false, data: User })
        } catch (error) {
            return response.badRequest({
                error: true,
                message: 'ຂໍ້ມູນນີ້ມີໃນລະບົບຢູ່ແລ້ວ'
            })
        }

    }


    public async signout({ response, auth, session }: HttpContextContract) {
        await auth.logout()

        session.flash('success', 'You have been logged out')

        return response.redirect('/peot')
    }
    /// api


    public async getmenu({ request, view, auth }: HttpContextContract) {
        try {
            const user = await auth.use('web').user
            const resMenu = await Database.rawQuery(`select n.* from user_role_mapings m, menus n where n.id = m.menu_id and m.role_id = ${user?.role}`)
            return view.render('components/navbar/asidebar', {
                resMenu
            })
        } catch (e) {
            console.log(e)
        }

    }
}
