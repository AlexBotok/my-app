import React, { useState, useEffect } from "react";
import classes from "./Switch.module.css";
import withTranslation from "../../../withTranslation.js";
const Switch = ({ i18n }) => {
  const [isChecked, setChecked] = useState(
    JSON.parse(localStorage.getItem("isChecked")) || false
  );

  useEffect(() => {
    localStorage.setItem("isChecked", isChecked);
  }, [isChecked]);

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  const changeLanguage = (language) => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  };

  const editSwitch = (event) => {
    event.preventDefault();
    setChecked(!isChecked);
    if (chkClass === classes.chk1) {
      changeLanguage("uk");
    } else {
      changeLanguage("en");
    }
  };

  const chkClass = isChecked ? classes.chk1 : classes.chk;

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
