const db = require("../db/queries");

async function getUsers(req, res) {
  const users = await db.queryAll("users");
  res.send(
    "Users in the database: " + users.map((user) => user.username).join(", ")
  );
}

module.exports = {
  getUsers,
};
