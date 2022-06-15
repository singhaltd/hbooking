import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'BookingsController.index').as('auth.booking')
    Route.get('v/:id', 'BookingsController.viewDetail')
    Route.get('/create', 'BookingsController.createBooking')
}).prefix('booking').middleware(['auth'])

Route.group(() => {
    Route.get('/', 'BookingsController.checkIndex')
}).prefix('checkin').middleware(['auth'])


Route.group(() => {
    Route.post('/create', 'BookingsController.SeveBooking').as('api.booking.store')
    Route.post('stat/:ivid/:bookid', 'BookingsController.updateStat').as('api.booking.status')
}).prefix('api/booking').middleware(['auth'])

Route.post('add-to-list', async ({ request, response }) => {
    const { room_num, irate, remark, room_type } = request.all()
    const existingItems = request.cookie('room-items', [])

    const newItems = existingItems.concat([{ room_num: room_num, irate: irate, remark: remark, room_type: room_type }])
    response.cookie('room-items', newItems)
})


Route.get('getRoomState', 'RoomsController.ListRoomForbook')
Route.get('getSelectRoom', 'RoomsController.getSelectRoom')
