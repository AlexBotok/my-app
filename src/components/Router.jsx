import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import Cart from "./screens/Cart/Cart.jsx";
import Sofas from "./screens/Categories/Sofas/Sofas.jsx";
import Kitchens from "./screens/Categories/Kitchens/Kitchens.jsx";
import Chests from "./screens/Categories/Chests/Chests.jsx";
import Chairs from "./screens/Categories/Chairs/Chairs.jsx";
import Beds from "./screens/Categories/Beds/Beds.jsx";
import Wardrobes from "./screens/Categories/Wardrobes/Wardrobes.jsx";
import Goods from "./screens/Categories/Goods.jsx";
import Admin from "./screens/Admin/Admin.jsx";
const Router = () => {
  useEffect(() => {
    const language = localStorage.getItem("language");
    if (window.location.pathname === "/") {
      window.history.pushState(null, "", `/?language=${language}`);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Admin />} path="/admin" />
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Sofas />} path="/sofas" />
        <Route element={<Kitchens />} path="/kitchens" />
        <Route element={<Chests />} path="/chests" />
        <Route element={<Chairs />} path="/chairs" />
        <Route element={<Beds />} path="/beds" />
        {/* <Route element={<Goods />} path="/beds/:id/" /> */}
        <Route element={<Wardrobes />} path="/wardrobes" />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
