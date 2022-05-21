import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Menus extends BaseSchema {
  protected tableName = 'menus'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title',50)
      table.integer('order',2)
      table.string('slug',100)
      table.string('target',100)
      table.integer('parent',11)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
