const mysql = require('mysql2/promise');
// require('dotenv').config({ path: '.env' });
const fs = require('fs');

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'svc-3482219c-a389-4079-b18b-d50662524e8a-shared-dml.aws-virginia-6.svc.singlestore.com',
      port: 3333,
      user: 'david-2e12e',
      password: 'Heheda3120@',
      database: 'db_david_5328b',
      ssl: {
        ca: fs.readFileSync('./test/singlestore_bundle.pem'),
    }
    });

    await connection.query(`
      CREATE TABLE IF NOT EXISTS UserProfile (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        desiredJobTitle VARCHAR(255),
        jobType ENUM('Full-Time', 'Part-Time', 'Freelance'),
        preferredIndustry JSON,
        experienceYears INT,
        programmingLanguages JSON,
        frameworks JSON,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    await connection.query(`
      CREATE TABLE IF NOT EXISTS Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,  -- No unique constraint
  password VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
    `);
    
    
    
    console.log('Connected to SingleStore');
    return connection;
  } catch (err) {
    console.error('Error connecting to SingleStore:', err);
    process.exit(1);  // Exit process with failure
  }
};

module.exports = connectDB;
