const { Router } = require("express");
const router = Router();
const controller = require("../controllers/controller");
const pool = require("../db/pool");

router.get("/", (req, res) => {
  controller.getMessages(req, res);
});

router.get("/join-secret-cult", (req, res) => {
  res.render("join-secret-cult");
});

router.get("/users", (req, res) => {
  controller.getUsers(req, res);
});

router.get("/new", (req, res) => {
  res.render("new-message", { user: req.user });
});

router.post("/new", (req, res) => {
  controller.addMessage(req, res);
});

module.exports = router;
