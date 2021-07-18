const stock = require("../services/stock-service");

exports.getData = async (req, res, next) => {
    try {
        let rows = await stock.getData()
        return res.json(rows[0])
    } catch (err) {
        return res.status(500).json(err)
    }
}