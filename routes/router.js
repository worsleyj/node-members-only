const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});
module.exports = router;
