import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'UsersController.index')
    Route.get('/create', 'UsersController.create')
    Route.get('/v/:id', 'UsersController.ViewUser')

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
}).prefix('/api/v1')
