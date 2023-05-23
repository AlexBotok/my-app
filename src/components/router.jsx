import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import Cart from "./screens/Cart/cartPage.jsx"
import Sofas from "./screens/Categories/sofas/sofas.jsx";
import Kitchens from "./screens/Categories/kitchens/kitchens.jsx";
import Chests from "./screens/Categories/chests/chests.jsx";
import Chairs from "./screens/Categories/chairs/chairs.jsx";
import Beds from "./screens/Categories/beds/beds.jsx";
import Wardrobes from "./screens/Categories/wardrobes/wardrobes.jsx";
import SignUp from "./screens/SignUp/signUp.jsx";
import SignIn from "./screens/SignIn/signIn.jsx";
import GoodsInPages from "./screens/Categories/goodsInPages/goodsInPages.jsx";
import AdminPanel from "./screens/Admin/adminPanel/adminPanel.jsx";

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
        <Route Component={Home} path="/" />
        <Route Component={Cart} path="/cart" />
        <Route Component={Sofas} path="/sofas" />
        <Route Component={GoodsInPages} path="/sofas/:id/" />
        <Route Component={Kitchens} path="/kitchens" />
        <Route Component={GoodsInPages} path="/kitchens/:id/" />
        <Route Component={Chests} path="/chests" />
        <Route Component={GoodsInPages} path="/chests/:id/" />
        <Route Component={Chairs} path="/chairs" />
        <Route Component={GoodsInPages} path="/chairs/:id/" />
        <Route Component={Beds} path="/beds" />
        <Route Component={GoodsInPages} path="/beds/:id/" />
        <Route Component={Wardrobes} path="/wardrobes" />
        <Route Component={GoodsInPages} path="/wardrobes/:id/" />
        <Route Component={SignUp} path="/register" />
        <Route Component={SignIn} path="/login" />
        <Route Component={AdminPanel} path="/admin" />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
