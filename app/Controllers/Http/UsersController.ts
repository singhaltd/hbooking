import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MCountry from 'App/Models/MCountry'
import MCustomer from 'App/Models/MCustomer'
import MuRole from 'App/Models/MuRole'
import Muser from 'App/Models/Muser'

export default class UsersController {

    public async index({ view, session }: HttpContextContract) {

        const rsUser = await Muser.query().preload('urole')
        const uRole = await MuRole.all()
        const Country = await MCountry.all()
        session.put('link-route', '/users')
        return view.render('users/show', {
            rsUser,
            uRole,
            Country
        })
    }
    public async customerindex({ request, view, session }: HttpContextContract) {

        const rsCustomer = await MCustomer.all()
        // const uRole = await MuRole.all()
        // const Country = await MCountry.all()
        session.put('link-route', '/customer')
        return view.render('customer/show', {
            rsCustomer
        })
    }
    public async ViewUser({ params, view, session }: HttpContextContract) {

        const rsUser = await Muser.query().preload('urole').where('id', params.id).first()
        const uRole = await MuRole.all()
        const Country = await MCountry.all()
        session.put('link-route', '/users')
        return view.render('users/view', {
            rsUser,
            uRole,
            Country
        })
    }
    public async create({ view }: HttpContextContract) {
        return view.render('users/create')
    }


    public async SaveUser({ request, response }: HttpContextContract) {
        console.log(request.all())
        try {
            const user = await Muser.create(request.all())
            response.status(200)
            return {
                error: false,
                user
            }
        } catch (error) {
            return {
                error: false,
                messag: error
            }
        }
    }

    public async indexRole({ view, session }: HttpContextContract) {
        const Roles = await MuRole.query().orderBy('id')
        session.put('link-route', '/users/permission')
        return view.render('users/role', {
            Roles
        })
    }



    public async mbilLogin({ request, auth, response }: HttpContextContract) {

        const username = request.input('username')
        const password = request.input('password')

        try {
            const token = await auth.use('api').attempt(username, password)
            return token
        } catch(e) {
            console.log(e)
            return response.badRequest('Invalid credentials')
        }
    }
}