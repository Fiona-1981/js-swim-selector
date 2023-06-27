const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "abc123",
  host: "localhost",
  port: 5432,
  database: "swim_selector"
});

module.exports = pool;