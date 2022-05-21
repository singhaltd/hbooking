import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import MRoomStatus from 'App/Models/MRoomStatus'

export default class RoomstatusSeeder extends BaseSeeder {
  public async run() {
    await MRoomStatus.createMany([
        { name: "Vacant", id: "V", info: "Sebutan bagi kamar yang kosong."},
        { name: "Occupied", id: "O", info: "Suatu kamar yang sedang ditempati oleh sesorang secara sah dan teregister sebagai tamu hotel."},
        { name: "Occupied Clean", id: "OC", info: "Suatu kamar yang sedang ditempati oleh sesorang secara sah dan teregister sebagai tamu hotel pada kamar yang bersih."},
        { name: "Occupied Dirty", id: "OD", info: "Suatu kamar yang sedang ditempati oleh sesorang secara sah dan teregister sebagai tamu hotel pada kamar yang kotor. Ini terjadi akibat perubahan status dari OC ke OD setelah melewati satu malam stay."},
        { name: "Vacant Clean Inspected", id: "VCI", info: "Kamar kosong yang sudah dibersihkan dan diperiksa oleh floor supervisor dan siap untuk menerima tamu (dijual)."},
        { name: "Vacant Clean", id: "VC", info: "Kamar yang kosong dengan keadaan bersih."},
        { name: "Vacant Dirty", id: "VD", info: "Kamar yang kosong dengan keadaan kotor. kamar kotor dapat terjadi karena tamu yang sudah check out atau program cleaning dari housekeeping." },
        { name: "Compliment", id: "Comp", info: "Kamar yang terigester oleh seorang tamu, namun kamar tersebut free of charge (gratis)."},
        { name: "House Use", id: "HU", info: "Kamar yang teregister tetapi digunakan oleh pihak managemen hotel."},
        { name: "Do not Disturb", id: "DND", info: "Kamar yang menaruh tanda tersebut berarti tamu tidak ingin di ganggu."},
        { name: "Sleep Out", id: "SO", info: "Seorang tamu yang masih teregister, namun kamar tidak dipergunakan karena tamu tesebut harus meninggalkan hotel beberapa hari atau tamu sedang tidur diluar area hotel."},
        { name: "Skipper", id: "Skip", info: "Tamu meninggalkan hotel sebelum melunasi semua kewajibannya ."},
        { name: "Out of Service", id: "OS", info: "Status kamar yang sedang dalam perbaikan."},
        { name: "Out of Order", id: "OOO", info: "Kamar yang memerlukan perbaikan yang serius, biasanya lama perbaikan lebih dari satu hari. Status ini dapat terjadi karena kerusakan di kamar atau progam cleaning dari housekeeping.Out of order mengurangi room availability."},
        { name: "Due Out \/ Expected Departure", id: "DO\/ED", info: "Daftar kamar-kamar yang diharapkan untuk check-out hari ini sesuai dengan tanggal departure."},
        { name: "Expected Arrival", id: "EA", info: "Daftar nama-nama tamu yang diharapkan tiba hari ini."},
        { name: "Check Out", id: "CO", info: "Tamu yang sudah meninggalkan hotel hari ini setelah melunasi semua kewajibannya termasuk menyerahkan kunci yang dipakai ke front office." },
        { name: "Late Check Out", id: "LCO", info: "Permintaan tamu untuk meninggalkan hotel lebih lambat dari waktu check out yang ditentukan."},
        { name: "Occupeid no Luggage", id: "ONL", info: "Seorang tamu yang masih teregister pada suatu kamar tanpa suatu barang apapun di dalamnya."},
        { name: "Double Lock", id: "DL", info: "Permintaan tamu ke pihak hotel untuk melakukan double lock sehingga tidak seorangpun dapat masuk ke kamar tersebut."}
    ])
  }
}
