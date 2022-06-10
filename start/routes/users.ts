import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'UsersController.index')
    Route.get('/create', 'UsersController.create')

    Route.get('/permission', 'UsersController.indexRole')


}).prefix('/users')
