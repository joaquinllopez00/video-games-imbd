import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Game } from "../components/Game";
import GameDetail from "../components/GameDetail";
import { fadeIn } from "../animations";
export const Library = () => {
  const { games } = useSelector((state) => state.library);

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      {pathId && <GameDetail />}
      {games.length ? (
        <div>
          <div className="clear-container">
            <p>{games.length} games in your library </p>
          </div>
          <Games>
            {games.map((game) => (
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
        <h3>Looks like you haven't added any games to your library yet...</h3>
      )}
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  background: #1b1e23;
  min-height: 100vh;
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
  p {
    color: white;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
