import { useState } from "react";
import { tempWatchedData } from "../data";
import ListBox from "./list-box";
import WatchedBox from "./watched-movies";
export default function Main() {
  return (
    <main className="main">
      <ListBox></ListBox>
      <WatchedBox></WatchedBox>
    </main>
  );
}
