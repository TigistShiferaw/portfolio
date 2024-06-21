import React from 'react';
import Projects from '../components/Projects';

const projectData = [
  {
    imageSrc: '/Adot.png',
    title: 'Adot, Pregnancy Tracking ',
    description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStacks: ['Typescript', 'Node.js', 'Express','MongoDb',"Generative AI"],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example/project1',
  },
  
  {
    imageSrc: '/atrons.png',
    title: 'Atrons, Resource Sharing',
    description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStacks: ['Typescript', 'Node.js', 'Express','MongoDb',"Firebase"],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example/project1',
  },
  {
    imageSrc: '/aura.png',
    title: 'CNN Based Audio Noise Cancelation ',
    description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStacks: ['OCaml', 'C++', 'C','Zélus'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example/project1',
  },
  {
    imageSrc: '/cnn.png',
    title: 'CNN Based Audio Noise Cancelation ',
    description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    techStacks: ['Tensorflow', 'Python',"Streamlit","numpy"],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example/project1',
  },
  
];

const ProjectData: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen ml-64">
      <div className="text-center">
        <h1 className="text-xl font-extrabold" style={{ color: "#42446E" }}>Projects</h1>
        <p className="text-gray-500 -mb-96">Things I’ve built so far</p>
        <Projects projects={projectData} />
      </div>
    </div>
  );
};


export default ProjectData;
