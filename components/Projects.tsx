import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectData {
  imageSrc: string;
  title: string;
  description: string;
  techStacks: string[];
  liveLink: string;
  githubLink: string;
}

interface ProjectsProps {
  projects: ProjectData[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const cardWidth = `${100 / Math.min(projects.length, 3)}%`;

  return (
    <div className="flex flex-wrap justify-center items-center h-full ml-32">
      {projects.map((project, index) => (
        <div key={index} style={{ width: cardWidth }}>
          <ProjectCard {...project} />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Projects;
