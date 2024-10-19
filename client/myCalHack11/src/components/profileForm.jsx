import { useState } from 'react';
import axios from 'axios';

function ProfileForm() {
  const [formData, setFormData] = useState({
    name: '',
    desiredJobTitle: '',
    jobType: '',
    preferredIndustry: '',
    experienceYears: '',
    programmingLanguages: '',
    frameworks: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/profile/save-profile', formData);
      alert('Profile saved successfully');
    } catch (err) {
      console.error('Error saving profile', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="desiredJobTitle" placeholder="Desired Job Title" onChange={handleChange} />
      <input type="text" name="jobType" placeholder="Job Type (Full-Time, Part-Time, Freelance)" onChange={handleChange} />
      <input type="text" name="preferredIndustry" placeholder="Preferred Industry (comma separated)" onChange={handleChange} />
      <input type="number" name="experienceYears" placeholder="Experience Years" onChange={handleChange} />
      <input type="text" name="programmingLanguages" placeholder="Programming Languages (comma separated)" onChange={handleChange} />
      <input type="text" name="frameworks" placeholder="Frameworks (comma separated)" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProfileForm;
