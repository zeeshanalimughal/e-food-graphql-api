const mongoose = require('mongoose');
const UsersSeeder= require('./seeders/users.seeder.js')
require("dotenv").config();
const mongoURL = process.env.MONGO_URL_WITH_DB_NAME;


/**
 * Seeders List
 * order is important
 * @type {Object}
 */
exports.seedersList = {
  UsersSeeder
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
exports.connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
exports.dropdb = async () => mongoose.connection.db.dropDatabase();
