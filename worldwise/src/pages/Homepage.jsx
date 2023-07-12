import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <PageNav></PageNav>
      <h1>Home</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default HomePage;
