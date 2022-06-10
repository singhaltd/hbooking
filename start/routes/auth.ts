import Route from '@ioc:Adonis/Core/Route'
Route.get('/', 'AuthController.dashboard').middleware('auth')
Route.get('login', 'AuthController.login')
Route.get('register', 'AuthController.register')

Route.post('signin', 'AuthController.signin').as('auth.signin')
Route.post('signup', 'AuthController.singup').as('auth.signup')
Route.post('signout', 'AuthController.signout').as('auth.signout')


Route.get('v1/menu','AuthController.getmenu').middleware(['auth'])