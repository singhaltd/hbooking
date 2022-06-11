import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import MBooking from 'App/Models/MBooking'
import MCountry from 'App/Models/MCountry'
import MCustomer from 'App/Models/MCustomer'

export default class BookingsController {
    public async index({ view }: HttpContextContract) {
        const Booking = await MBooking.query().preload('Cust').where('stat', 'B')
        return view.render('booking/show', {
            Booking
        })
    }
    public async createBooking({ view }: HttpContextContract) {
        const rsCountries = await MCountry.all()
        return view.render('booking/create', {
            rsCountries
        })
    }

    public async SeveBooking({ request, session, response }: HttpContextContract) {
        const { email, dob } = request.all()
        const reqCustomer = schema.create({
            fname: schema.string(),
            lname: schema.string(),
            mobile: schema.string(),
            district_id: schema.number(),
            village: schema.string(),
            sex: schema.string(),
            doc_type: schema.string(),
            doc_no: schema.string()
        })

        const reqBooking = schema.create({
            adulth: schema.number(),
            child: schema.number(),
            check_in_date: schema.date(),
            check_out_date: schema.date(),
            check_in_time: schema.string(),
            check_out_time: schema.string(),
            booktype: schema.string(),
            rqty: schema.number(),
        })
        try {
            const paycust = await request.validate({ schema: reqCustomer })
            const payBook = await request.validate({ schema: reqBooking })
            const data = Object.assign(paycust, { email: email, dob: dob })
            // const customer =  await MCustomer.updateOrCreate(data, data)
            // response.redirect('/booking')
            console.log(payBook)
        } catch (error) {
            console.log(error)
            // session.flash('errors', error)
            return response.redirect().back()
        }


    }
}
