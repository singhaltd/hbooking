import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MMenu extends BaseModel {
  public static table = 'menus'
  @column({ isPrimary: true })
  public id: number
  @column()
  public title: string
  @column()
  public order: number
  @column()
  public slug: string
  @column()
  public target: string
  @column()
  public parent: number
}
