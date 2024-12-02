const { Router } = require("express");
const router = Router();
const controller = require("../controllers/controller");
const pool = require("../db/pool");

router.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

router.get("/join-secret-cult", (req, res) => {
  res.render("join-secret-cult");
});

router.get("/users", (req, res) => {
  controller.getUsers(req, res);
});

router.get("/messages", (req, res) => {
  controller.getMessages(req, res);
});

module.exports = router;
