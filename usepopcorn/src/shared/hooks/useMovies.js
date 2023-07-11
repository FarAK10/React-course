
import { useState,useEffect } from "react";


const KEY = "b8650e57";

export function useMovies(query,callback){
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(
        function () {
          const controller = new AbortController();
          async function fetchMovies() {
            try {
              console.log(query);
              if (!query) return; // add this line to skip fetching if query is empty
              setIsLoading(() => true);
              setError(() => "");
    
              const res = await fetch(
                `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,{signal:controller.signal}
              );
    
              if (!res.ok) throw new Error("Smth went wrong with fetching movies");
              const data = await res.json();
              if (data.Response === "False") throw new Error("Movie not found!");
              setMovies(() => data.Search);
              console.log(data.Search);
            } catch (err) {
              if(err.name ==='AbortError'){
                setError(err.message)
              }
              console.log(err);
              setError(() => err.message);
            } finally {
              setIsLoading(() => false);
            }
          }
         callback();
          fetchMovies();
     
          return function(){
            controller.abort();
          }
        },
        [query]
      );

      return {movies,isLoading,error}
}