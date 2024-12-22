import pool from './db.js'; // Ensure the file extension is included

(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Connected to the database:', result.rows[0]);
  } catch (err) {
    console.error('Database connection error:', err.message);
  } finally {
    pool.end();
  }
})();