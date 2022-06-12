import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MPayment extends BaseModel {
  public static table="payment_type"
  @column({ isPrimary: true })
  public id: number
  @column()
  public ac_no:string
  @column()
  public placeholder:string
  @column()
  public qrcode:string
  @column()
  public info:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
