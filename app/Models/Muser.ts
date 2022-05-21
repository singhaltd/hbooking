import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Muser extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  public fname: string
  public lname: string
  public username: string
  public mobile: string
  public email: string
  public passowrd: string
  public rememberMeToken: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
