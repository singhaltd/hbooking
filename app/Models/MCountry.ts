import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import MProvince from './MProvince'

export default class MCountry extends BaseModel {
  public static table = 'countries'
  @column({ isPrimary: true, columnName: 'cid' })
  public id: string
  @column({ columnName: 'cname' })
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=> MProvince,{
    localKey:'id',
    foreignKey:'country'
  })
  public provinces:HasMany<typeof MProvince>
}
