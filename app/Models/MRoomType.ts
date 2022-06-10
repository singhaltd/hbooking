import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import MRoom from 'App/Models/MRoomType'
import MFile from './MFile'
export default class MRoomType extends BaseModel {
    public static table = "room_types"
    @column({ isPrimary: true, columnName: 'rtype' })
    public rtid: string
    @column({ columnName: 'name' })
    public title: string
    @column()
    public description: string

    @belongsTo(() => MRoom)
    public user: BelongsTo<typeof MRoom>

    // @hasMany(() => MFile, {
    //   localKey: 'rtype',
    //   foreignKey: 'rtid' // defaults to id
    // })
    public roomType: HasMany<typeof MRoomType>


    @hasMany(()=> MFile,{
        localKey:'rtid',
        foreignKey:'room_type'
    })
    public thumbnail:HasMany<typeof MFile>
}
