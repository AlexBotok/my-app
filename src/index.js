import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./18n.js";
import "./Styles/Reset.css";
import Router from "./components/Router.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  </React.StrictMode>
);
