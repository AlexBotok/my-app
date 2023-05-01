import React from "react";
import anime from "animejs/lib/anime.es.js";
import {buttondown1} from "../svgcomp/Svg"
import classes from "./DownArrow.module.css";

const DownArrow = (props) => {
  const handleMouseEnter = (event) => {
    const hov = event.currentTarget;
    if (props.value == 1) {
      const hov1 = document.getElementById("hov_menu1")
      hov1.style.opacity = 1;
      hov1.style.visibility = "inherit";
    }
    anime({ targets: hov, rotateZ: "90deg", easing: "easeOutExpo" });
  };

  const handleMouseLeave = (event) => {
    const hov = event.currentTarget;
    if (props.value == 1) {
      const hov1 = document.getElementById("hov_menu1")
      hov1.style.opacity = 0;
      hov1.style.visibility = "hidden";
    }
    anime({ targets: hov, rotateZ: "0deg" });
  };

  return (
    <div
      className={classes.el}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg width="24" height="24" display="block">
        <use href="#buttondown1"></use>
      </svg>
      {buttondown1()}
    </div>
  );
};

export default DownArrow;

