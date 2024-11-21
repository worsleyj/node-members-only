const { Router } = require("express");
const router = Router();
const controller = require("../controllers/controller");

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});
router.get("/join-secret-cult", (req, res) => {
  res.render("join-secret-cult");
});
router.get("/users", (req, res) => {
  controller.getUsers(req, res);
});

module.exports = router;
