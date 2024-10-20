const connectDB = require('../config/db');

exports.saveProfile = async (req, res) => {
  const { name, desiredJobTitle, jobType, preferredIndustry, experienceYears, programmingLanguages, frameworks } = req.body;

  try {
    const connection = await connectDB();
    
    // Insert profile data
    const query = `
      INSERT INTO UserProfile (name, desiredJobTitle, jobType, preferredIndustry, experienceYears, programmingLanguages, frameworks)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    
    const [result] = await connection.execute(query, [
      name,
      desiredJobTitle,
      jobType,
      JSON.stringify(preferredIndustry),
      experienceYears,
      JSON.stringify(programmingLanguages),
      JSON.stringify(frameworks)
    ]);

    res.status(201).json({ message: 'Profile created', profileId: result.insertId });
  } catch (err) {
    console.error('Error saving profile:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
