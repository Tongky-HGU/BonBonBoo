const db = require("./db");
const exchange = require("../queries/exchange-query");

exports.getRate = async () => {
  try {
    let data = await db.query(exchange.getRate);
    return data;
  } catch (err) {
    console.log(err);
    throw Error(err);
  }
};

// exports.deleteComment = async (boardId, commentId) => {
//   let conn = await pool.getConnection();
//   try {
//     await conn.beginTransaction();

//     let del = await conn.query(BoardQuery.deleteComment, [commentId]);
//     if (del[0].affectedRows == 1) {
//       let upd = await conn.query(BoardQuery.minusCommentCnt, [boardId]);
//     }
//     await conn.commit();

//     return del[0];
//   } catch (err) {
//     conn.rollback();
//     console.log(err);
//     throw Error(err);
//   } finally {
//     conn.release();
//   }
// };
