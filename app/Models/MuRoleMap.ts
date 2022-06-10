import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
export default class MuRoleMap extends BaseModel {
  public static table = "user_role_mapings"
  @column({ isPrimary: true })
  public id: number
  @column({columnName:'role_id'})
  public role:number
  @column({columnName:'menu_id'})
  public menu:number
  @column()
  public create:number
  @column()
  public udpate:number
  @column({columnName:'delete'})
  public del:number
}
