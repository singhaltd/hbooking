import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MMenu from 'App/Models/MMenu'
import Muser from 'App/Models/Muser'
import SignInValidator from 'App/Validators/SignInValidator'
import SignUpValidator from 'App/Validators/SignUpValidator'

export default class AuthController {

    public async dashboard({ view }) {
        return view.render('dashboard')
    }
    public async login({ view }: HttpContextContract) {
        return view.render('login')
    }
    public async register({ view }: HttpContextContract) {
        return view.render('register')
    }


    public async singup({ request, response, auth, session }) {
        const user = await Muser.create(request.all())
        await auth.login(user)
        session.flash('success', 'Welcome to Jagr!')
        return response.redirect('/')
    }

    public async signin({ request, response, auth, session }: HttpContextContract) {
        const { username, password, remember_me } = await request.validate(SignInValidator)

        // const loginAttemptsRemaining = await AuthAttemptService.getRemainingAttempts(username)
        // if (loginAttemptsRemaining <= 0) {
        //     session.flash('error', 'Your account has been locked due to repeated bad login attempts. Please reset your password.')
        //     return response.redirect('/forgot-password')
        // }

        try {
            await auth.attempt(username, password, remember_me)
            // await AuthAttemptService.deleteBadAttempts(uid)
        } catch (error) {
            // await AuthAttemptService.recordLoginAttempt(uid)

            session.flash('errors', { form: 'The provided username/email or password is incorrect' })
            return response.redirect().back()
        }

        session.flash('success', 'Welcome back!')

        return response.redirect('/')
    }

    public async signout({ response, auth, session }: HttpContextContract) {
        await auth.logout()

        session.flash('success', 'You have been logged out')

        return response.redirect('/')
    }
    /// api


    public async getmenu({ request, auth }: HttpContextContract) {
        return await MMenu.all()
    }
}
