import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

import { Game } from "../components/Game";
import GameDetail from "../components/GameDetail";
import { News } from "../components/News";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";

import bubbleLoader from "../img/loader.gif";
export const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [popularSize, setPopular] = useState(10);
  const [newGamesSize, setNewGames] = useState(10);
  const [upcomingSize, setUpcoming] = useState(10);
  useEffect(() => {
    dispatch(loadGames(popularSize, newGamesSize, upcomingSize));
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, [dispatch, popularSize, newGamesSize, upcomingSize]);

  const { popular, newGames, upcoming, searched } = useSelector((state) => state.games);

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  const handleLoadMore = (e) => {
    e.target.classList.contains("upcoming") && setUpcoming(upcomingSize + 5);
    e.target.classList.contains("popular") && setPopular(popularSize + 5);
    e.target.classList.contains("new-games") && setNewGames(newGamesSize + 5);
  };
  return (
    <>
      {loading ? (
        <LoadingContainer variants={fadeIn} initial="hidden" animate="show">
          <div className="content-container">
            <img src={bubbleLoader} alt="Loading..." />
          </div>
        </LoadingContainer>
      ) : (
        <>
          <GameList variants={fadeIn} initial="hidden" animate="show">
            {pathId && <GameDetail />}
            <News className="news"></News>
            {searched.length ? (
              <>
                <InfoContainer>
                  <h2>Search Results</h2>
                </InfoContainer>
                <div className="search-info-container">
                  <div className="clear-container">
                    <p>{searched.length} results</p>
                    <p className="clear" onClick={clearSearched}>
                      Clear Results
                    </p>
                  </div>
                  <Games>
                    {searched.map((game) => (
                      <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                        metacritic={game.metacritic}
                        genres={game.genres}
                      />
                    ))}
                  </Games>
                </div>
              </>
            ) : (
              ""
            )}
            <InfoContainer>
              <h2>Upcoming Games</h2>
              <p>
                Here you will find the most anticipated upcoming games aross all genres. See one you like? Add it to
                your library too keep tabs on it!
              </p>
            </InfoContainer>
            <Games>
              {upcoming.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                  genres={game.genres}
                  metacritic={game.metacritic}
                />
              ))}
            </Games>
            <button className="upcoming more" onClick={(e) => handleLoadMore(e)}>
              Load More
            </button>
            <InfoContainer>
              <h2>Popular Games</h2>
              <p>The 20 most popular games across all platforms.</p>
            </InfoContainer>
            <Games>
              {popular.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                  genres={game.genres}
                  metacritic={game.metacritic}
                />
              ))}
            </Games>
            <button className="popular more" onClick={(e) => handleLoadMore(e)}>
              Load More
            </button>
            <InfoContainer>
              <h2>Newly Released Games</h2>
              <p>Newly released games</p>
            </InfoContainer>
            <Games>
              {newGames.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                  genres={game.genres}
                  metacritic={game.metacritic}
                />
              ))}
            </Games>
            <button className="new-games more" onClick={(e) => handleLoadMore(e)}>
              Load More
            </button>
          </GameList>
        </>
      )}
    </>
  );
};

const GameList = styled(motion.div)`
  padding: 1rem 4rem;
  background: #1b1e23;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 0rem;
  }
  h2 {
    padding: 5rem 0rem;
  }

  .clear {
    cursor: pointer;
  }

  .clear:hover {
    color: #ee1d52;
  }

  .clear-container {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem;
    p {
      color: white;
      transition: all ease 0.2s;
    }
    p:hover {
      font-size: 1.5rem;
    }
  }
  .more {
    border-radius: 1rem;
    border: none;
    font-size: 1rem;
    height: 2rem;
    width: 20%;
    cursor: pointer;
    transition: all ease-in 0.1s;
    @media screen and (max-width: 768px) {
      font-size: 0.7rem;
      border-radius: 10%;
      padding: 0rem 0rem;
    }
  }
  .more:hover {
    color: white;
    background: black;
    @media screen and (max-width: 768px) {
      font-size: 0.7rem;
      border-radius: 10%;
      padding: 0rem 0rem;
    }
  }
`;

const InfoContainer = styled(motion.div)`
  padding: 2rem 4rem;
  text-align: center;
  margin-top: 3rem;
  border-radius: 1rem 1rem 0px 0px;
  background: linear-gradient(to top, rgba(27, 30, 35, 1), rgba(0, 0, 0, 0.2));
  h2 {
    padding: 3rem;
  }
  p {
    color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 0rem;
    text-align: center;
    h2 {
      padding: 0rem;
      width: 100%;
    }
    p {
      padding: 0rem;
    }
  }
`;

const Games = styled(motion.div)`
  padding: 1.2rem;
  margin-bottom: 1rem;
  border-radius: 0 0 1rem 1rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 0rem;
    grid-row-gap: 1rem;
  }
`;

export const LoadingContainer = styled(motion.div)`
  background: linear-gradient(to bottom, #1b1e23, rgba(0, 0, 0, 1));
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;
