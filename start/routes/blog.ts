import Route from '@ioc:Adonis/Core/Route'
import Application from '@ioc:Adonis/Core/Application'
Route.group(() => {
    Route.get('/', 'BlogsController.index').as('auth.blog')
    Route.get('/create', 'BlogsController.create')
}).prefix('blog').middleware(['auth'])


Route.group(() => {
    Route.post('', 'BlogsController.saveBlog').as('api.blog.store')
    Route.get('/list', 'BlogsController.getBlog')
    Route.get('/:id', 'BlogsController.getFindBlog')
    Route.delete('/:id', 'BlogsController.delPost')
}).prefix('api/blog')

Route.get('file', ({ request, response }) => {
    const { ffile } = request.all()
    const filePath = Application.tmpPath(ffile)
    response.download(filePath, true, (error) => {
        if (error.code === 'ENOENT') {
            return ['File does not exists', 404]
        }

        return ['Cannot download file', 400]
    })
})

