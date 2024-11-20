const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});
router.get("/join-secret-cult", (req, res) => {
  res.render("join-secret-cult");
});
module.exports = router;
