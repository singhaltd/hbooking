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
    public async CreateType({ view }: HttpContextContract) {
        return view.render('rooms/type_create')
    }

    public async EditType({ request, view }: HttpContextContract) {
        return view.render('rooms/type_create')
    }

    public async typeUpdate({ params, view }: HttpContextContract) {
        const rsType = await MRoomType.findBy('rtype', params.id)
        return view.render('components/modal/roomType', {
            rsType
        })
    }

    /// api for type update 
    public async updateType({ request, response }: HttpContextContract) {
        const { description, name, rtype } = request.all()
        const rsType = await MRoomType.findOrFail(rtype)
        try {
            rsType.title = name
            rsType.description = description
            rsType.save()
            response.status(200)
            return true
        } catch (e) {
            console.log(e)
        }

    }

    public async statusUpdate({ params, view }: HttpContextContract) {
        const rstatus = await MRoomStatus.findBy('id', params.id)
        return view.render('components/modal/roomStatus', {
            rstatus
        })
    }
    /// api for type update 
    public async updateStatus({ request, response }: HttpContextContract) {
        const { info, name, id } = request.all()
        const rsStatus = await MRoomStatus.findOrFail(id)
        try {
            rsStatus.name = name
            rsStatus.info = info
            rsStatus.save()
            response.status(200)
            return true
        } catch (e) {
            console.log(e)
        }

    }



    /// room Type managerment
    public async CrateRoomType({ request, response }) {
        const { rtype, name, description ,imagefile} = request.all()
        const rsRoomType = await MRoomType.create({
            rtype, name, description
        })
        // rsRoomType.related('thumbnail').createMany()
        return response.json(rsRoomType)
    }
    public async delRoomType({ params, response }) {
        try {
            const rsRoomType = await MRoomType.find(params.id)
            rsRoomType?.delete()
            return true
        } catch (error) {

        }
    }

    public async updateRoom({ params, view }: HttpContextContract) {
        const Room = await MRoom.findBy('id', params.id);
        const rsRoomType = await MRoomType.all()
        const rsStatus = await MRoomStatus.all()
        return view.render('components/modal/room', {
            Room,
            rsStatus,
            rsRoomType
        })
    }

    /// room Type managerment
    public async CrateRoomStatus({ request, response }) {
        const { id, name, info } = request.all()
        const rsRoomStatus = await MRoomStatus.create({
            id, name, info
        })
        return response.json(rsRoomStatus)
    }
    public async delRoomStatus({ params, response }) {
        try {
            const rsRoomStatus = await MRoomStatus.find(params.id)
            rsRoomStatus?.delete()
            return true
        } catch (error) {

        }
    }

    // api 
    public async store({ request, response }) {
        const { strfrom, strto, roomtype, price, building, floor, status, ftype, room_num } = request.all()
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
        if (ftype != 'update') {
            const rs = await MRoom.createMany(bodyCreate)
            return response.json(rs)
        } else {
            const rs = await MRoom.updateOrCreate({
                room_num: room_num,
            }, {
                room_num,
                price,
                building,
                floor,
                status,
                rtype: roomtype
            })
            return response.json(rs)
        }

    }


    public async deleteroom({ params, response }: HttpContextContract) {
        try {
            try {
                const room = await MRoom.find(params.id)
                room?.delete()
                response.status(200)
                return true
            } catch (e) {

            }

        } catch (e) {

        }
    }


    // for mobile 
    public async clRoomType({ request, response }: HttpContextContract) {

    }
}
