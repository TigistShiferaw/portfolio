import React from 'react';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  techStacks: string[];
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, techStacks, liveLink, githubLink }) => {
  return (
    <div className="border border-gray-200 rounded-lg mx-1 mt-24 ml-3 " style={{ width: '300px', height: '400px' }}>
      <img src={imageSrc} alt={title} className="w-full h-40 mb-4 object-cover" />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-600 mb-2">Tech Stack: {techStacks.join(', ')}</p>
      <div className="flex space-x-4">
        <a href={liveLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Live Preview</a>
        <a href={githubLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default ProjectCard;
