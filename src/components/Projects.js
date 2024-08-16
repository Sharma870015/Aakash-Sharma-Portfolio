import React from 'react';
import styled from 'styled-components';
import './Projects.css';

const ProjectsWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ProjectItem = styled.div`
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.8em;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.2em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const ProjectTechnologies = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1em;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const ResponsibilityItem = styled.li`
  margin-bottom: 5px;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 480px) {
    padding: 6px 12px;
  }
`;

const Projects = () => {
  const projectList = [
    {
      title: 'Project 1: TaskMaster Application',
      description: 'TaskMaster is a dynamic and user-friendly task management application designed to help users efficiently organize and track their daily activities. Built with React.js and styled-components, TaskMaster offers a visually appealing interface that enhances the user experience with modern design aesthetics and seamless functionality.',
      technologies: ['React.js', 'styled-components', 'JavaScript','Axios','Router', 'HTML', 'CSS'],
      responsibilities: [
        'Developed user-friendly interface with React.js',
        'Implemented state management for task handling',
        'Designed responsive layouts with styled-components',
        'Integrated modern design principles for enhanced UX',
      ],
      link: 'https://task-master-x.vercel.app/login',
    },
    {
      title: 'Project 2: UI/UX Application',
      description: 'The UI/UX Application is a practice project focused on creating a visually appealing and intuitive user interface. It includes interactive elements and responsive design features to enhance user experience. The project demonstrates the ability to apply UI/UX principles in real-world scenarios.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      responsibilities: [
        'Designed and developed interactive UI elements',
        'Implemented responsive design techniques for various devices',
        'Used Figma for designing wireframes and prototypes',
        'Applied UI/UX principles to improve overall user experience',
      ],
      link: 'https://first-project-gold-eta.vercel.app/',
    },
  ];

  return (
    <ProjectsWrapper>
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <ProjectItem key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <h4>Technologies Used:</h4>
          <ProjectTechnologies>
            {project.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ProjectTechnologies>
          <h4>Key Responsibilities:</h4>
          <ProjectTechnologies>
            {project.responsibilities.map((responsibility, idx) => (
              <ResponsibilityItem key={idx}>{responsibility}</ResponsibilityItem>
            ))}
          </ProjectTechnologies>
          <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </ProjectLink>
        </ProjectItem>
      ))}
    </ProjectsWrapper>
  );
};

export default Projects;
