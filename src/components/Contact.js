import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px;
  background: linear-gradient(135deg, rgba(70, 130, 180, 0.8), rgba(255, 105, 180, 0.8));
  background-size: 200% 200%;
  animation: ${gradientAnimation} 12s ease infinite;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const ContactHeading = styled.h2`
  font-size: 3em;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const ContactDetails = styled.div`
  font-size: 1.2em;
  line-height: 1.6;
  max-width: 600px;
  width: 100%;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 1.1em;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1em;
    padding: 10px;
  }
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  margin: 10px 0;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: translateX(10px);
    color: ${({ theme }) => theme.colors.secondary};
  }

  & svg {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.secondary};
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  & a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactHeading>Contact Me</ContactHeading>
      <ContactDetails>
        <ContactItem>
          <FaPhone />
          <strong>Phone: </strong> +91 8700156237
        </ContactItem>
        <ContactItem>
          <FaEnvelope />
          <strong>Email: </strong> <a href="mailto:aakashashu9354@gmail.com">aakashashu9354@gmail.com</a>
        </ContactItem>
        <ContactItem>
          <FaLinkedin />
          <strong>LinkedIn: </strong> <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">Aakash Sharma</a>
        </ContactItem>
      </ContactDetails>
    </ContactWrapper>
  );
};

export default Contact;
