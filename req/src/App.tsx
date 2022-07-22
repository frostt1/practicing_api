import "./App.css";
import { useFetch } from "./hooks/useFetch";

const App = () => {
    const { movies, loading, error } = useFetch();
    return (
        <div>
            <h2>FILMEZ EM CARTAZ</h2>
            <div>
                {error && <p className="error">{error}</p>}
                {loading && <p className="loading">CARREGANDO, AGUARDE ...</p>}
                {!loading && (
                    <div className="grid">
                        {movies.map((movie) => {
                            return (
                                <div>
                                    <img src={movie.avatar} alt={movie.titulo} />
                                    <h3>{movie.titulo}</h3>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
