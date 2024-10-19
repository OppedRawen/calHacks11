const mysql = require('mysql2');

// Create a connection to the SingleStore database
const connection = mysql.createConnection({
   
  host: 'svc-3482219c-a389-4079-b18b-d50662524e8a-shared-dml.aws-virginia-6.svc.singlestore.com',   // Use your SingleStore hostname (e.g., from the connection string)
  user: 'david-2e12e',           // Your SingleStore username
  password: 'Heheda3120@',       // Your SingleStore password
  database: 'db_david_5328b',       // The database you're working with
  port: 3333                       // Default MySQL port used by SingleStore
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to SingleStore: ' + err.stack);
    return;
  }
  console.log('Connected to SingleStore as ID ' + connection.threadId);
});

module.exports = connection;
