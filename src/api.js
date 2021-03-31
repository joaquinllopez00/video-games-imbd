const base_url = "https://api.rawg.io/api/";
const api_key = "3bd73206ea254c0394ccc9044d2dbdea";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
console.log(currentDate);

const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-released&page_size=10`;
export const popularGamesURL = (page_size) => {
  return `${base_url}${popular_games}&page_size=${page_size}`;
};

export const upcomingGamesURL = (page_size) => {
  return `${base_url}${upcoming_games}&page_size=${page_size}`;
};

export const newGamesURL = (page_size) => {
  return `${base_url}${new_games}&page_size=${page_size}`;
};

export const gameDetailsURL = (id) => {
  return `${base_url}games/${id}?key=${api_key}`;
};

export const gameScreenshotURL = (id) => {
  return `${base_url}games/${id}/screenshots?key=${api_key}`;
};

export const searchGameURL = (game_name) => {
  return `${base_url}games?key=${api_key}&search=${game_name}&page_size=20`;
};
