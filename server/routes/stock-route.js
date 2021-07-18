const router = require("express").Router();
const stock = require("../controllers/stock-controller");

router.get("/data", stock.getData);

module.exports = router;
