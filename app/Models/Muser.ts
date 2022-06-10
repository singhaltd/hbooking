import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import MuRole from './MuRole'
export default class Muser extends BaseModel {
  public static table = 'users'
  @column({ isPrimary: true })
  public id: number
  @column()
  public fname: string
  @column()
  public lname: string
  @column()
  public username: string
  @column()
  public mobile: string
  @column()
  public email: string
  @column()
  public password: string
  @column()
  public rememberMeToken: string
  @column()
  public role: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: Muser) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
    if (!user.$dirty.username) {
      user.username = Math.random().toString(16).substr(2, 8)
    }
  }

  @hasOne(() => MuRole, {
    localKey: 'role',
    foreignKey: 'id'
  })
  public urole: HasOne<typeof MuRole>
}
