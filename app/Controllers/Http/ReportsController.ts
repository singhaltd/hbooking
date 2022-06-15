import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import MCustomer from 'App/Models/MCustomer'
import MRoom from 'App/Models/MRoom'
import MRoomStatus from 'App/Models/MRoomStatus'

export default class ReportsController {
    public async booking({ view, session }: HttpContextContract) {
        session.put('link-route', '/reports/booking')
        return view.render('reports/booking')
    }
    public async monthly({ view, session, request }: HttpContextContract) {
        session.put('link-route', '/reports/monthly')
        const { dtfrm, dtto } = request.all()
        if (dtfrm && dtto) {
            const result = await Database.rawQuery(`select DATE_FORMAT(trn_date,'%d/%m/%Y') trn_date,count(ivid) invoice,sum(total) total from invoice where trn_date between '${dtfrm}' and '${dtto}' group by trn_date`)
            const rsSum = await Database.rawQuery(`select sum(total) total from invoice where trn_date between '${dtfrm}' and '${dtto}'`)
            session.flash('qr', { dtfrm: dtfrm, dtto })
            console.log(rsSum)
            return view.render('reports/monthly', {
                result: result ? result[0] : '',
                rsSum: rsSum ? rsSum[0][0] : 0
            })
        } else {
            return view.render('reports/monthly')
        }
    }
    public async staff({ request, view, session }: HttpContextContract) {
        session.put('link-route', '/reports/staff')
        const { dtfrm, dtto } = request.all()

        if (dtfrm !== '') {
            const reSult = await Database.rawQuery(`select concat(u.fname, ' ', u.lname) fullname,email,mobile,count(*) aiv,sum(i.total) total from users u left join invoice i on i.maker = u.id where i.trn_date between '${dtfrm}' and '${dtto}' group by concat(u.fname, ' ', u.lname),email,mobile`)
            return view.render('reports/staff', {
                reSult: reSult ? reSult[0] : ''
            })
        } else {
            console.log(dtfrm)
            return view.render('reports/staff')
        }
    }
    public async rooms({ request, view, session }: HttpContextContract) {
        session.put('link-route', '/reports/rooms')
        const { rstat } = request.all()
        const rstate = await MRoomStatus.all()
        if (rstat) {
            let rsRoom;
            if (rstat == 'A') {
                rsRoom = await MRoom.query().preload('roomStatus').preload('roomType')
            } else {
                rsRoom = await MRoom.query().preload('roomStatus').preload('roomType').where('status', rstat)
            }
            return view.render('reports/rooms', {
                rsRoom,
                rstate
            })
        } else {
            return view.render('reports/rooms', {
                rstate
            })
        }
    }
    public async customers({ request, view, session }: HttpContextContract) {
        session.put('link-route', '/reports/customers')
        const { search } = request.all()
        if (search == '') {
            const rsCustomer = await MCustomer.query()
            return view.render('reports/customers', {
                rsCustomer
            })
        } else if (search != '') {
            const rsCustomer = await MCustomer.query().where('fname', 'like', '%' + search + '%')
            return view.render('reports/customers', {
                rsCustomer
            })
        } else {
            return view.render('reports/customers')
        }
    }
    public async invoice({ view }: HttpContextContract) {
        return view.render('reports/invoice')
    }
}
