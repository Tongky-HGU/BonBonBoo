const exchange = require("../services/exchange-service");

exports.getRate = async (req, res, next) => {
    try {
        let rows = await exchange.getRate()
        console.log(rows[0])
        return res.json(rows[0])
    } catch (err) {
        return res.status(500).json(err)
    }
}


// exports.deleteComment = async (req, res, next) => {
//     let { boardId, commentId } = req.params
//     try {
//         let del = await BoardService.deleteComment(boardId, commentId)
//         return res.json(del)
//     } catch (err) {
//         return res.status(500).json(err)
//     }
// }