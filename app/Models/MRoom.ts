import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import MRoomType from 'App/Models/MRoomType'
import MRoomStatus from 'App/Models/MRoomStatus'

export default class MRoom extends BaseModel {
  public static table = "rooms"
  @column({ isPrimary: true, columnName: "rid" })
  public id: number
  @column({ columnName: 'number' })
  public room_num: string
  @column({ columnName: 'price' })
  public price: number
  @column({ columnName: 'status' })
  public status: string
  @column({ columnName: 'room_type' })
  public rtype: string
  @column()
  public building: string
  @column()
  public floor: string
  @column()
  public view: string

  @hasOne(() => MRoomType, {
    localKey: 'rtype',
    foreignKey: 'rtid' // defaults to id
  })
  public roomType: HasOne<typeof MRoomType>

  @hasOne(() => MRoomStatus, {
    localKey: 'status',
    foreignKey: 'id' // defaults to id
  })
  public roomStatus: HasOne<typeof MRoomStatus>
}
