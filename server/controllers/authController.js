const bcrypt = require('bcryptjs');
const connectDB = require('../config/db');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const connection = await connectDB();

    // Check if user already exists
    const [existingUser] = await connection.execute('SELECT * FROM Users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user into Users table
    const query = `
      INSERT INTO Users (name, email, password)
      VALUES (?, ?, ?)
    `;
    await connection.execute(query, [name, email, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const connection = await connectDB();
  
      // Find user by email
      const [user] = await connection.execute('SELECT * FROM Users WHERE email = ?', [email]);
      if (user.length === 0) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Check if password is correct
      const isMatch = await bcrypt.compare(password, user[0].password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Send success message or token
      res.status(200).json({ message: 'Login successful', userId: user[0].id });
    } catch (err) {
      console.error('Error logging in:', err.message);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };
  