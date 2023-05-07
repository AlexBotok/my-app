import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import Cart from "./screens/Cart/Cart.jsx";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
