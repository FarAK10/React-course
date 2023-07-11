import { useEffect, useState,useRef } from "react";
import StarRating from "../shared/components/star-rating";
import { Loader } from "../App";
const KEY = "b8650e57";
export default function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  useEffect(function(){
    if(userRating)  countRef.current +=1;


  },[userRating])

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;




  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const [avgRating,setAvgRating]   = useState(0);


  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imbdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countRef.current,
    };
    onAddWatched(newWatchedMovie);
    setAvgRating((avgRating)=>(avgRating+userRating)/2)
    onCloseMovie();
  }

  useEffect(function(){
    function callback(e){
      if(e.code==='Escape'){
        onCloseMovie();
      }
    }
    document.addEventListener('keydown',callback)
    return function(){
      document.removeEventListener('keydown',callback);
    }
  },[onCloseMovie])

  useEffect(
    function () {
      async function getMovieDetails() {
        setLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?i=${selectedId}&apikey=${KEY}`
        );
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(function (){
    if(!title) return;
    document.title = `Movie | ${title}`;


    return function(){
      document.title = 'usePopCorn';
    }
  },[title])

  return (
    <div className="details">
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <header>
            <button
              className="btn-back"
              onClick={() => {
                onCloseMovie();
              }}
            >
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`}></img>
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>{imdbRating}</p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  ></StarRating>
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>You rated with movie {watchedUserRating}</p>
              )}
            </div>

            <p>
              <en>{plot}</en>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}

      {selectedId}
    </div>
  );
}
