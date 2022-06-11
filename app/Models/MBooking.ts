import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import MCustomer from './MCustomer'

export default class MBooking extends BaseModel {
  public static table = 'bookings'
  @column({ isPrimary: true, columnName: 'ref_id' })
  public ref_key: string
  @column()
  public cust_id: number
  @column()
  public adulth: number
  @column()
  public child: number
  @column()
  public check_in_date: Date
  @column()
  public check_out_date: Date
  @column()
  public check_in_time: string
  @column()
  public check_out_time: string
  @column()
  public maker: string
  @column()
  public stat: string
  @column()
  public booktype: string
  @column()
  public rqty: number
  @column()
  public trn_date: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => MCustomer, {
    localKey: 'cust_id',
    foreignKey: 'id'
  })
  public Cust: HasOne<typeof MCustomer>
}
