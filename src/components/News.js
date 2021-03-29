import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";
import React from "react";
import Slider from "infinite-react-carousel";

export const News = () => {
  return (
    <Slider dots className="news-slider" autoplay={false} autoplaySpeed="6000">
      <Slide>
        <SlideHeader>
          <h2>Welcome to IVGDb</h2>
        </SlideHeader>
        <NewsSlideContainer>
          <div className="logo">IVGDb</div>
          <p>
            IVGDb - not to be confused with IMDb. This is a project aimed at being a website that allows players to
            easily find new games, or keep track of ones they already have or are intersted in.{" "}
          </p>
        </NewsSlideContainer>
      </Slide>
      <Slide>
        <SlideHeader>
          <h2>Welcome to IMVDb</h2>
        </SlideHeader>
        <NewsSlideContainer>
          <div className="logo">IVGDb</div>
          <p>
            IMVDb - not to be confused with IMDb. This is a project aimed at being a website that allows players to
            easily find new games, or keep track of ones they already have or are intersted in.{" "}
          </p>
        </NewsSlideContainer>
      </Slide>
    </Slider>
  );
};

const Slide = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(to bottom, rgba(248, 248, 255, 0.8), white);
`;

const SlideHeader = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  background: linear-gradient(to top, rgba(248, 248, 255, 0.3), white);
  h2 {
    padding: 2rem 0rem;
  }
`;

const NewsSlideContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  width: 100%;

  .logo {
    background: linear-gradient(to bottom right, #ee1d52, darkred);
    color: white;
    padding: 4rem 7rem;
    font-size: 4rem;
    font-weight: 600;
    border-radius: 10px;
    box-shadow: 0px 0px 60px rgba(255, 0, 0, 0.4);
    transition: all ease 0.3s;
  }

  .logo:hover {
    box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.5);
  }

  p {
    width: 40vw;
  }
`;
