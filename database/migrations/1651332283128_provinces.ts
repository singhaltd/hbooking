import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Provinces extends BaseSchema {
  protected tableName = 'provinces'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('pv_id')
      table.string('pvname')
      table.string('country_id',6).references('cid').inTable('countries').onDelete('CASCADE')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
