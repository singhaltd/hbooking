import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Districts extends BaseSchema {
  protected tableName = 'districts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('dt_id')
      table.string('dtname',50)
      table.integer('pv_id').unsigned().references('pv_id').inTable('provinces').onDelete('CASCADE')
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
