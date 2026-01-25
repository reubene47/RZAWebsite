import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
  host: 'localhost',
  user: 'rza_admin',
  password: 'admin',
  database: 'rza_data'
});

export { db };

// Db files will be split out only for readability