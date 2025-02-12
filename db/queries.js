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

async function insertMessage(title, text, created_by) {
  await pool.query(
    "INSERT INTO messages (title, timestamp, text, created_by) VALUES ($1, current_timestamp, $2, $3)",
    [title, text, created_by]
  );
}

async function upgradeUser(status, id) {
  await pool.query(
    "UPDATE users SET member_status = '" + status + "' WHERE id = " + id
  );
}

module.exports = {
  queryAll,
  insertUser,
  insertMessage,
  upgradeUser,
};
