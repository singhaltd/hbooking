import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MCountry from 'App/Models/MCountry'
import MuRole from 'App/Models/MuRole'
import Muser from 'App/Models/Muser'

export default class UsersController {

    public async index({ view }: HttpContextContract) {
        const rsUser = await Muser.query().preload('urole')
        const uRole = await MuRole.all()
        const Country = await MCountry.all()
        return view.render('users/show', {
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

    public async indexRole({ view }: HttpContextContract) {
        const Roles = await MuRole.query().orderBy('id')
        return view.render('users/role', {
            Roles
        })
    }
}