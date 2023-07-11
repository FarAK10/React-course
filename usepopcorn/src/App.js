import { useState, useEffect } from "react";
import Main from "./components/main";
import NavBar from "./components/Nav-bar";
import { tempMovieData } from "./data";
import { Logo, NumResults, Search } from "./components/Nav-bar";
import Box, { MovieList } from "./components/list-box";
import { WatchedMovieList, WatchedSummary } from "./components/watched-movies";
import { tempWatchedData } from "./data";
import MovieDetail from "./components/selected-movie";
import { useMovies } from "./shared/hooks/useMovies";
import { useLocalStorageState } from "./shared/hooks/useLocalStorageState";
const KEY = "b8650e57";

export function App() {
  const [watched,setWatched] = useLocalStorageState([],'watched')
  // const [watched, setWatched] = useState(()=>{
  //   const stored =JSON.parse(localStorage.getItem('watched'));
  //   if(stored) return stored;
  //   return []
  // });
 
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);


  function handleSelectMovie(id) {
    setSelectedId((selectedID) => (id === selectedID ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  
  const {movies,isLoading,error}=useMovies(query,handleCloseMovie);

 

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main movies={movies}>
        <Box>
          {isLoading && <Loader></Loader>}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onSelectMovie={handleSelectMovie}
            ></MovieList>
          )}
          {error && <ErrorMessage message={error}></ErrorMessage>}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetail
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            ></MovieDetail>
          ) : (
            <>
              <WatchedSummary watched={watched}></WatchedSummary>
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              ></WatchedMovieList>
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return <p className="error">{message}</p>;
}
