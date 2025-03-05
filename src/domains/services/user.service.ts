import { fetchUsers, fetchUserRepos } from "../api/user.api";

export const getUsers = async (search: string) => {
    return await fetchUsers(search);
};

export const getRepoByUsername = async (username: string) => {
    return await fetchUserRepos(username);
};