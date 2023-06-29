import { useState, useEffect } from "react";
import Main from "./components/main";
import NavBar from "./components/Nav-bar";
import { tempMovieData } from "./data";
import { Logo, NumResults, Search } from "./components/Nav-bar";
import Box, { MovieList } from "./components/list-box";
import { WatchedMovieList, WatchedSummary } from "./components/watched-movies";
import { tempWatchedData } from "./data";

const KEY = "b8650e57";
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const query = "interstellar";

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(() => true);

        const res = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`
        );

        if (!res.ok) throw new Error("Smth went wrong with fetching movies");

        const data = await res.json();
        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        setError(() => err.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main movies={movies}>
        <Box>
          {/* {isLoading ? (
            <Loader></Loader>
          ) : (
            <MovieList movies={movies}></MovieList>
          )} */}
          {isLoading && <Loader></Loader>}
          {!isLoading && !error && <MovieList movies={movies}></MovieList>}
          {error && <ErrorMessage message={error}></ErrorMessage>}
        </Box>
        <Box>
          <WatchedSummary watched={watched}></WatchedSummary>
          <WatchedMovieList watched={watched}></WatchedMovieList>
        </Box>
      </Main>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return <p className="error">{message}</p>;
}
