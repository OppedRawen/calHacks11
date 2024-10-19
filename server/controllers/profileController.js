const UserProfile = require('../models/UserProfile');

// Save or update profile data (without authentication)
exports.saveProfile = async (req, res) => {
  const profileData = req.body;  // The profile data coming from the frontend

  try {
    // Assume each user has a unique profileId in the frontend
    let userProfile = await UserProfile.findOne({ user: profileData.user });

    if (userProfile) {
      // Update existing profile
      userProfile = await UserProfile.findOneAndUpdate({ user: profileData.user }, profileData, { new: true });
    } else {
      // Create a new profile
      userProfile = new UserProfile(profileData);
      await userProfile.save();     
    }

    res.status(200).json(userProfile);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get profile by ID (without authentication)
exports.getProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const userProfile = await UserProfile.findOne({ user: id });
    if (!userProfile) return res.status(404).json({ message: 'Profile not found' });

    res.status(200).json(userProfile);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Export profile as JSON (without authentication)
exports.exportProfileAsJSON = async (req, res) => {
  const { id } = req.params;

  try {
    const userProfile = await UserProfile.findOne({ user: id });
    if (!userProfile) return res.status(404).json({ message: 'Profile not found' });

    res.setHeader('Content-Disposition', 'attachment; filename="user_profile.json"');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(userProfile, null, 2));
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
