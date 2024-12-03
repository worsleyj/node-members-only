const db = require("../db/queries");

async function getUsers(req, res) {
  const users = await db.queryAll("users");
  res.send(
    "Users in the database: " + users.map((user) => user.username).join(", ")
  );
}

async function getMessages(req, res) {
  const messages = await db.queryAll("messages");
  res.render("index", { messages: messages, user: req.user });
}

async function addUser(req, res) {
  const { first_name, last_name, username, password } = req.body;
  await db.insertUser(first_name, last_name, username, password);
  res.redirect("/users");
}

async function addMessage(req, res) {
  const { title, timestamp, text } = req.body;
  const created_by = req.user.first_name;
  await db.insertMessage(title, timestamp, text, created_by);
  res.redirect("/");
}

async function upgradeMember(req, res) {
  const id = req.user.id;
  db.upgradeUser("member", id);
}

async function upgradeAdmin(req, res) {
  const id = req.user.id;
  db.upgradeUser("admin", id);
}

module.exports = {
  getUsers,
  getMessages,
  addUser,
  addMessage,
  upgradeMember,
  upgradeAdmin,
};
