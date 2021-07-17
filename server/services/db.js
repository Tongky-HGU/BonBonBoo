const config = require("../config/config")
const mysql = require("mysql2/promise");

const pool = mysql.createPool(config.db);

pool.getConnection((err) => {
  if (err) throw new Error(`db connection error. ${err.message}`);
  console.log("mysql is connected successfully");
});

module.exports = pool;