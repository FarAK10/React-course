import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import City from "./components/City";
import CountryList from "./components/CountryList";
import { useState } from "react";
import { useEffect } from "react";

const BASE_URL = "http://localhost:8000/cities";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        alert("There was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="product" element={<Product></Product>}></Route>
        <Route path="pricing" element={<Pricing></Pricing>}></Route>
        <Route path="app" element={<AppLayout></AppLayout>}>
          <Route
            index
            element={
              <CityList cities={cities} isLoading={isLoading}></CityList>
            }
          ></Route>
          <Route
            path="cities"
            element={
              <CityList cities={cities} isLoading={isLoading}></CityList>
            }
          ></Route>
          <Route path="cities/:id" element={<City></City>}></Route>
          <Route
            path="countries"
            element={
              <CountryList cities={cities} isLoading={isLoading}></CountryList>
            }
          ></Route>
          <Route path="form" element={<p>Form</p>}></Route>
        </Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
