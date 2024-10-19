
const mysql = require('mysql2/promise');
// require('dotenv').config({ path: '.env' });
const fs = require('fs');
require('dotenv').config();

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: {
        ca: fs.readFileSync(process.env.SSL_CERT_PATH),
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
    
    
    await connection.query(`
      CREATE TABLE Experience (
    ExperienceID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,  -- Foreign key reference to User table (but without constraint)
    Organization VARCHAR(255),
    ExperienceType VARCHAR(50),
    Description TEXT,
    StartDate DATE,
    EndDate DATE,
    Technologies TEXT,
    EducationAndCertifications TEXT,
    RolesAndResponsibilities TEXT
);
`)
    console.log('Connected to SingleStore');
    return connection;
  } catch (err) {
    console.error('Error connecting to SingleStore:', err);
    process.exit(1);  // Exit process with failure

  }
};

module.exports = connectDB;
