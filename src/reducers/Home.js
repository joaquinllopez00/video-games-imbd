import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

import { Game } from "../components/Game";
import GameDetail from "../components/GameDetail";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  console.log(location.pathname);
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hello");
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, newGames, searched } = useSelector((state) => state.games);

  return (
    <GameList>
      {pathId && <GameDetail pathId={pathId} />}
      {searched.length ? (
        <div>
          <p>{searched.length} results </p>
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
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
