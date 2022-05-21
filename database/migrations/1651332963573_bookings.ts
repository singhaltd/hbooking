import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Bookings extends BaseSchema {
  protected tableName = 'bookings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('ref_id',50).primary().unique()
      table.integer('cust_id',11)
      table.integer('adulth',2)
      table.integer('child',2)
      table.string('room_type',5)
      table.date('check_in_date')
      table.date('check_out_date')
      table.time('check_in_time')
      table.time('check_out_time')
      table.integer('maker',11)
      table.string('stat',1)
      table.string('booktype',5)
      table.integer('rqty',3)
      table.date('trn_date')
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
