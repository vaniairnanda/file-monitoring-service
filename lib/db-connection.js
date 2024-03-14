require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user:  process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

async function dbConnect() {
  const client = await pool.connect();
  return client;
}


module.exports = dbConnect