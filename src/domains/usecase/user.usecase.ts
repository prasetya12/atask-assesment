import { useQuery } from "@tanstack/react-query";
import { getUsers, getRepoByUsername } from "../services/user.service";

export const useUsers = (search: string) => {
    return useQuery({
        queryKey: ["users", search],
        enabled: false,
        queryFn: () => getUsers(search),
    });
};

export const useGetRepoByUsername = (username: string) => {
    return useQuery({
        queryKey: ["reposbyusername", username],
        enabled: false,
        queryFn: () => getRepoByUsername(username),
    });
};