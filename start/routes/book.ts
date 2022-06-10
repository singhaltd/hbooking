import Route from '@ioc:Adonis/Core/Route'

Route.group(()=> {
    Route.get('/','BookingsController.index')
    Route.get('/create','BookingsController.createBooking')
}).prefix('booking').middleware(['auth'])


Route.group(()=> {
    Route.post('/create','BookingsController.SeveBooking').as('api.booking.store')
}).prefix('api/booking')

