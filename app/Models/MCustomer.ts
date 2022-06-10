import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MCustomer extends BaseModel {
  public static table = 'customers'
  @column({ isPrimary: true })
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
  public dob:Date
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
}