import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/', 'RoomsController.index').as('auth.rooms')
    Route.get('/edit/:id', 'RoomsController.updateRoom')
    Route.get('/type', 'RoomsController.indexType')
    Route.get('/type/create', 'RoomsController.CreateType')
    Route.get('/type/:id/edit', 'RoomsController.typeUpdate')
    Route.get('/status/:id/edit', 'RoomsController.statusUpdate')
}).prefix('rooms').middleware(['auth'])



Route.group(() => {
    Route.post('', 'RoomsController.store')
    Route.delete('/:id', 'RoomsController.deleteroom')
    Route.post('type', 'RoomsController.CrateRoomType').as('auth.roomtype.store')
    Route.put('type', 'RoomsController.updateType')
    Route.delete('type/:id', 'RoomsController.delRoomType')
    Route.post('status', 'RoomsController.CrateRoomStatus')
    Route.put('status', 'RoomsController.updateStatus')
    Route.delete('status/:id', 'RoomsController.delRoomStatus')


    Route.get('cltype', 'RoomsController.clRoomType')
    Route.get('cltype/:id', 'RoomsController.clFindType')
    Route.get('cltypeDetail/:id', 'RoomsController.clFindType')
    Route.get('cldetail/:id', 'RoomsController.delRoomStatus')
}).prefix('v1/rooms')
