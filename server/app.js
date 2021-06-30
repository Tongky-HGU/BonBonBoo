const express = require("express");
const database = require("./config/database");

const app = express();
const sql = database.init()

database.connect(sql);
database.end(sql);
