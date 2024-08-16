import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(70, 130, 180, 0.8), rgba(255, 105, 180, 0.8));
  background-size: 200% 200%;
  animation: gradientAnimation 12s ease infinite;
  color: ${({ theme }) => theme.colors.light};
  padding: 0 20px;

  @keyframes gradientAnimation {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
    mix-blend-mode: multiply;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.light};
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  animation: fadeIn 2s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 20px 0;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
  animation: fadeIn 2s ease-in-out;
  animation-delay: 1s;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const CTAButton = styled(Link)`  {/* Changed from 'a' to 'Link' */}
  display: inline-block;
  padding: 12px 24px;
  margin-top: 20px;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.875rem;
  }
`;

const AboutMeSection = styled.section`
  margin: 40px 0;
  max-width: 800px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: fadeInUp 1.5s ease-in-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin: 20px 0;
  }
`;

const AboutHeading = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const AboutText = styled.p`
  font-size: 1rem;
  color: #506376;  // Updated text color
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <ContentWrapper>
        <Heading>Welcome to My Portfolio</Heading>
        <SubHeading>Front-End Developer & Designer</SubHeading>
        <CTAButton to="/projects">See My Work</CTAButton>  {/* Updated to use 'to' */}
        <AboutMeSection>
          <AboutHeading>About Me</AboutHeading>
          <AboutText>
            Hi, I'm Aakash Sharma, a passionate Front-End Developer with a keen eye for design and a strong background in HTML, CSS, JavaScript, and React.js. 
            I recently completed a rewarding internship at The Gophers Lab, where I honed my skills in creating responsive and visually appealing web applications.
            My goal is to leverage my skills and creativity to build engaging user interfaces and contribute to innovative projects. 
            When I'm not coding, you'll find me exploring new design trends and working on personal projects to push my limits.
          </AboutText>
        </AboutMeSection>
      </ContentWrapper>
    </HomeWrapper>
  );
};

export default Home;
