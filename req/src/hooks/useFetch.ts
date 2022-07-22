import { useState, useEffect } from "react";
import { api } from "../api";
import { MovieList } from "../types/typeMovies";

export const useFetch = () => {
    const [movies, setMovies] = useState<MovieList[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                let res = await api.getMovies();
                setMovies(res);
            } catch (error) {
                setError("ERRO! TENTE MAIS TARDE");
            }
            setLoading(false);
        }
        fetchData();
    }, []);
    return { movies, loading, error };
};
