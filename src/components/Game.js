import React, { useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { popup } from "../animations";
import { useLocation, useHistory } from "react-router-dom";
export const Game = ({ name, released, image, id, metacritic, genres }) => {
  const location = useLocation();
  const history = useHistory();
  const path = location.pathname.split("/");
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
    document.body.style.overflow = "hidden";
  };

  const metacriticCalc = (score) => {
    if (score === null) {
      return "NA";
    }
  };

  useEffect(() => {
    console.log(path);
    if (path[1] === "game") {
      history.push("/");
    } else if (path[1] === "library") {
      history.push("/library");
    }
  }, []);

  return (
    <>
      {path[1] === "" ? (
        <StyledGame variants={popup} initial="hidden" animate="show" onClick={loadDetailHandler}>
          <Link to={`/game/${id}`}>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <div className="title-container">
              <div className="info-container">
                <p>Release Date: {released}</p>
                <p>MetaCritic: {metacriticCalc(metacritic)}</p>
                <p>Genres: {genres.map((g, i) => (i === genres.length - 1 ? g.name : g.name + ",  "))}</p>
              </div>
              <p>(Click to view more)</p>
            </div>
          </Link>
        </StyledGame>
      ) : (
        <StyledGame variants={popup} initial="hidden" animate="show" onClick={loadDetailHandler}>
          <Link to={`/library/game/${id}`}>
            <h3>{name}</h3>
            <div className="title-container">
              <p>Release Date: {released}</p>
              <p>MetaCritic: {metacriticCalc(metacritic)}</p>
              <p>Genres: {genres.map((g, i) => (i === genres.length - 1 ? g.name : g.name + ",  "))}</p>
            </div>
            <img src={image} alt={name} />
          </Link>
        </StyledGame>
      )}
    </>
  );
};

const StyledGame = styled(motion.div)`
  height: 50vh;
  position: relative;
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  background: white;
  transition: all ease-in 0.1s;

  @media screen and (max-width: 768px) {
    padding: 0rem;
    width: 100%;
  }
  :hover {
    box-shadow: 8px 5px 15px rgba(255, 255, 255, 0.15);
  }
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem 1.5rem;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: all 0.3s ease;
    flex-direction: column;

    p {
      color: white;
    }
  }

  .title-container:hover {
    opacity: 1;
  }
`;
