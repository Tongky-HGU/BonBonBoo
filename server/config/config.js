require("dotenv").config();

const env = process.env;

const config = {
  port: env.PORT || 3000,
  db: {
    connectionLimit: 100,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    host: env.MYSQL_HOST,
    port: env.MYSQL_PORT,
    database: "STOCK",
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
