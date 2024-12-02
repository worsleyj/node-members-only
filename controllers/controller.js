const db = require("../db/queries");

async function getUsers(req, res) {
  const users = await db.queryAll("users");
  res.send(
    "Users in the database: " + users.map((user) => user.username).join(", ")
  );
}

async function getMessages(req, res) {
  const messages = await db.queryAll("messages");
  res.render("messages", { messages: messages, user: req.user });
}
async function addUser(req, res) {
  const { first_name, last_name, username, password } = req.body;
  await db.insertUser(first_name, last_name, username, password);
  res.redirect("/users");
}
module.exports = {
  getUsers,
  getMessages,
  addUser,
};
