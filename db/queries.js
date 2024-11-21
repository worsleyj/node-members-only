const pool = require("./pool");

async function queryAll(table) {
  const { rows } = await pool.query("SELECT * FROM " + table);
  return rows;
}

module.exports = {
  queryAll,
};
