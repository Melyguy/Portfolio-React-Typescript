
export type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    language: string;
};

export async function fetchGitHubRepos(): Promise<Repo[]> {
    const response = await fetch("https://api.github.com/users/Melyguy/repos?sort=updated&per_page=5", {
        headers: {
            Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
    }


    return response.json();
}