import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from "../api";

export const loadGames = (popular_page_size, newGames_page_size, upcoming_page_size) => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL(popular_page_size));
  const newGamesData = await axios.get(newGamesURL(newGames_page_size));
  const upcomingData = await axios.get(upcomingGamesURL(upcoming_page_size));

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

export const cancelCollapse = () => ({
  type: "CANCEL_COLLAPSE",
});

export const collapseNews = () => ({
  type: "COLLAPSE",
});
