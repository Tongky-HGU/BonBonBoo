require("dotenv").config();
const mysql = require("mysql");

const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD } = process.env;

const dbInfo = {
  connectionLimit: 100,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: "STOCK",
};

const pool = mysql.createPool(dbInfo);

pool.getConnection((err) => {
  if (err) throw new Error(`db connection error. ${err.message}`);
  console.log("mysql is connected successfully");
});

module.exports = pool;