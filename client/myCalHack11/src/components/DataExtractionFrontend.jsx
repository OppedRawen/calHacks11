import React from 'react';
import { PlusCircle, Users, Briefcase, LightbulbOff, ClipboardList, UserPlus, GraduationCap, Zap, Lightbulb, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExperienceType = ({ icon: Icon, title, description }) => (
  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <Icon className="w-8 h-8 text-blue-500" />
    <div>
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const DataExtraction = () => {
  const experienceTypes = [
    { icon: PlusCircle, title: "Technical Achievement", description: "Bug fixes, optimizations, new features, or technical solutions" },
    { icon: Users, title: "Collaboration", description: "Team projects, cross-functional work, communication wins" },
    { icon: Briefcase, title: "Personal Projects", description: "Side projects, hackathons, or independent work" },
    { icon: LightbulbOff, title: "Problem Solving", description: "Complex challenges, creative solutions, critical thinking" },
    { icon: ClipboardList, title: "Project Management", description: "Planning, execution, delivery, and timeline management" },
    { icon: UserPlus, title: "Leadership", description: "Team leading, mentoring, decision making" },
    { icon: GraduationCap, title: "Growth & Learning", description: "New skills, overcoming challenges, adaptability" },
    { icon: Zap, title: "Innovation", description: "New ideas, process improvements, creative solutions" },
    { icon: MessageSquare, title: "Conflict Resolution", description: "Handling disagreements, difficult situations, negotiations" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Record Your Professional Experiences</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experienceTypes.map((type, index) => (
            <ExperienceType key={index} {...type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataExtraction;