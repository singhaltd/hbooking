import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import MRoom from 'App/Models/MRoom'

export default class MRoomStatus extends BaseModel {
  public static table="room_statuses"
  @column({ isPrimary: true,columnName:'scode' })
  public id: string
  @column()
  public name:string
  @column()
  public info:string


  @belongsTo(() => MRoom)
  public room: BelongsTo<typeof MRoom>
}
