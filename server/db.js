const Pool = require("pg").Pool;

const pool = new Pool({
  user: "fionawiggins",
  password: "Skint962",
  host: "localhost",
  port: 5432,
  database: "swim_selector"
});

module.exports = pool;