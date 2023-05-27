import React, { useState, useEffect } from "react";
import classes from "./switchLanguage.module.css";
import withTranslation from "../../../i18next/withTranslation.js";
import { useLocation, useNavigate } from "react-router-dom";

const SwitchLanguage = ({ i18n }) => {
  const [isChecked, setChecked] = useState(
    JSON.parse(localStorage.getItem("isChecked")) || false
  );
  const nav = useLocation();
  const navigate = useNavigate();
  const chkClass = isChecked ? classes.chk1 : classes.chk;
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const editSwitch = () => {
    setChecked(!isChecked);
    if (chkClass === classes.chk1) {
      changeLanguage("uk");
      nav.search = "?language=uk";
      navigate(nav.search);
    } else {
      changeLanguage("en");
      nav.search = "?language=en";
      navigate(nav.search);
    }
  };
  useEffect(() => {
    localStorage.setItem("isChecked", isChecked);
  }, [isChecked]);

  const editParamSearchUk = () => {
    changeLanguage("uk");
    nav.search = "?language=uk";
    navigate(nav.search);
  };

  const editParamSearchEn = () => {
    changeLanguage("en");
    nav.search = "?language=en";
    navigate(nav.search);
  };

  useEffect(() => {
    if (nav.search === "?language=uk") {
      changeLanguage("uk");
      setChecked(false);
    } else if (nav.search === "?language=en") {
      changeLanguage("en");
      setChecked(true);
    } else if (nav.search !== "?language=uk" && isChecked === false) {
      editParamSearchUk();
    } else if (nav.search !== "?language=en" && isChecked === true) {
      editParamSearchEn();
    }
  }, [nav.search]);

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
