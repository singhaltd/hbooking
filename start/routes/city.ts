import Route from '@ioc:Adonis/Core/Route'
Route.group(()=> {
    Route.get('/province/:id', 'CitiesController.getProvince')
    Route.get('/district/:id', 'CitiesController.getDistrict')
}).prefix('city')

