import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import MBooking from 'App/Models/MBooking'

export default class Minvoice extends BaseModel {
  public static table = "invoice"
  @column({ isPrimary: true })
  public ivid: string
  @column()
  public bookid: string
  @column()
  public remark: string
  @column()
  public total: number
  @column()
  public paid: number
  @column()
  public pay_type: number
  @column()
  public trn_date: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => MBooking, {
    localKey: 'bookid',
    foreignKey: 'ref_key'
  })
  public book: HasOne<typeof MBooking>
}
