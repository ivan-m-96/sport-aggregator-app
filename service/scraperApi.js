import axios from "axios";

const URL_BASE = "https://heavenly-great-blouse.glitch.me/";
let teamData = {};

const refreshData = async () => {
  if (Object.keys(teamData).length <= 0) {
    await axios.get(URL_BASE + "getTeamsBBC/").then((res) => {
      // console.log("********************TEAMS BBC");

      // console.log(res);
      // console.log("AFTEEEEEEEEEEEEEEER");
      teamData = res.data;
    });
  }
};

export const getLeaguesBBC = async (callback) => {
  await refreshData();

  let leagues = teamData.filter((value) => Object.keys(value).length != 0);
  callback(leagues);
};

export const getTeamsByLeagueBBC = async (league, callback) => {
  await refreshData();
  // console.log(league);

  let teams = teamData.find((x) => {
    return x.title == league;
  });
  // console.log("pronadjeno:");
  // console.log(teams);
  callback(teams);
};
export const getLogoAzure = async (team, callback) => {
  await axios
    .get(URL_BASE + "getLogo/q=" + team)
    .then((res) => {
      console.log("get logo");
      console.log(res);
      callback(res.data.url);
    })
    .catch((err) => console.log(err));
};
export const getNewsBBC = async (url, callback) => {
  console.log(URL_BASE + "getNewsBBC/");
  await axios
    .post(URL_BASE + "getNewsBBC/", { url })
    .then((res) => {
      console.log("getNewsBBC");
      // console.log(res);
      let data = res.data.filter((value) => Object.keys(value).length != 0);
      callback(data);
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
    });
};

export const getSquad = async (team, callback) => {
  await axios
    .get(URL_BASE + "getSquad/" + team)
    .then((res) => {
      console.log("getSquad");
      console.log(res);
      callback(res.data);
    })
    .catch((err) => console.log(err));
};

export default getLeaguesBBC;
