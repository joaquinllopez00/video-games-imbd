import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { popup } from "../animations";
import { useLocation } from "react-router-dom";
export const Game = ({ name, released, image, id }) => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      {path[1] === "" ? (
        <StyledGame variants={popup} initial="hidden" animate="show" onClick={loadDetailHandler}>
          <Link to={`/game/${id}`}>
            <h3>{name}</h3>
            <div className="title-container">
              <p>Release Date: {released}</p>
            </div>
            <img src={image} alt={name} />
          </Link>
        </StyledGame>
      ) : (
        <StyledGame variants={popup} initial="hidden" animate="show" onClick={loadDetailHandler}>
          <Link to={`/library/game/${id}`}>
            <h3>{name}</h3>
            <div className="title-container">
              <p>Release Date: {released}</p>
            </div>
            <img src={image} alt={name} />
          </Link>
        </StyledGame>
      )}
    </>
  );
};

const StyledGame = styled(motion.div)`
  height: 60vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1.5rem;
  }
`;
