import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'AuthController.dashboard').middleware('auth')
    Route.get('login', 'AuthController.login')
    Route.get('register', 'AuthController.register')

    Route.post('signin', 'AuthController.signin').as('auth.signin')
    Route.post('signinApi', 'AuthController.signinApi')
    Route.post('signup', 'AuthController.singup').as('auth.signup')
    Route.post('signout', 'AuthController.signout').as('auth.signout')


    Route.get('v1/menu', 'AuthController.getmenu').middleware(['auth'])
}).prefix('peot')

// Route.any('*', async ({ response }) => {
//     response.redirect('/peot')
// })
