import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'
import MBooking from 'App/Models/MBooking'
import MCountry from 'App/Models/MCountry'
import MCustomer from 'App/Models/MCustomer'
import Minvoice from 'App/Models/Minvoice'
import MPayment from 'App/Models/MPayment'
import MRoom from 'App/Models/MRoom'
import moment from 'moment'

export default class BookingsController {
    public async index({ request, view, session }: HttpContextContract) {
        const { search, tysearch } = request.all()
        session.put('link-route', '/booking')
        if (tysearch && tysearch != 'fname' && search != '') {
            const Booking = await MBooking.query().preload('Cust').preload('invoice', (builder) => {
                builder.preload('payt')
            }).where('stat', 'B').andWhere(tysearch, search)
            return view.render('booking/show', {
                Booking
            })
        } else if (tysearch && tysearch == 'fname' && search != '') {
            const Booking = await MBooking.query().preload('Cust').preload('invoice', (builder) => {
                builder.preload('payt')
            }).whereHas('Cust', (postsQuery) => {
                postsQuery.where('fname', 'like', '%' + search + '%')
            }).where('stat', 'B')
            return view.render('booking/show', {
                Booking
            })
        } else {
            const Booking = await MBooking.query().preload('Cust').preload('invoice', (builder) => {
                builder.preload('payt')
            }).where('stat', 'B')
            return view.render('booking/show', {
                Booking
            })
        }

    }
    public async checkIndex({ request, view, session }: HttpContextContract) {
        session.put('link-route', '/checkin')
        const { tysearch, search } = request.all()
        if (tysearch && tysearch != 'fname' && search != '') {
            const Booking = await MBooking.query().preload('Cust').preload('invoice', (builder) => {
                builder.preload('payt')
            }).where('stat', 'I').andWhere(tysearch, search)
            return view.render('checkin/show', {
                Booking
            })
        } else if (tysearch && tysearch == 'fname' && search != '') {
            const Booking = await MBooking.query().preload('Cust').preload('invoice', (builder) => {
                builder.preload('payt')
            }).whereHas('Cust', (postsQuery) => {
                postsQuery.where('fname', 'like', '%' + search + '%')
            }).where('stat', 'I')
            return view.render('checkin/show', {
                Booking
            })
        } else {
            const Booking = await MBooking.query().preload('Cust').preload('invoice', (builder) => {
                builder.preload('payt')
            }).where('stat', 'I')
            return view.render('checkin/show', {
                Booking
            })
        }
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
        const { email, dob, xroom, paytotal, mtotal, pay_type } = request.all()
        var ivid = Math.random().toString(16).substr(2, 8)
        var bookid = Math.random().toString(16).substr(2, 8)
        const user = await auth.use('web').user
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
            check_in_date: schema.string(),
            check_out_date: schema.string(),
            check_in_time: schema.string(),
            check_out_time: schema.string(),
            booktype: schema.string(),
            rqty: schema.number(),
        })
        try {
            const paycust = await request.validate({ schema: reqCustomer })
            const payBook = await request.validate({ schema: reqBooking })
            const data = Object.assign(paycust, { email: email, dob: dob })
            const customer = await MCustomer.updateOrCreate(data, data)
            customer.related('booking').create(Object.assign(payBook, { maker: user?.id, trn_date: moment().format('yyyy-MM-DD'), ref_key: 'B' + bookid }))
            if (xroom && xroom.length > 0) {
                await Minvoice.create({
                    ivid: 'I' + ivid,
                    bookid: 'B' + bookid,
                    total: mtotal,
                    paid: paytotal,
                    pay_type: pay_type,
                    status: 'B',
                    trn_date: moment().format('yyyy-MM-DD'),
                    maker: user?.id
                })
                await Database.rawQuery(`insert into booking_room(room_num,irate,book_ref,invoice) select number,price,'B${bookid}','I${ivid}' from rooms where number in (${xroom})`)
            }
            response.redirect('/booking')
            // return customer
            // console.log(request.all())
        } catch (error) {
            session.flash(error)
            return response.redirect().back()
        }


    }

    public async updateStat({ response, request, params, view }: HttpContextContract) {
        const { status } = request.all()
        console.log(status)
        try {
            await Minvoice.query().where('ivid', params.ivid).update({ status: status }).first()
            await MBooking.query().where('ref_key', params.bookid).update({ stat: status }).first()
            return view.render('components/modal/alert', {
                message: 'ອັບເດດສຳເລັດ'
            })
        } catch (error) {
            return false
        }

    }
    //view Booking 

    public async viewDetail({ view, session, params }: HttpContextContract) {
        const rsBook = await MBooking.query().preload('Cust').preload('invoice').where('ref_key', params.id).first()
        const rsCountries = await MCountry.all()
        const rsPay = await MPayment.all()
        const rsRoom = await MRoom.query().select('rooms.*').preload('roomType').whereRaw(`number in (select b.room_num from booking_room b where b.book_ref = '${rsBook?.$attributes.ref_key}')`)
        // console.log(rsRoomBook)
        return view.render('booking/view', {
            rsBook,
            rsRoom,
            rsCountries,
            rsPay
        })
    }



    ///  payment

    public async paytypeIndex({ view }) {
        const payment = await MPayment.all()
        const rsCountries = await MCountry.all()
        const rsPay = await MPayment.all()
        return view.render('payment/show', {
            rsCountries,
            payment,
            rsPay
        })
    }
}
