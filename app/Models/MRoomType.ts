import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import MRoom from 'App/Models/MRoomType'
import { DateTime } from 'luxon'
import MFile from './MFile'
export default class MRoomType extends BaseModel {
    public static table = "room_types"
    @column({ isPrimary: true, columnName: 'rtype' })
    public rtid: string
    @column({ columnName: 'name' })
    public title: string
    @column()
    public description: string
    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
    @belongsTo(() => MRoom)
    public user: BelongsTo<typeof MRoom>

    // @hasMany(() => MFile, {
    //   localKey: 'rtype',
    //   foreignKey: 'rtid' // defaults to id
    // })
    public roomType: HasMany<typeof MRoomType>


    @hasMany(() => MRoom, {
        localKey: 'rtid',
        foreignKey: 'rtype'
    })
    public Room: HasMany<typeof MRoom>

    @hasMany(() => MFile, {
        localKey: 'rtid',
        foreignKey: 'room_type'
    })
    public thumbnail: HasMany<typeof MFile>
}
