import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Rooms extends BaseSchema {
  protected tableName = 'rooms'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('rid')
      table.string('number',3)
      table.string('view',100)
      table.string('building',3)
      table.string('floor',3)
      table.float('price')
      table.string('room_type',5).references('rtype').inTable('room_types').onDelete('CASCADE')
      table.string('status',10).references('scode').inTable('room_statuses').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
