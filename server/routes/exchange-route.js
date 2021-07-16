const router = require("express").Router();
const exchange = require("../controllers/exchange-controller");

router.get("/rate", exchange.getRate);

module.exports = router;
