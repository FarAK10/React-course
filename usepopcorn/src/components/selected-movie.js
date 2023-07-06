import { useEffect } from "react";

export default function MovieDetail({ selectedId, onCloseMovie }) {
  useEffect(function(){
    async function getMovieDetails(){
        
    }
  })
  return (
    <div className="details">
      <button
        className="btn-back"
        onClick={() => {
          onCloseMovie();
        }}
      >
        &larr;
      </button>
      {selectedId}
    </div>
  );
}
