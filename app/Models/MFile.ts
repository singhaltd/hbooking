import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import MRoom from './MRoom'

export default class MFile extends BaseModel {
  public static table = 'files'
  @column({ isPrimary: true })
  public id: number
  @column()
  public name: string
  @column()
  public alt: string
  @column()
  public caption: string
  @column()
  public ext: string
  @column()
  public size: number
  @column()
  public url: string
  @column()
  public room_type: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => MRoom, {
    localKey: 'room_type',
    foreignKey: 'rtid'
  })
  public broom: BelongsTo<typeof MRoom>
}
