import React, { useState } from 'react';
import axios from 'axios';

function ProfileQuestionnaire() {
  const [profileData, setProfileData] = useState({
    desiredJobTitle: '',
    jobType: '',
    preferredIndustry: '',
    experienceYears: '',
    programmingLanguages: '',
    currentLearning: '',
    careerGoals: ''
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/userProfile/save-profile', profileData);
      alert('Profile saved successfully!');
    } catch (err) {
      console.error('Error saving profile', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Profile Questionnaire</h2>
      <label>Desired Job Title:</label>
      <input type="text" name="desiredJobTitle" onChange={handleChange} />

      <label>Job Type (Full-Time, Part-Time, Freelance):</label>
      <input type="text" name="jobType" onChange={handleChange} />

      <label>Preferred Industry:</label>
      <input type="text" name="preferredIndustry" onChange={handleChange} />

      <label>Years of Experience:</label>
      <input type="number" name="experienceYears" onChange={handleChange} />

      <label>Programming Languages (comma separated):</label>
      <input type="text" name="programmingLanguages" onChange={handleChange} />

      <label>Current Learning:</label>
      <input type="text" name="currentLearning" onChange={handleChange} />

      <label>Career Goals:</label>
      <textarea name="careerGoals" onChange={handleChange} />

      <button type="submit">Submit Profile</button>
    </form>
  );
}

export default ProfileQuestionnaire;
