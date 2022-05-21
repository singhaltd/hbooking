import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import MProvince from 'App/Models/MProvince'

export default class ProvinceSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await MProvince.createMany([
      { id: 1, name: "ນະຄອນຫລວງວຽງຈັນ", country: "LA" },
      { id: 2, name: "ຜົ້ງສາລີ", country: "LA" },
      { id: 3, name: "ຫລວງນ້ຳທາ", country: "LA" },
      { id: 4, name: "ອຸດົມໄຊ", country: "LA" },
      { id: 5, name: "ບໍ່ແກ້ວ", country: "LA" },
      { id: 6, name: "ຫຼວງພະບາງ", country: "LA" },
      { id: 7, name: "ຫົວພັນ", country: "LA" },
      { id: 8, name: "ໄຊຍະບູລີ", country: "LA" },
      { id: 9, name: "ຊຽງຂວາງ", country: "LA" },
      { id: 10, name: "ວຽງຈັນ", country: "LA" },
      { id: 11, name: "ບໍລິຄຳໄຊ", country: "LA" },
      { id: 12, name: "ຄຳມ່ວນ", country: "LA" },
      { id: 13, name: "ສະຫວັນນະເຂດ", country: "LA" },
      { id: 14, name: "ສາລະວັນ", country: "LA" },
      { id: 15, name: "ເຊກອງ", country: "LA" },
      { id: 16, name: "ຈຳປາສັກ", country: "LA" },
      { id: 17, name: "ອັດຕະປື", country: "LA" },
      { id: 18, name: "ໄຊສົມບູນ", country: "LA" }
    ])
  }
}
