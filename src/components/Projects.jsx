import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const allProjects = [
    {
      title: "KISAN HELP",
      description: "A platform that helps farmers with necessary services.",
      github: "#",
      //demo: "#",
    },
    {
      title: "WEBSITE DRAG AND DROP BUILDER",
      description: "Drag and drop website builder , simple design and easy to implement platform.",
      github: "#",
      //demo: "#",
    },
    {
      title: "COMPUTER ORGANIZATION AND ARCHITECTURE",
      description: "Important codes related to Computer Organization and Architecture.",
      github: "#",
      //demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FiGithub className="text-lg" /> Code
                  </a>
                  {/*
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FiExternalLink className="text-lg" /> Live Demo
                  </a>
                   */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;