const connectDB = require('../config/db');

exports.saveTranscript = async (req, res) => {
  const { userId, transcript } = req.body;
  console.log(req.body); // Check what data is received


  if (!userId || !transcript) {
    return res.status(400).json({ message: 'User ID and transcript are required' });
  }
  try {
    const connection = await connectDB();

    // Insert transcript data
    const query = `
      INSERT INTO Transcripts (user_id, transcript)
      VALUES (?, ?)
    `;

    const [result] = await connection.execute(query, [userId, transcript]);

    res.status(201).json({ message: 'Transcript saved', transcriptId: result.insertId });
  } catch (err) {
    console.error('Error saving transcript:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.deleteUserAndTranscripts = async (userId) => {
    try {
      const connection = await connectDB();
  
      // Delete transcripts for the user
      await connection.execute('DELETE FROM Transcripts WHERE user_id = ?', [userId]);
  
      // Delete user
      await connection.execute('DELETE FROM Users WHERE id = ?', [userId]);
  
      console.log(`User and related transcripts deleted for user ID ${userId}`);
    } catch (err) {
      console.error('Error deleting user and transcripts:', err.message);
    }
  };