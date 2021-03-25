import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

import { Game } from "../components/Game";
import GameDetail from "../components/GameDetail";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";
export const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hello");
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector((state) => state.games);

  const clearSearched = () => {
    console.log("clear");
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      {pathId && <GameDetail />}
      {searched.length ? (
        <div>
          <div className="clear-container">
            <p>{searched.length} results </p>
            <p className="clear" onClick={clearSearched}>
              Clear
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
              />
            ))}
          </Games>
        </div>
      ) : (
        ""
      )}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
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
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
