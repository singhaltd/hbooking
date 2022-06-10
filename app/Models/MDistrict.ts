import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@ioc:Adonis/Lucid/Orm'

export default class MDistrict extends BaseModel {
  public static table = 'districts'
  @column({ isPrimary: true, columnName: 'dt_id' })
  public id: number
  @column({ columnName: 'dtname' })
  public name: string
  @column({ columnName: 'pv_id' })
  public province: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
