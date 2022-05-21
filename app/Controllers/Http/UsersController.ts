import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {

    public async index({ view }: HttpContextContract) {
        return view.render('users/show')
    }
    public async create({ view }: HttpContextContract) {
        return view.render('users/create')
    }
}