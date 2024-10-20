import React from 'react';
import { PlusCircle, Users, Briefcase, LightbulbOff, ClipboardList, UserPlus, GraduationCap, Zap, MessageSquare } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">Record Your Professional Experiences</h1>
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
