import React from 'react';
import Projects from '../components/Projects';

const projectData = [
  {
    imageSrc: '/Adot.png',
    title: 'Adot, Pregnancy Tracking ',
    description: 'Adot provides a groundbreaking All-in-One Hub for Learning, Tracking, and Connecting, tailored for pregnant moms and parents-to-be—revolutionizing every stage of the journey! It seamlessly blends medical and tech expertise to offer precise, personalized guidance, ensuring a consistently enhanced parenting experience.',
    techStacks: ['Typescript', 'Node.js', 'Express','MongoDb',"Generative AI"],
    liveLink: 'https://play.google.com/store/apps/details?id=org.a2sv.adot_mobile',
    githubLink: 'https://github.com/A2SV/Adot',
  },
  
  {
    imageSrc: '/atrons.png',
    title: 'Atrons, Resource Sharing',
    description: 'ATRONS is a learning platform where students can create free accounts to access and share educational resources. It provides services like downloadable course materials, simulated exams, practice assessments, and search functionality with filtering options to help students find relevant content across subjects. The goal is to offer a centralized hub for students to discover and utilize a variety of learning resources to support their studies.',
    techStacks: ['Typescript', 'Node.js', 'Express','MongoDb',"Firebase"],
    liveLink: 'https://atrons.app/',
    githubLink: 'https://github.com/example/project1',
  },
  
  {
    imageSrc: '/cnn.png',
    title: 'CNN Based Audio Noise Cancelation ',
    description: 'This thesis project develops a method to reduce noise in audio signals using spectral subtraction. It aims to improve on past approaches by incorporating machine learning and audio identification techniques to more accurately model and remove the noise components, rather than relying solely on estimating the noise. The project includes a general framework and Streamlit application that allows users to input noisy audio and have the noise reduced using this combined spectral subtraction and machine learning-based approach.',
    techStacks: ['Tensorflow', 'Python',"Streamlit","numpy"],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/TigistShiferaw/CNN-based-audio-noise-cancellation',
  },
  {
    imageSrc: '/aura.jpg',
    title: 'Verified Implementation of Quadcopter Controller',
    description: 'This project is about using a new programming language with formal verification capabilities to program a quadcopter. The language is designed to be used for drones and cars, and is developed in our lab. The student will use this new language to program basic control capabilities of a quadcopter drone, then include some collision avoidance capabilities. The quadcopter will be at Michigan but there will be opportunities to run tests remotely.',
    techStacks: ['OCaml', 'C++', 'C','Zélus'],
    liveLink: 'https://drive.google.com/file/d/1L3NZ3xkwpKHuxVvD6AJ3xK0TArojZRsK/view?usp=drive_link',
    githubLink: 'https://github.com/TigistShiferaw/zelus',
  }
  
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
