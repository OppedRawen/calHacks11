const connectDB = require('../config/db');
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
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

    // Insert new user
    const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
    const [result] = await connection.execute(query, [name, email, hashedPassword]);

    res.status(201).json({ message: 'User created successfully', userId: result.insertId });
  } catch (err) {
    console.error('Error creating user:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await connectDB();

    const [user] = await connection.execute('SELECT id, name, email, createdAt FROM Users WHERE id = ?', [id]);
    
    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user[0]);
  } catch (err) {
    console.error('Error fetching user:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const connection = await connectDB();

    const query = 'UPDATE Users SET name = ?, email = ? WHERE id = ?';
    const [result] = await connection.execute(query, [name, email, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully' });
  } catch (err) {
    console.error('Error updating user:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await connectDB();

    const [result] = await connection.execute('DELETE FROM Users WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};