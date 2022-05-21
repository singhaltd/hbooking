import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MRoom from 'App/Models/MRoom'
import MRoomStatus from 'App/Models/MRoomStatus'
import MRoomType from 'App/Models/MRoomType'

export default class RoomsController {
    public async index({ view }: HttpContextContract) {
        const rsRoom = await MRoom.query().preload('roomType').preload('roomStatus')
        const rsRoomType = await MRoomType.all()
        const rsStatus = await MRoomStatus.all()
        return view.render('rooms/show', {
            rsRoom,
            rsRoomType,
            rsStatus
        })
    }
    public async indexType({ view }: HttpContextContract) {
        const rsRoomType = await MRoomType.all()
        const rsRoomStatus = await MRoomStatus.all()
        return view.render('rooms/type', {
            rsRoomType,
            rsRoomStatus
        })
    }



    /// room Type managerment
    public async CrateRoomType({ request, response }) {
        const { rtype, name, description } = request.all()
        const rsRoomType = await MRoomType.create({
            rtype, name, description
        })
        return response.json(rsRoomType)
    }
    public async delRoomType({ params, response }) {
        const rsRoomType = await MRoomType.find(params.id)
        if (rsRoomType?.delete()) {
            return response.send('True')
        }
    }

    /// room Type managerment
    public async CrateRoomStatus({ request, response }) {
        const { id, name, info } = request.all()
        const rsRoomStatus = await MRoomStatus.create({
            id, name, info
        })
        return response.json(rsRoomStatus)
    }

    // api 
    public async store({ request, response }) {
        const { strfrom, strto, roomtype, price, building, floor, status } = request.all()
        let bodyCreate = []
        for (let i = parseInt(strfrom); i <= parseInt(strto); i++) {
            bodyCreate.push({
                id: i.toString().padStart(3, '0'),
                room_num: i.toString().padStart(3, '0'),
                price: price,
                rtype: roomtype,
                status: status,
                building: building,
                floor: floor
            })
        }
        const rs = await MRoom.createMany(bodyCreate)
        return response.json(rs)
    }
}
