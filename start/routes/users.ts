import Route from '@ioc:Adonis/Core/Route'
Route.group(()=> {
Route.group(() => {
    Route.get('/', 'UsersController.index')
    Route.get('/create', 'UsersController.create')
    Route.get('/v/:id', 'UsersController.ViewUser').as('auth.viewUser')

    Route.get('/permission', 'UsersController.indexRole')


}).prefix('/users')
Route.group(() => {
    Route.get('/', 'UsersController.customerindex')
}).prefix('/customer')

Route.group(() => {
    Route.post('','UsersController.SaveUser')
}).prefix('v1/users')




Route.group(() => {
    Route.post('/login', 'UsersController.mbilLogin')
    Route.get('/profile', 'AuthController.profileApi').middleware('auth:api')
    Route.post('/book', 'BookingsController.SeveBookingApi').middleware('auth:api')
    Route.get('/history', 'BookingsController.historyApi').middleware('auth:api')
    Route.put('/bookStat/:ivid/:bookid', 'UsersController.BookStatApi').middleware('auth:api')
    Route.post('/register', 'AuthController.registerApi')
}).prefix('/api/v1')
}).prefix('/peot')