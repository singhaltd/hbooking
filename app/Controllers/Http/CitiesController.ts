import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MDistrict from 'App/Models/MDistrict'
import MProvince from 'App/Models/MProvince'

export default class CitiesController {

    public async getProvince({ params, view }: HttpContextContract) {
        const items = await MProvince.query().where('country', params.id)
        return view.render('components/select/option', { items })
    }
    public async getDistrict({ params, view }: HttpContextContract) {
        const items = await MDistrict.query().where('province', params.id)
        return view.render('components/select/option', { items })
    }
}
