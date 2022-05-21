import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SignUpValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    fname: schema.string(),
    lname: schema.string(),
    mobile: schema.string(),
    email: schema.string(),
    passoword: schema.string()
  })

  public messages = {}
}
