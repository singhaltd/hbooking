import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MBookRoom extends BaseModel {
  public static table = 'booking_room'
  @column({ isPrimary: true })
  public id: number
  @column()
  public room_num: string
  @column()
  public irate: number
  @column()
  public remark: string
  @column()
  public invoice: string
  @column()
  public book_ref: string
}
