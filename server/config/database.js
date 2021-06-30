require("dotenv").config();
const mysql = require("mysql");

const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD } = process.env;

const dbInfo = {
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: "STOCK",
};

module.exports = {
  init: () => {
    return mysql.createConnection(dbInfo);
  },
  connect: (connection) => {
    connection.connect((err) => {
      if (err) console.error("mysql connection error : " + err);
      else console.log("mysql is connected successfully");
    });
  },
  end: (connection) => {
    connection.end((err) => {
      if (err) console.error("mysql end connection error : " + err);
      else console.log("mysql is disconnected successfully");
    });
  },
};
