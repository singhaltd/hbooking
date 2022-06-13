import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import MMenu from './MMenu';

export default class MuRole extends BaseModel {
  public static table = 'user_roles';
  @column({ isPrimary: true })
  public id: number
  @column()
  public title:string
  @column()
  public description:string

  @manyToMany(()=> MMenu,{
    localKey: 'id',
    relatedKey:'id',
    pivotForeignKey: 'role_id',
    pivotRelatedForeignKey: 'menu_id',
    pivotTable: 'user_role_mapings'
  })
  public menus:ManyToMany<typeof MMenu>


  
}
