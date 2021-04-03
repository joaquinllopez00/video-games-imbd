import "antd/dist/antd.css";
import { Carousel } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cancelCollapse, collapseNews } from "../actions/gamesAction";
export const News = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [collapsed, setCollapsed] = useState(false);
  const collapse = useSelector((state) => state.games.collapse);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    console.log(collapse);
    if (collapsed === false) {
      console.log("worked", "ifcollapse");
      dispatch(collapseNews);
    } else {
      console.log("cancelCollapse");
      dispatch(cancelCollapse);
    }
    console.log(collapsed);
    console.log(collapse, "redux");
  };

  const handleViewMore = () => {
    history.push("/about");
  };
  return (
    <NewsContainer>
      <button
        className="collapse-button"
        onClick={handleCollapse}
        style={collapsed ? { background: "#1B1E23", border: "none", color: "white" } : {}}
      >
        {collapsed ? "Expand News" : "Collapse News"}
      </button>
      {collapsed ? (
        ""
      ) : (
        <Carousel autoplay autoplaySpeed={6000} pauseOnHover draggable effect="fade">
          <Slide>
            <SlideHeader>
              <h3> Welcome to IVGDb</h3>
            </SlideHeader>
            <NewsSlideContainer>
              <button className="logo">IVGDb</button>
              <div className="news-info-container">
                <p>
                  Welcome to IVGDb, the one-stop-shop for all video games. You can view trending, new, or upcoming games
                  all in one place as well as add it to your library to keep track of updates.
                </p>
                <button className="view-more" onClick={handleViewMore}>
                  Read More →
                </button>
              </div>
            </NewsSlideContainer>
          </Slide>

          <Slide>
            <SlideHeader>
              <h3> Welcome to IVGDb</h3>
            </SlideHeader>
            <NewsSlideContainer>
              <button className="logo">IVGDb</button>
              <p>
                Welcome to IVGDb, the one-stop-shop for all video games. You can view trending, new, or upcoming games
                all in one place as well as add it to your library to keep track of updates.
              </p>
            </NewsSlideContainer>
          </Slide>
        </Carousel>
      )}
    </NewsContainer>
  );
};

const Slide = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  background: linear-gradient(to bottom, rgba(248, 248, 255, 0.8), white);
  margin: 0px 0px 4vh 0px;
  transition: all ease 0.2s;
  .collapse-container {
    width: 100%;
  }

  ul {
    display: none;
  }
`;

const SlideHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 0px 0px;
  background: linear-gradient(to top, rgba(248, 248, 255, 0.3), white);
  h2 {
    padding: 0rem;
  }
`;

const NewsSlideContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60vh;
  width: 100%;
  padding: 2rem 0rem;
  position: relative;

  @media screen and (max-width: 1028px) {
    display: flex;
    flex-direction: column;
    padding: 0rem;
  }
  .logo {
    background: linear-gradient(to bottom right, #ee1d52, darkred);
    color: white;
    padding: 4rem 7rem;
    font-size: 4rem;
    font-weight: 600;
    border-radius: 10px;
    border: darkred;
    box-shadow: 0px 0px 60px rgba(255, 0, 0, 0.4);
    transition: all ease 0.3s;

    @media screen and (max-width: 768px) {
      padding: 2rem 1rem;
    }
  }

  .logo:hover {
    padding: 4rem 7rem;
    font-size: 4rem;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5);
  }

  p {
    width: 40vw;
    @media screen and (max-width: 768px) {
      width: 50vw;
      font-size: 1rem;
    }
  }

  .view-more {
    border: none;
    border-radius: 10px;
    color: red;
    right: 20vw;
    transition: all ease-in 0.2s;
    cursor: pointer;
    margin-top: 0.3rem;
    position: absolute;
    background: none;
    @media screen and (max-width: 768px) {
      bottom: 10px;
    }
  }
  .view-more:hover {
    font-size: 1rem;
  }
`;

const NewsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  .collapse-button {
    background: linear-gradient(to bottom, rgba(248, 248, 255, 0.8), white);
    padding: 0.4rem 1rem;
    outline: none;
    border: 1px solid lightgrey;
    border-radius: 10px 10px 0px 0px;
    cursor: pointer;
    transition: font-size ease-in 0.3s;
  }

  .collapse-button:hover {
    font-size: 1.2rem;
    background: #1b1e23;
    border: 1px solid #1b1e23;
    color: white;
  }
`;
