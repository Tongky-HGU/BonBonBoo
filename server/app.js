//* Dependencies
const config = require("./config/config");
const express = require("express");
const db = require("./services/db");
const bodyParser = require("body-parser");
const cors = require("cors")
const morgan = require("morgan")

const app = express();
const port = config.port;


//*log
// app.use(morgan('combined'));
app.use(morgan('dev'));

//* cors
app.use(cors())

//* Static File service
app.use(express.static("public"));

//* Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//* Routes
app.use("/api/stock", require("./routes/stock-route"));
app.use("/api/exchange", require("./routes/exchange-route"));

app.listen(port, () => console.log(`Server listening on port ${port}`));
