const connectDB = require('../config/db');

// Save a new experience
exports.saveExperience = async (req, res) => {
  const { userId, organization, experienceType, description, startDate, endDate, technologies, educationAndCertifications, rolesAndResponsibilities } = req.body;

  try {
    const connection = await connectDB();
    
    // Insert experience data into the Experience table
    const query = `
      INSERT INTO Experience (UserID, Organization, ExperienceType, Description, StartDate, EndDate, Technologies, EducationAndCertifications, RolesAndResponsibilities)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await connection.execute(query, [
      userId,
      organization,
      experienceType,
      description,
      startDate || null, // Optional fields
      endDate || null,    // Optional fields
      technologies,
      educationAndCertifications,
      rolesAndResponsibilities
    ]);

    res.status(201).json({ message: 'Experience saved successfully', experienceId: result.insertId });
  } catch (err) {
    console.error('Error saving experience:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const connection = await connectDB();
      
      // First, delete experiences associated with this user
      await connection.execute('DELETE FROM Experience WHERE UserID = ?', [userId]);
  
      // Then, delete the user itself
      await connection.execute('DELETE FROM User WHERE UserID = ?', [userId]);
  
      res.status(200).json({ message: 'User and related experiences deleted successfully' });
    } catch (err) {
      console.error('Error deleting user:', err.message);
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };