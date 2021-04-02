const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  collapse: false,
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };

    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };

    case "CLEAR_SEARCHED":
      console.log("clear reducer");
      return {
        ...state,
        searched: [],
      };
    case "CANCEL_COLLAPSE":
      console.log("worked");
      return {
        ...state,
        collapse: false,
      };
    case "COLLAPSE":
      console.log("worked", "collapse");
      return {
        ...state,
        collapse: true,
      };
    default:
      return state;
  }
};

export default gamesReducer;
