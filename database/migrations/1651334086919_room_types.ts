import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RoomTypes extends BaseSchema {
  protected tableName = 'room_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('rtype',5).primary().unique()
      table.string('name',50)
      table.string('description',100)
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
