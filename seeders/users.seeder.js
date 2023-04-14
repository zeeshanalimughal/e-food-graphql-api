const { Seeder }  = require('mongoose-data-seed');
const  User   = require('../src/models/user');
const bcrypt = require("bcrypt");

class UsersSeeder extends Seeder {

  async shouldRun() {
    return true
  }

  async run() {
    const hashedPassword = await bcrypt.hash(
      "Pioneer123123@",
      10
    );

    const data = [
      {
        FirstName: "Super",
        LastName: "Admin",
        Password:hashedPassword,
        isVerfied: true,
        Organization: "none",
        Role: "Super Admin",
        Email: "superadmin@gmail.com",
        Profile_image: "Test.png",
        Phone_NO: "03985034985",
      },
    ];
    
    const res = await User.findOneAndUpdate({Email:data[0].Email},data[0],{upsert:true});
    return [res]
  }
}


module.exports = UsersSeeder
