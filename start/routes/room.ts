import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/', 'RoomsController.index')
    Route.get('/type', 'RoomsController.indexType')
}).prefix('rooms')



Route.group(() => {
    Route.post('', 'RoomsController.store')
    Route.post('type', 'RoomsController.CrateRoomType')
    Route.post('status', 'RoomsController.CrateRoomStatus')
}).prefix('v1/rooms')
