import { useState } from "react";
import Main from "./components/main";
import NavBar from "./components/Nav-bar";
import { tempMovieData } from "./data";
import { Logo, NumResults, Search } from "./components/Nav-bar";
import ListBox, { MovieList } from "./components/list-box";
import WatchedBox from "./components/watched-movies";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main movies={movies}>
        <ListBox>
          <MovieList movies={movies}></MovieList>
        </ListBox>
        <WatchedBox></WatchedBox>
      </Main>
    </>
  );
}
