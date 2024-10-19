const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  // Job Preferences
  desiredJobTitle: { type: String },
  jobType: { type: String, enum: ['Full-Time', 'Part-Time', 'Freelance'] },
  preferredIndustry: [String],
  preferredCompanySize: { type: String },
  
  // Experience
  experienceYears: { type: Number },
  previousJobs: [
    {
      title: String,
      company: String,
      duration: String,
      leadershipExperience: { type: Boolean, default: false },
      leadershipDescription: String
    }
  ],
  
  // Technical Skills
  programmingLanguages: [
    {
      language: String,
      proficiency: { type: String, enum: ['Beginner', 'Intermediate', 'Expert'] }
    }
  ],
  frameworks: [
    {
      framework: String,
      proficiency: { type: String, enum: ['Beginner', 'Intermediate', 'Expert'] }
    }
  ],
  gitExperience: { type: Boolean, default: false },
  databaseExperience: [String],
  
  // Projects
  projects: [
    {
      name: String,
      description: String,
      techStack: [String],
      duration: String,
      teamProject: { type: Boolean, default: false }
    }
  ],
  
  // Leadership and Collaboration
  leadershipExperience: { type: Boolean, default: false },
  leadershipStyle: { type: String },
  workPreference: { type: String, enum: ['Independent', 'Team'] },
  delegationComfortLevel: { type: String, enum: ['Comfortable', 'Neutral', 'Uncomfortable'] },
  
  // Coding Competency
  algorithmicProblemSolving: { type: Boolean, default: false },
  problemSolvingRating: { type: Number, min: 1, max: 10 },
  codeReviewExperience: { type: Boolean, default: false },
  
  // Learning and Growth
  currentLearning: [String],
  learningInterest: { type: Boolean, default: false },
  careerGoals: { type: String },
  
  // Behavioral Insights
  feedbackHandling: { type: String },
  taskPrioritization: { type: String },
  workEthic: { type: String }
});

module.exports = mongoose.model('UserProfile', userProfileSchema);
