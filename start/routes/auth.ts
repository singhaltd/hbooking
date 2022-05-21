import Route from '@ioc:Adonis/Core/Route'
Route.get('/', 'AuthController.dashboard')
Route.get('login', 'AuthController.login')
Route.get('register', 'AuthController.register')

Route.post('signin', 'AuthController.signin').as('auth.signin')
Route.post('signup', 'AuthController.singup').as('auth.signup')