const BASE_URL = "https://api.b7web.com.br";

export const api = {
    getMovies: async () => {
        const request = await fetch(`${BASE_URL}/cinema/`);
        const json = await request.json();
        return json;
    },
};
