import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MPostType extends BaseModel {
  public static table = "posts_type"
  @column({ isPrimary: true })
  public id: number
  @column()
  public info: string
}
