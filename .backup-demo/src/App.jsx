// App.jsx  -  completed backup version of the worksheet
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import NewProduct from "./pages/NewProduct.jsx";
import Added from "./pages/Added.jsx";
import Weather from "./pages/Weather.jsx";
import Asteroids from "./pages/Asteroids.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* BLANK 9: the products page lives at the address /products */}
      <Route path="/products" element={<Products />} />

      <Route path="/products/new" element={<NewProduct />} />
      <Route path="/products/added" element={<Added />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/asteroids" element={<Asteroids />} />
    </Routes>
  );
}

export default App;
