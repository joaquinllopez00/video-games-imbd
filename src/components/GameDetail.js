import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup_details } from "../animations";
import { fadeIn } from "../animations";

import bubbleLoader from "../img/loader.gif";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import { addToLibraryAction, removeFromLibrary } from "../actions/gamesAction";
import { stopLoad } from "../actions/detailAction";

const GameDetail = () => {
  const dispatch = useDispatch();
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  const gamesInLibrary = useSelector((state) => state.library.games);
  const history = useHistory();
  const location = useLocation();
  const pathId = location.pathname.split("/")[1];

  useEffect(() => {
    setTimeout(() => {
      dispatch(stopLoad());
    }, 3000);
  }, [dispatch]);
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      pathId === "library" ? history.push("/library") : history.push("/");
    }
    if (element.classList.contains("to-library")) {
      document.body.style.overflow = "auto";
    }
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const addToLibrary = (screen, game1) => {
    if (!libraryChecker(game1)) {
      dispatch(addToLibraryAction(game1));
    }
  };

  const libraryChecker = (game) => {
    for (let i = 0; i <= gamesInLibrary.length - 1; i++) {
      console.log(game.name, gamesInLibrary[i].name, i);
      if (gamesInLibrary[i].name === game.name) {
        return true;
      }
    }
    return false;
  };

  const removeGame = (game) => {
    if (pathId === "/library") {
      history.push("/library");
      document.body.style.overflow = "auto";
    }

    dispatch(removeFromLibrary(game));
  };
  return (
    <>
      {isLoading ? (
        <CardShadow>
          <LoadingContainerDetail variants={fadeIn} initial="hidden" animate="show">
            <div className="content-container">
              <img src={bubbleLoader} alt="Loading..." />
            </div>
          </LoadingContainerDetail>
        </CardShadow>
      ) : (
        <CardShadow
          variants={popup_details}
          initial="hidden"
          animation="show"
          className="shadow"
          onClick={exitDetailHandler}
        >
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>
                  Rating : {game.rating} | MetaCritic: {game.metacritic === null ? "NA" : game.metacritic}
                </p>
                <div className="genres">
                  <p>Genres:&nbsp;</p>
                  {game.genres.map((g, i) => (
                    <p>{i === game.genres.length - 1 ? g.name : g.name + ","}</p>
                  ))}
                </div>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms &&
                    game.platforms.map((platform) => (
                      <img
                        alt={platform.platform.name}
                        key={platform.platform.key}
                        src={getPlatform(platform.platform.name)}
                      />
                    ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              {!libraryChecker(game) ? (
                <button
                  onClick={() => {
                    addToLibrary(screen, game);
                  }}
                >
                  Add to Library ???
                </button>
              ) : (
                <div className="button-container">
                  <Link to={`/library`}>
                    <button className="to-library">View games in Library</button>
                  </Link>
                  <button
                    onClick={() => {
                      removeGame(game);
                    }}
                  >
                    Remove from Library
                  </button>
                </div>
              )}
              <img src={smallImage(game.background_image, 1280)} alt="" />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results &&
                screen.results.map((screen) => (
                  <img key={screen.id} src={smallImage(screen.image, 1280)} alt="Screenshots" />
                ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  z-index: 1;
  &::-webkit-scrollbar {
    width: 0.5rem;
    color: #69c9d0;
  }
  &::-webkit-scrollbar-thumb {
    width: 0.5rem;
    background-color: #010101;
  }
  &::-webkit-scrollbar-track {
    width: 0.5rem;
    color: #69c9d0;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .genres {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rating {
    p {
      color: grey;
    }
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 1.2rem;
    }
    width: 100%;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }

  img {
    width: 100%;
  }

  button {
    border: none;
    color: rgb(0, 0, 0, 0.3);
    background: none;
    font-family: "Montserrat", sans-serif;
    font-size: 1.2rem;
    transition: all ease-in 0.2s;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
      padding: 0rem;
      width: 20vw;
    }
  }

  button:hover {
    font-size: 1.3rem;
    color: #ee1d52;
    @media screen and (max-width: 768px) {
      font-size: 0.7rem;
      padding: 0rem;
    }
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 1.5rem;
    display: inline;
    height: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 0rem;
  }

  img {
    margin-right: 0.5rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
  @media screen and (max-width: 768px) {
    margin: 1rem 0rem;
  }
`;

const LoadingContainerDetail = styled(motion.div)`
  background: linear-gradient(to bottom, #1b1e23, rgba(0, 0, 0, 1));
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GameDetail;
