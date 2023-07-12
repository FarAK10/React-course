import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

export default function AppLayout() {
  return (
    <div>
      <AppNav></AppNav>
      <p>App</p>
    </div>
  );
}
