const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'L2i0z0a1',
  host: 'localhost',
  port: 5432,
  database: 'bank_account'
});

const getClient = async () => {
  try {
    const client = await pool.connect();
    return client;
  } catch (error) {
    return null;
  }
};

module.exports = { pool, getClient };
