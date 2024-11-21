const pool = require("./pool");

async function queryAll(table) {
  const { rows } = await pool.query("SELECT * FROM " + table);
  return rows;
}

async function insertUser(first_name, last_name, username, password) {
  await pool.query(
    "INSERT INTO users (first_name, last_name, username, password, member_status) VALUES ($1, $2, $3, $4, $5)",
    [first_name, last_name, username, password, "guest"]
  );
}

module.exports = {
  queryAll,
  insertUser,
};
