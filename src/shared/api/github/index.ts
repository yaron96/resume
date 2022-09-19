import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN,
});

const getMe = async () => {
  return await octokit.request("GET /user", {});
};

const getUser = async (username: string) => {
  return await octokit.request(`GET /users/${username}`, {
    username
  });
};

export const githubApi = {
  getMe,
  getUser,
};
