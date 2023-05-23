import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import Cart from "./screens/Cart/Cart.jsx";
import Sofas from "./screens/Categories/Sofas/Sofas.jsx";
import Kitchens from "./screens/Categories/Kitchens/Kitchens.jsx";
import Chests from "./screens/Categories/Chests/Chests.jsx";
import Chairs from "./screens/Categories/Chairs/Chairs.jsx";
import Beds from "./screens/Categories/Beds/Beds.jsx";
import Wardrobes from "./screens/Categories/Wardrobes/Wardrobes.jsx";
import SignUp from "./screens/Admin/AdminSignUp/AdminSignUp.jsx";
import SignIn from "./screens/Admin/AdminSignIn/AdminSignIn.jsx";
import Goods from "./screens/Categories/Goods.jsx";
import AdminPanel from "./screens/Admin/AdminPanel/AdminPanel.jsx";

const Router = () => {
  useEffect(() => {
    const language = localStorage.getItem("language");
    if (!language && window.location.pathname === "/") {
      const defaultLanguage = "uk";
      localStorage.setItem("language", defaultLanguage);
      window.history.pushState(null, "", `/?language=${defaultLanguage}`);
    } else if (window.location.pathname === "/") {
      window.history.pushState(
        null,
        "",
        `/?language=${localStorage.getItem("language")}`
      );
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Sofas />} path="/sofas" />
        <Route element={<Goods />} path="/sofas/:id/" />
        <Route element={<Kitchens />} path="/kitchens" />
        <Route element={<Goods />} path="/kitchens/:id/" />
        <Route element={<Chests />} path="/chests" />
        <Route element={<Goods />} path="/chests/:id/" />
        <Route element={<Chairs />} path="/chairs" />
        <Route element={<Goods />} path="/chairs/:id/" />
        <Route element={<Beds />} path="/beds" />
        <Route element={<Goods />} path="/beds/:id/" />
        <Route element={<Wardrobes />} path="/wardrobes" />
        <Route element={<Goods />} path="/wardrobes/:id/" />
        <Route element={<SignUp />} path="/register" />
        <Route element={<SignIn />} path="/login" />
        <Route element={<AdminPanel />} path="/admin" />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
