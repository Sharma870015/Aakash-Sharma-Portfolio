import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: auto;
`;

const About = () => {
  return (
    <AboutWrapper>
      <h2>About Me</h2>
      <p>
        I am a passionate front-end developer with a keen interest in crafting intuitive user experiences. With expertise in HTML, CSS, JavaScript, and React.js, I strive to build clean and efficient web applications.
      </p>
      <p>
        I recently completed a 3-month internship at GophersLab, where I honed my skills in React development, working on real-world projects that focused on enhancing user interactivity and responsiveness.
      </p>
      <p>
        During my internship at GophersLab, I focused on learning and practicing frontend development skills. My key responsibilities included:
      </p>
      <ul>
        <li>
          Developing basic projects like a to-do application and Google-like applications to enhance my understanding of React and its ecosystem.
        </li>
        <li>
          Creating visually attractive and attention-seeking designs to improve my design skills.
        </li>
        <li>
          Implementing best practices in coding and project structure to ensure clean and maintainable code.
        </li>
        <li>
          Collaborating with the team to discuss project requirements and deliver efficient solutions.
        </li>
      </ul>
      <p>
        Although I did not work on client-based projects, my time at GophersLab was instrumental in expanding my knowledge and preparing me for real-world web development challenges.
      </p>
      <h3>Education</h3>
      <p>
        I completed my 10th and 12th standards from CBSE Delhi. I am currently pursuing a Bachelor of Arts (B.A.) program from the School of Open Learning, University of Delhi (SOL DU).
      </p>
      <h3>Skills</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React.js</li>
        <li>Styled-components</li>
        <li>Responsive Web Design</li>
        <li>UI/UX Design</li>
      </ul>
      <h3>Hobbies</h3>
      <p>
        I enjoy incorporating my passion for learning and creativity into my work as a front-end developer. I am always exploring new technologies and design trends to enhance my skills and bring innovative solutions to my projects.
      </p>
    </AboutWrapper>
  );
};

export default About;
