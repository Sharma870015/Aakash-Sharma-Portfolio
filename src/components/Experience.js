import React from 'react';
import styled from 'styled-components';

const ExperienceWrapper = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: auto;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Ensure no transitions or animations are causing issues */
  transition: none;
  animation: none;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const JobTitle = styled.h3`
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 10px;
`;

const JobPeriod = styled.p`
  font-size: 1.1em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

const JobDescription = styled.ul`
  font-size: 1.1em;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  padding-left: 20px;
  margin: 0; /* Remove default margin */
  list-style: none; /* Remove default list styling */

  & li {
    margin-bottom: 10px;
  }
`;

const Experience = () => {
  return (
    <ExperienceWrapper>
      <Heading>Experience</Heading>
      <JobTitle>Front-End Developer Intern at GophersLab</JobTitle>
      <JobPeriod>June 2024 - August 2024</JobPeriod>
      <JobDescription>
        <li>Developed responsive web applications using React.js and improved UI/UX design.</li>
        <li>Collaborated with the design team to implement interactive features.</li>
        <li>Participated in code reviews and contributed to optimizing performance.</li>
        <li>Enhanced application performance by optimizing React component rendering.</li>
        <li>Created reusable components to improve development efficiency and maintainability.</li>
      </JobDescription>
    </ExperienceWrapper>
  );
};

export default Experience;
