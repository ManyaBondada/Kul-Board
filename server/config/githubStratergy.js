// import passport from "passport";
// import { pool } from "./database.js";
import GitHubStrategy from "passport-github2";

const options = {
  clientID: "1bdb25d4ccc528bca235",
  clientSecret: "caa07fff7433aa3044ebcad7b38b5fc5ecaf1f85",
  callbackURL: "http://localhost:3000/auth/github/callback",
};

const verify = async (accessToken, refreshToken, profile, callback) => {
  const {
    _json: { id, name, login, avatar_url },
  } = profile;

  const userData = {
    githubId: id,
    username: login,
    avatarUrl: avatar_url,
    accessToken,
  };

  return callback(null, userData);
};

export const GitHub = new GitHubStrategy(options, verify);
