exports.uploadResume = async (req, res) => {
  try {
    console.log('Entering uploadResume function');
    const file = req.file;
    const { userId } = req.body;

    console.log('File:', file);
    console.log('UserId:', userId);

    if (!file) {
      console.log('No file uploaded');
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const { filename, path, mimetype, size } = file;

    console.log('Connecting to database');
    const connection = await connectDB();

    console.log('Inserting file information into database');
    const query = `
      INSERT INTO Resumes (user_id, filename, path, mimetype, size)
      VALUES (?, ?, ?, ?, ?)
    `;
    await connection.execute(query, [userId, filename, path, mimetype, size]);

    console.log('File information inserted successfully');
    res.status(200).json({ message: 'Resume uploaded successfully', file: { filename, path, mimetype, size } });
  } catch (err) {
    console.error('Error in uploadResume:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};