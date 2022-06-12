import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import MBooking from 'App/Models/MBooking'
import MCountry from 'App/Models/MCountry'
import MCustomer from 'App/Models/MCustomer'
import Minvoice from 'App/Models/Minvoice'
import MPayment from 'App/Models/MPayment'
import MRoom from 'App/Models/MRoom'

export default class BookingsController {
    public async index({ view }: HttpContextContract) {
        const Booking = await MBooking.query().preload('Cust').where('stat', 'B')
        return view.render('booking/show', {
            Booking
        })
    }
    public async checkIndex({ view }: HttpContextContract) {
        const rsInvoice = await Minvoice.query().preload('book', (Builder) => {
            Builder.preload('Cust').where('stat', 'I')
        })
        return view.render('checkin/show', {
            rsInvoice
        })
    }
    public async createBooking({ view }: HttpContextContract) {
        const rsCountries = await MCountry.all()
        const rsPay = await MPayment.all()
        const Rooms = await MRoom.query().preload('roomStatus').where('status', 'O')
        return view.render('booking/create', {
            rsCountries,
            rsPay,
            Rooms
        })
    }

    public async SeveBooking({ request, session, auth, response }: HttpContextContract) {
        const { email, dob } = request.all()
        const user = await auth.use('web').user
        // const reqCustomer = schema.create({
        //     fname: schema.string(),
        //     lname: schema.string(),
        //     mobile: schema.string(),
        //     district_id: schema.number(),
        //     village: schema.string(),
        //     sex: schema.string(),
        //     doc_type: schema.string(),
        //     doc_no: schema.string()
        // })

        // const reqBooking = schema.create({
        //     adulth: schema.number(),
        //     child: schema.number(),
        //     check_in_date: schema.string(),
        //     check_out_date: schema.string(),
        //     check_in_time: schema.string(),
        //     check_out_time: schema.string(),
        //     booktype: schema.string(),
        //     rqty: schema.number(),
        // })
        try {
            // const paycust = await request.validate({ schema: reqCustomer })
            // const payBook = await request.validate({ schema: reqBooking })
            // const data = Object.assign(paycust, { email: email, dob: dob })
            // const customer =  await MCustomer.updateOrCreate(data, data)
            // customer.related('booking').create(Object.assign(payBook,{maker:user?.id}))
            // response.redirect('/booking')
            // return customer
            console.log(request.all())
        } catch (error) {
            console.log(error)
            // session.flash('errors', error)
            return response.redirect().back()
        }


    }

 

    ///  payment

    public async paytypeIndex({ view }) {
        const payment = await MPayment.all()
        return view.render('payment/show', {
            payment
        })
    }
}
