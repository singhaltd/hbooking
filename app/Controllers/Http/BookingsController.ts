import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import MCountry from 'App/Models/MCountry'
import MCustomer from 'App/Models/MCustomer'

export default class BookingsController {
    public async index({ view }: HttpContextContract) {
        return view.render('booking/show')
    }
    public async createBooking({ view }: HttpContextContract) {
        const rsCountries = await MCountry.all()
        return view.render('booking/create', {
            rsCountries
        })
    }

    public async SeveBooking({ request, response }: HttpContextContract) {
        const {email} = request.all()
        const reqCustomer = schema.create({
            fname:schema.string(),
            lnam:schema.string(),
            mobile:schema.string(),
            district_id:schema.number(),
            vilage:schema.string(),
            sex:schema.string(),
            doc_type:schema.string(),
            doc_no:schema.string()
        })
        const paycust = await request.validate({schema:reqCustomer})

        return await MCustomer.updateOrCreate(Object.assign(paycust,email),Object.assign(paycust,email))

    }
}
