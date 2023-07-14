import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import City from "./components/City";
import CountryList from "./components/CountryList";

import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="product" element={<Product></Product>}></Route>
          <Route path="pricing" element={<Pricing></Pricing>}></Route>
          <Route path="app" element={<AppLayout></AppLayout>}>
            <Route index element={<Navigate replace to="cities" />}></Route>
            <Route path="cities" element={<CityList></CityList>}></Route>
            <Route path="cities/:id" element={<City></City>}></Route>
            <Route
              path="countries"
              element={<CountryList></CountryList>}
            ></Route>
            <Route path="form" element={<Form></Form>}></Route>
          </Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
