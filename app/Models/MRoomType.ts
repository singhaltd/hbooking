import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
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


    @belongsTo(() => MRoom,{
        localKey:'rtid',
        foreignKey:'rtype'
    })
    public price: BelongsTo<typeof MRoom>

    @hasMany(() => MFile, {
        localKey: 'rtid',
        foreignKey: 'room_type'
    })
    public thumbnail: HasMany<typeof MFile>
}
