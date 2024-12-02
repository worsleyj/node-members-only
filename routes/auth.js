const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const pool = require("../db/pool");

router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.post("/sign-up", async (req, res, next) => {
  bcrypt.hash(req.body.password, 10, async (_err, hashedPassword) => {
    try {
      await pool.query(
        "INSERT INTO users (first_name, last_name, username, password, member_status) VALUES ($1, $2, $3, $4, $5)",
        [
          req.body.first_name,
          req.body.last_name,
          req.body.username,
          hashedPassword,
          "guest",
        ]
      );
      res.redirect("/");
    } catch (err) {
      return next(err);
    }
  });
});

router.get("/log-in", (req, res) => {
  res.render("log-in", { user: req.user });
});

router.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/messages",
    failureRedirect: "/log-in",
  })
);

router.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/log-in");
  });
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await pool.query(
        "SELECT * FROM users WHERE username = $1",
        [username]
      );
      const user = rows[0];

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      // compare hashed password with attempted password
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    const user = rows[0];

    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = router;
