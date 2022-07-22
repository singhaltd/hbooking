import Route from '@ioc:Adonis/Core/Route'
import './routes/users'
import './routes/auth'
import './routes/room'
import './routes/book'
import './routes/city'
import './routes/blog'
import './routes/report'
Route.get('*', async ({ response }) => {
    return response.redirect('/peot')
})


