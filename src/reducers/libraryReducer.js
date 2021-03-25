const initState = {
  games: [],
};

const libraryReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_LIBRARY":
      return {
        ...state,
        games: [...state.games, action.payload.games],
      };
    case "REMOVE_FROM_LIBRARY":
      return state.games.filter((game) => game.id !== action.payload.games.id);
    default:
      return state;
  }
};

export default libraryReducer;
