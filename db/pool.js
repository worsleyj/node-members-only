const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.dbName,
  port: 5432,
});
