import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.8em;
  }
`;

const FooterText = styled.p`
  margin: 0;
  padding: 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>&copy; 2024 Aakash Sharma. All rights reserved.</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
