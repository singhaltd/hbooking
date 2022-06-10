import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import MCountry from 'App/Models/MCountry'

export default class CountrySeeder extends BaseSeeder {
  public async run () {
    await MCountry.createMany([
      {
        id:'LA',
        name:'ສາທາລະນະ ລັດປະຊາທິປະໄຕ ປະຊາຊົນລາວ'
      }
    ])
    // Write your database queries inside the run method
  }
}
