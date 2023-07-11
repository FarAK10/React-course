import { useEffect, useRef, useState } from "react";

export function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}
export function NumResults({ movies }) {
  console.log(movies.length)
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
export function Search({ query, setQuery }) {

  const inputEl = useRef(null);


  useEffect(function(){
    function callback(e){

      if(document.activeElement ===inputEl.current) return;
      if(e.code==='Enter'){
        inputEl.current.focus();
        setQuery('')
      }
    }
    document.addEventListener('keydown',callback)
    return ()=>document.addEventListener('keydown',callback)
  },[setQuery])
 
  // useEffect(function(){
  //   const el =document.querySelector('.search');
  //   console.log(el);
  //   el.focus();
  // },[query])

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref= {inputEl}
    />
  );
}

export default function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}
