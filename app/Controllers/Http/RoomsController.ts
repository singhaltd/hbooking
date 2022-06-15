import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import MRoom from 'App/Models/MRoom'
import MRoomStatus from 'App/Models/MRoomStatus'
import MRoomType from 'App/Models/MRoomType'
import Application from '@ioc:Adonis/Core/Application'

export default class RoomsController {
    public async index({ request, view, session }: HttpContextContract) {
        const { search } = request.all()
        let rsRoom = null;
        if (search && search != '*') {
            rsRoom = await MRoom.query().preload('roomType').preload('roomStatus').where('status', search)
        } else {
            rsRoom = await MRoom.query().preload('roomType').preload('roomStatus')
        }
        const rsRoomType = await MRoomType.all()
        const rsStatus = await MRoomStatus.all()
        session.put('link-route', '/rooms')
        return view.render('rooms/show', {
            rsRoom,
            rsRoomType,
            rsStatus
        })
    }
    public async indexType({ view, session }: HttpContextContract) {
        const rsRoomType = await MRoomType.all()
        const rsRoomStatus = await MRoomStatus.all()
        session.put('link-route', '/rooms/type')
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
        const { rtype, description, name } = request.all()
        const images = request.files('imagefile')
        console.log(images)
        try {
            const files = []
            if (images.length > 0) {
                for (let image of images) {
                    await image.move(Application.tmpPath('uploads/room'))
                    // {name:,alt:,caption:,ext:,size,url:}
                    files.push({ name: image.clientName, alt: image.clientName, caption: '', ext: '', size: image.size, url: 'uploads/room/' + image.clientName })

                }
            }
            const rsRoomType = await MRoomType.create({
                rtype, name, description
            })
            rsRoomType.related('thumbnail').createMany(files)
            response.location('/rooms/type')
            return response.json(rsRoomType)
        } catch (error) {
            console.log(error)
        }

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
        const RoomType = await MRoomType.query().preload('thumbnail')

        response.status(200)
        return RoomType
    }
    public async clFindType({ params, response }: HttpContextContract) {
        const RoomType = await MRoomType.query().preload('thumbnail').where('rtype', params.id).first()

        response.status(200)
        return RoomType
    }


    public async ListRoomForbook({ request, view, response }: HttpContextContract) {
        const { status } = request.all()
        if (status) {
            const Rooms = await MRoom.query().preload('roomStatus').where('status', status)
            return view.render('components/table/lroom', {
                Rooms
            })
        } else {
            const Rooms = await MRoom.query().preload('roomStatus')
            return view.render('components/table/lroom', {
                Rooms
            })
        }

    }
    public async getSelectRoom({ request, session, view }: HttpContextContract) {
        const { rooms } = request.all()
        const rsRoom = await MRoom.query().preload('roomType').whereRaw('number in ' + rooms)
        const Total = await MRoom.query().select().sum('price as total').whereRaw('number in ' + rooms)
        session.put('btotal', Total[0].$extras.total)
        return view.render('components/table/selroom', {
            rsRoom,
            rsTotal: Total[0].$extras.total
        })
    }
}
