require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes");
const authRouter = require("./routes/auth");
const session = require("express-session");
const passport = require("passport");

app.set("view engine", "ejs");
app.use(
  session({ secret: "confidential", resave: false, saveUninitialized: false })
);
app.use(express.static("public"));
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/", authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`members only message board listening on port ${PORT}`)
);
