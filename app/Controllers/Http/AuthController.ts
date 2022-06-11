import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import MMenu from 'App/Models/MMenu'
import Muser from 'App/Models/Muser'
import SignInValidator from 'App/Validators/SignInValidator'
import SignUpValidator from 'App/Validators/SignUpValidator'

export default class AuthController {

    public async dashboard({ view, auth, session }:HttpContextContract) {
        return view.render('dashboard')
    }
    public async login({ view }: HttpContextContract) {
        return view.render('login')
    }
    public async register({ view }: HttpContextContract) {
        return view.render('register')
    }


    public async singup({ request, response, auth, session }:HttpContextContract) {
        const user = await Muser.create(request.all())
        await auth.login(user)
        session.flash({ notification: "Logged in successfully" });
        return response.redirect('/')
    }

    public async signin({ request, response, auth, session }: HttpContextContract) {
        const {username,password,remember_me} = request.all()
        // const { username, password, remember_me } = await request.validate(SignInValidator)

        // const loginAttemptsRemaining = await AuthAttemptService.getRemainingAttempts(username)
        // if (loginAttemptsRemaining <= 0) {
        //     session.flash('error', 'Your account has been locked due to repeated bad login attempts. Please reset your password.')
        //     return response.redirect('/forgot-password')
        // }

        try {
            // await auth.attempt(username, password)
            await auth.use('web').attempt(username, password)
            response.redirect('/')
            // await AuthAttemptService.deleteBadAttempts(uid)
        } catch (error) {
            console.log(error)
            // await AuthAttemptService.recordLoginAttempt(uid)

            session.flash('errors', { form: 'ຊື່ຜູ້ໃຊ້ງານ ແລະ ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ' })
            return response.redirect().back()
        }

        session.flash('success', 'Welcome back!')

        return response.redirect('/')
    }
    public async signinApi({ request, response, auth }: HttpContextContract) {
        const {username,password,remember_me} = request.all()
        // const { username, password, remember_me } = await request.validate(SignInValidator)

        // const loginAttemptsRemaining = await AuthAttemptService.getRemainingAttempts(username)
        // if (loginAttemptsRemaining <= 0) {
        //     session.flash('error', 'Your account has been locked due to repeated bad login attempts. Please reset your password.')
        //     return response.redirect('/forgot-password')
        // }

        try {
            // await auth.attempt(username, password)
            return await auth.use('api').attempt(username, password)
            // await AuthAttemptService.deleteBadAttempts(uid)
        } catch (error) {
            console.log(error)
        }
    }
    

    public async signout({ response, auth, session }: HttpContextContract) {
        await auth.logout()

        session.flash('success', 'You have been logged out')

        return response.redirect('/')
    }
    /// api


    public async getmenu({ request,view, auth }: HttpContextContract) {
        try{
            const user = await auth.use('web').user
            const resMenu = await Database.rawQuery(`select n.* from user_role_mapings m, menus n where n.id = m.menu_id and m.role_id = ${user?.role}`)
            return view.render('components/navbar/asidebar', {
                    resMenu
            })
        }catch(e){
            console.log(e)
        }
       
    }
}
