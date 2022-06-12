import { DateTime } from 'luxon'
import { BaseModel, beforeSave, beforeUpdate, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import MCustomer from './MCustomer'
import Minvoice from './Minvoice'

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

  @beforeSave()
  public static async hashBooking(mbook: MBooking) {
    if (!mbook.$dirty.ref_key) {
      mbook.ref_key = Math.random().toString(16).substr(2, 8)
    }
    if (!mbook.$dirty.stat) {
      mbook.stat = 'B'
    }
  }
  @beforeUpdate()
  public static async updateStatus(mbook: MBooking){
    if(mbook.$dirty.stat == 'I'){
      mbook.stat = 'I'
      await Minvoice.create({
        ivid:Math.random().toString(16).substr(2, 8),
        bookid: mbook.$attributes.ref_key,
        total:0,
        paid:0
      })
    }
  }
}
