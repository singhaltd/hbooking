import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import MBlog from 'App/Models/MBlog'
import Application from '@ioc:Adonis/Core/Application'
export default class BlogsController {
    public async index({ view }: HttpContextContract) {
        const blog = await MBlog.query().preload('ptype')
        return view.render('blog/blog', {
            blog
        })

    }
    public async create({ view }: HttpContextContract) {
        return view.render('blog/create')

    }

    public async saveBlog({ request, response }: HttpContextContract) {
        // console.log(request.all())
        const reqBody = schema.create({
            title: schema.string(),
            body: schema.string.nullable(),
            cover_image: schema.file({ extnames: ['jpg', 'gif', 'png'] }),
            stat: schema.boolean(),
            con_type: schema.string()
        })
        const payload = await request.validate({ schema: reqBody })
        console.log(payload)
        // try {
        //     await payload.cover_image.move(Application.tmpPath('uploads/blog'))
        //     const blog = await MBlog.create({
        //         title: payload.title,
        //         body: payload.body,
        //         con_type: payload.con_type,
        //         cover_image: '/uploads/blog/' + payload.cover_image.fileName,
        //         stat: payload.stat
        //     })
        //     response.status(200)
        //     return blog
        // } catch (error) {
        //     console.log(error)
        // }
    }

    //api for client
    public async getBlog({ request, response }: HttpContextContract) {
        const { con_type } = request.all()
        const blogs = await MBlog.query().where('stat', '1').andWhere('con_type', con_type)
        response.status(200)
        return {
            data: blogs
        }
    }
    public async getFindBlog({ params, response }: HttpContextContract) {
        const blogs = await MBlog.query().where('stat', '1').andWhere('id', params.id).first()
        response.status(200)
        return {
            data: blogs
        }
    }

    public async delPost({ params, response }: HttpContextContract) {
        try {
            const bog = await MBlog.findOrFail(params.id)
            bog.delete()
            response.status(200)
            return true
        } catch (error) {

        }

    }
}
