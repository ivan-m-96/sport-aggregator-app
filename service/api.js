import axios from "axios";

const URL_BASE = "http://www.api-football.com/demo/api/v2/";
const KEY = "";
const header = { "X-RapidAPI-Key": KEY };

axios.interceptors.request.use((config) => {
  config.headers = { ...config.headers, header };

  return config;
});

/** Set's an array of countries as a state via the provided setter
 * @param {*} callback - state setter for countries
 *
 */
export const getCountries = async (callback) => {
  await axios.get(URL_BASE + "/countries", { ...header }).then((res) => {
    // console.log(res.data);
    callback(res.data.api.countries);
  });
};
/** Set's an array of leagues as a state via the provided setter
 * @param {*} code - country code provided by the api
 * @param {*} callback - state setter for leagues
 *
 */
export const getLeaguesByCountry = async (code, callback) => {
  await axios.get(URL_BASE + "/leagues/country/" + code).then((res) => {
    callback(res.data.api.leagues);
  });
};

/** Set's an array of teams as a state via the provided setter
 * @param {*} leagueId - league id code provided by the api
 * @param {*} callback - state setter for teams
 *
 */
export const getTeams = async (leagueId, callback) => {
  await axios.get(URL_BASE + "teams/league/" + leagueId).then((res) => {
    callback(res.data.api.teams);
  });
};

/** Set's an array of players as a state via the provided setter
 * @param {*} teamId - team id code provided by the api
 * @param {*} season - season identifier provided by the api
 * @param {*} callback - state setter for players
 *
 */
export const getPlayers = async (teamId, season, callback) => {
  await axios
    .get(URL_BASE + "/players/squad/" + teamId + "/" + season)
    .then((res) => {
      callback(res.data.api.players);
    });
};

/**
 * Sets an array of fixtures as a state via the provided setter
 * @param {*} teamId - ID of the team included in the fixtures
 * @param {*} callback - state setter for fixtures
 */
export const getFixturesByTeam = async (teamId, callback) => {
  await axios.get(URL_BASE + "fixtures/team/" + teamId).then((res) => {
    callback(res.data.api.fixtures);
  });
};
/**
 * Sets a statistics object for a given team and league
 * @param {*} teamId - Team for which the statistics will be fetched
 * @param {*} leagueId - League for which the statistics of the team will be fetched
 * @param {*} callback - state setter for statistics object
 */
export const getTeamStatistics = async (teamId, leagueId, callback) => {
  await axios
    .get(URL_BASE + "statistics/" + leagueId + "/" + teamId)
    .then((res) => {
      console.log("from getteamstatiscits:");
      console.log(res.data.api.statistics);
      callback(res.data.api.statistics);
    });
};
/**
 * Sets a leagues array for a given team and league
 * @param {*} team - Team for which the leagues will be fetched
 * @param {*} callback - state setter for leagues array
 * @returns {Array}
 */
export const getLeaguesByTeam = async (teamId, callback) => {
  await axios.get(URL_BASE + "leagues/team/" + teamId).then((res) => {
    console.log("from getLeaguesById");
    console.log(res.data.api.leagues);
    callback(res.data.api.leagues);
  });
};

export default getCountries;
