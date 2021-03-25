import axios from "axios";
import getStorage from "redux-persist/es/storage/getStorage";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};

export const addToLibraryAction = (game) => ({
  type: "ADD_TO_LIBRARY",
  payload: {
    games: game,
  },
});

export const removeFromLibrary = (game) => ({
  type: "REMOVE_FROM_LIBRARY",
  payload: {
    games: game,
  },
});
