import React, { useState, useRef } from 'react';
import { PlusCircle, Users, Briefcase, LightbulbOff, ClipboardList, UserPlus, GraduationCap, Zap, MessageSquare, Upload, Star } from 'lucide-react';
import { Button } from './button';

const ExperienceType = ({ icon: Icon, title, description }) => (
  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
    <Icon className="w-10 h-10 text-blue-500" />
    <div>
      <h3 className="font-semibold text-xl text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const DataExtraction = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const experienceTypes = [
    { icon: PlusCircle, title: "Technical Achievement", description: "Bug fixes, optimizations, new features, or technical solutions" },
    { icon: Users, title: "Collaboration", description: "Team projects, cross-functional work, communication wins" },
    { icon: Briefcase, title: "Personal Projects", description: "Side projects, hackathons, or independent work" },
    { icon: LightbulbOff, title: "Problem Solving", description: "Complex challenges, creative solutions, critical thinking" },
    { icon: ClipboardList, title: "Project Management", description: "Planning, execution, delivery, and timeline management" },
    { icon: UserPlus, title: "Leadership", description: "Team leading, mentoring, decision making" },
    { icon: GraduationCap, title: "Growth & Learning", description: "New skills, overcoming challenges, adaptability" },
    { icon: Zap, title: "Innovation", description: "New ideas, process improvements, creative solutions" },
    { icon: MessageSquare, title: "Conflict Resolution", description: "Handling disagreements, difficult situations, negotiations" },
    { icon: Star, title: "General Reflections", description: "Any other reflections upon your successes that do not fit into another category" }
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Here you would typically send the file to your server
      console.log('Uploading file:', selectedFile.name);
      // Reset the selected file after upload
      setSelectedFile(null);
    } else {
      console.log('No file selected');
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">Record Your Professional Experiences</h1>
        
        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload Your Resume</h2>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="hidden"
              id="resume-upload"
              accept=".pdf,.doc,.docx"
            />
            <Button variant="outline" className="flex items-center space-x-2" onClick={handleButtonClick}>
              <Upload className="w-5 h-5" />
              <span>Choose File</span>
            </Button>
            <Button onClick={handleUpload} disabled={!selectedFile}>
              Upload Resume
            </Button>
          </div>
          {selectedFile && (
            <p className="mt-2 text-sm text-gray-600">Selected file: {selectedFile.name}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceTypes.map((type, index) => (
            <ExperienceType key={index} {...type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataExtraction;