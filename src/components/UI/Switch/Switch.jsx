import React, { useState, useEffect } from "react";
import classes from "./Switch.module.css";
import withTranslation from "../../../withTranslation.js";

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

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  const editSwitch = () => {
    setChecked(!isChecked);
    if (chkClass === classes.chk1) {
      changeLanguage("uk");
      setLinklng("uk");
    } else {
      changeLanguage("en");
      setLinklng("en");
    }
  };

  const chkClass = isChecked ? classes.chk1 : classes.chk;

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

  useEffect(() => {
    window.history.replaceState(null, "", `?language=${linklng}`);
  }, [linklng]);

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

export default withTranslation(Switch);
