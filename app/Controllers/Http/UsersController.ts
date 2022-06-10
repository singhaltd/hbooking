import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Muser from 'App/Models/Muser'

export default class UsersController {

    public async index({ view }: HttpContextContract) {
        const rsUser = await Muser.query().preload('urole')
        return view.render('users/show',{
            rsUser
        })
    }
    public async create({ view }: HttpContextContract) {
        return view.render('users/create')
    }

    public async indexRole({view}:HttpContextContract){
        return view.render('users/role')
    }
}