import { Octokit } from "octokit";

const TOKEN_GITHUB = import.meta.env.VITE_TOKEN_GITHUB;

const octokit = new Octokit({
    auth: TOKEN_GITHUB
});

export default octokit;