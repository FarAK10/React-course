import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="product" element={<Product></Product>}></Route>
        <Route path="pricing" element={<Pricing></Pricing>}></Route>
        <Route path="app" element={<AppLayout></AppLayout>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
