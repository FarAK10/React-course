import { useState } from "react";
import Main from "./components/main";
import NavBar from "./components/Nav-bar";
import { tempMovieData } from "./data";
import { Logo, NumResults, Search } from "./components/Nav-bar";
import Box, { MovieList } from "./components/list-box";
import { WatchedMovieList, WatchedSummary } from "./components/watched-movies";
import { tempWatchedData } from "./data";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main movies={movies}>
        <Box>
          <MovieList movies={movies}></MovieList>
        </Box>
        <Box>
          <WatchedSummary watched={watched}></WatchedSummary>
          <WatchedMovieList watched={watched}></WatchedMovieList>
        </Box>
      </Main>
    </>
  );
}
