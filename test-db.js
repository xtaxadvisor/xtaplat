const pool = require('./db'); // Import your database module

(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Connected to the database:', result.rows[0]);
  } catch (err) {
    console.error('Database connection error:', err.message);
  } finally {
    pool.end(); // Close the connection pool
  }
})();