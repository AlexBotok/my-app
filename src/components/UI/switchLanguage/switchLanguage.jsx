import React, { useState, useEffect } from "react";
import classes from "./switchLanguage.module.css";
import withTranslation from "../../../i18next/withTranslation.js";
import { useSearchParams, useLocation } from "react-router-dom";

const SwitchLanguage = ({ i18n }) => {
  const [isChecked, setChecked] = useState(
    i18n.language === "en" ? true : false
  );
  const chkClass = isChecked ? classes.chk1 : classes.chk;
  const [searchParams, setSearchParams] = useSearchParams();
  const loc = useLocation();
  const brandsParam = searchParams.get("brands");
  const priceParam = searchParams.get("price");
  const typeP = loc.pathname.replace("/", "");
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const editSwitch = () => {
    setChecked(!isChecked);
    if (chkClass === classes.chk1) {
      changeLanguage("uk");
      let params = {};
      if (
        typeP == "sofas" ||
        typeP == "beds" ||
        typeP == "chairs" ||
        typeP == "wardrobes" ||
        typeP == "chests" ||
        typeP == "kitchens"
      ) {
        params.type = loc.pathname.replace("/", "");
      }
      if (brandsParam) {
        params.brands = brandsParam;
      }
      if (priceParam) {
        params.price = priceParam;
      }
      params.language = "uk";
      setSearchParams(params);
      window.location.reload(loc.pathname + "?" + searchParams.toString());
    } else {
      changeLanguage("en");
      let params = {};
      if (
        typeP == "sofas" ||
        typeP == "beds" ||
        typeP == "chairs" ||
        typeP == "wardrobes" ||
        typeP == "chests" ||
        typeP == "kitchens"
      ) {
        params.type = loc.pathname.replace("/", "");
      }
      if (brandsParam) {
        params.brands = brandsParam;
      }
      if (priceParam) {
        params.price = priceParam;
      }
      params.language = "en";
      setSearchParams(params);
      window.location.reload(loc.pathname + "?" + searchParams.toString());
    }
  };

  useEffect(() => {
    if (searchParams.get("language") !== null) {
      if (searchParams.get("language") === "uk") {
        setChecked(false);
        changeLanguage("uk");
      } else if (searchParams.get("language") === "en") {
        setChecked(true);
        changeLanguage("en");
      }
    } else {
      setChecked(i18n.language === "en" ? true : false);
      changeLanguage(i18n.language);
      let params = {};
      console.log(typeP);
      if (
        typeP == "sofas" ||
        typeP == "beds" ||
        typeP == "chairs" ||
        typeP == "wardrobes" ||
        typeP == "chests" ||
        typeP == "kitchens"
      ) {
        params.type = loc.pathname.replace("/", "");
      }
      if (brandsParam) {
        params.brands = brandsParam;
      }
      if (priceParam) {
        params.price = priceParam;
      }
      params.language = i18n.language;
      setSearchParams(params);
      if (
        typeP == "sofas" ||
        typeP == "beds" ||
        typeP == "chairs" ||
        typeP == "wardrobes" ||
        typeP == "chests" ||
        typeP == "kitchens"
      ) {
        window.location.reload(loc.pathname + "?" + searchParams.toString());
      }
    }
  }, []);

  return (
    <div className={classes.div}>
      <button
        className={`${classes.btn} ${isChecked ? "" : classes.active}`}
        onClick={editSwitch}
      >
        UK
      </button>
      <button onClick={editSwitch} className={chkClass}></button>
      <button
        className={`${classes.btn} ${isChecked ? classes.active : ""}`}
        onClick={editSwitch}
      >
        EN
      </button>
    </div>
  );
};

export default withTranslation(SwitchLanguage);
