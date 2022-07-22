const BASE_URL = "https://api.b7web.com.br/cinema/";

export const api = {
    getMovies: async () => {
        const request = await fetch(`${BASE_URL}`);
        const json = await request.json();
        return json;
    },
};
