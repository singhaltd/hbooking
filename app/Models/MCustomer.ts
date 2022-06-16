import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import MBooking from './MBooking'

export default class MCustomer extends BaseModel {
  public static table = 'customers'
  @column({ isPrimary: true ,columnName:'cid'})
  public id: number
  @column()
  public fname:string
  @column()
  public lname:string
  @column()
  public email:string
  @column()
  public mobile:string
  @column()
  public dob:DateTime
  @column()
  public district_id:string
  @column()
  public village:string
  @column()
  public doc_type:string
  @column()
  public doc_no:string
  @column()
  public sex:string
  @column()
  public status:string
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @hasMany(()=> MBooking,{
    localKey:'id',
    foreignKey:'cust_id',
  })
  public booking:HasMany<typeof MBooking>
}
