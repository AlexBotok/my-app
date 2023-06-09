import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./i18next/18n.js";
import "./Styles/reset.css";
import Router from "./components/router.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Router />
  </Suspense>
  //Тут був строгий режим
);
