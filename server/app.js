//* Dependencies
const config = require("./config/config");
const express = require("express");
const db = require("./services/db");
const bodyParser = require("body-parser");

const app = express();
const port = config.port;

//* Static File service
app.use(express.static("public"));

//* Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//* Routes
app.use("/stock", require("./routes/stock-route"));
app.use("/exchange", require("./routes/exchange-route"));

app.listen(port, () => console.log(`Server listening on port ${port}`));
