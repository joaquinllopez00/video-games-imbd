import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
export const About = () => {
  return (
    <AboutContainer variants={fadeIn} initial="hidden" animate="show">
      <ContentContainer>
        <h2>About</h2>
      </ContentContainer>
      <ContentContainer>
        <p>
          IVGDb is an "Internet Video Game Database" powered by the use of Rawg.io's free API. This project is created
          with the soul purpose of displaying the skills of the developer. Please feel free to email me with any
          questions or concerns. My email can be found below.
        </p>
        <a href="mailto:joaquinllopezzz@gmail.com" target="_blank" rel="noopener noreferrer">
          joaquinllopezzz@gmail.com
        </a>
      </ContentContainer>
    </AboutContainer>
  );
};

const AboutContainer = styled(motion.div)`
  padding: 1rem 4rem;
  background: #1b1e23;
  height: 100vh;
  @media screen and (max-width: 768px) {
    height: 110vh;
  }
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 1rem 4rem;
  text-align: center;
  p {
    color: white;
    padding: 0rem 0rem;
  }

  @media screen and (max-width: 1068px) {
    padding: 0rem;
  }
`;
