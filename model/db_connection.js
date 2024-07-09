const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const mysql = require("mysql2");
console.log(process.env.MYSQL_HOST, "process.env.MYSQL_HOST");
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

console.log(pool, "pool");
