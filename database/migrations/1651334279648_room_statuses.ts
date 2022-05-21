import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RoomStatuses extends BaseSchema {
  protected tableName = 'room_statuses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('scode',10).primary().unique()
      table.string('name',50)
      table.string('info')

      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
