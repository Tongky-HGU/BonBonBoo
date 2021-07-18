const db = require("./db");
const stock = require("../queries/stock-query");

exports.getData = async () => {
  try {
    let data = await db.query(stock.getData);
    return data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};