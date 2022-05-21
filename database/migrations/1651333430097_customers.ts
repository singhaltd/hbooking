import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Customers extends BaseSchema {
  protected tableName = 'customers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cid')
      table.string('fname',50)
      table.string('lname',50)
      table.string('email')
      table.string('mobile',20)
      table.date('dob')
      table.integer('district_id').unsigned().references('dt_id').inTable('districts').onDelete('CASCADE')
      table.string('village',50)
      table.string('doc_type',50)
      table.string('doc_no',50)
      table.string('sex',1)
      table.string('status',1)
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
