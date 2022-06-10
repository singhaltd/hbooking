import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MBlog extends BaseModel {
  public static table="posts"
  @column({ isPrimary: true })
  public id: number
  @column()
  public title: string
  @column()
  public body: string
  @column()
  public cover_image: string
  @column()
  public con_type: string
  @column()
  public stat: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
