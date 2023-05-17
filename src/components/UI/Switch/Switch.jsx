import React, { useState, useEffect } from "react";
import classes from "./Switch.module.css";
import withTranslation from "../../../withTranslation.js";
import { Link, useLocation } from "react-router-dom";

const Switch = ({ i18n }) => {
  const [isChecked, setChecked] = useState(
    JSON.parse(localStorage.getItem("isChecked")) || false
  );

  const [linklng, setLinklng] = useState(() => {
    const storedLinklng = localStorage.getItem("linklng");
    if (storedLinklng) {
      return storedLinklng;
    }
    const defaultLinklng = "uk";
    localStorage.setItem("linklng", defaultLinklng);
    return defaultLinklng;
  });

  useEffect(() => {
    localStorage.setItem("isChecked", isChecked);
  }, [isChecked]);

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  useEffect(() => {
    localStorage.setItem("linklng", linklng);
  }, [linklng]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  const editSwitch = () => {
    setChecked(!isChecked);
    if (chkClass === classes.chk1) {
      changeLanguage("uk");
      setLinklng("en");
    } else {
      changeLanguage("en");
      setLinklng("uk");
    }
  };

  const chkClass = isChecked ? classes.chk1 : classes.chk;

  const location = useLocation();
  // location(`?language=${linklng}`)

  return (
    <div className={classes.div}>
      <Link to={{ pathname: location.pathname, search: `?language=${linklng}` }} style={{ textDecoration: "none" }}>
        <button
          className={`${classes.btn} ${isChecked ? "" : classes.active}`}
          onClick={editSwitch}
        >
          UK
        </button>
      </Link>
      <Link to={{ pathname: location.pathname, search: `?language=${linklng}` }} style={{ textDecoration: "none" }}>
        <button onClick={editSwitch} className={chkClass}></button>
      </Link>
      <Link to={{ pathname: location.pathname, search: `?language=${linklng}` }} style={{ textDecoration: "none" }}>
        <button
          className={`${classes.btn} ${isChecked ? classes.active : ""}`}
          onClick={editSwitch}
        >
          EN
        </button>
      </Link>
    </div>
  );
};

export default withTranslation(Switch);
