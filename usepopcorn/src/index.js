import React, { useState } from "react";
import ReactDom from "react-dom/client";
import App from "./App";
// import "./index.css";
import StarRating from "./shared/star-rating";
const root = ReactDom.createRoot(document.getElementById("root"));

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" onSetRating={setMovieRating}></StarRating>;
      <p>This movies was rated {movieRating} startContainerStyle</p>
    </div>
  );
}

root.render(
  <React.StrictMode>
    {/* <App></App> */}
    <StarRating
      maxRating={10}
      size={24}
      color="red"
      messages={["Okay", "Good", "Amazing"]}
    ></StarRating>
    <Test></Test>
  </React.StrictMode>
);
