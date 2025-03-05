import octokit from './httpClient';
export const fetchUsers = async (username: string) => {
    const response = await octokit.request('GET /search/users', {
        q: username,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    return response.data

};

export const fetchUserRepos = async (username: string) => {
    try {
        const response = await octokit.request('GET /users/{username}/repos', {
            username,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching repositories:", error);
        return [];
    }
};