import { useState } from "react";
import { tempWatchedData } from "../data";
import ListBox from "./list-box";
import WatchedBox from "./watched-movies";

export default function Main({ children }) {
  return <main className="main">{children}</main>;
}
