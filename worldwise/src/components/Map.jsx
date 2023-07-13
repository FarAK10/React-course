import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
  const [searchParams, setSearch] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        Position: {lat},{lng}
      </h1>
      <button
        onClick={() => {
          setSearch({ lat: 23, lng: 50 });
        }}
      >
        Change position
      </button>
    </div>
  );
}
