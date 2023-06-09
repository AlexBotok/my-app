import React, { useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { buttondown1 } from "../../svgComponent/svg";
import classes from "./hoverDownArrowList.module.css";

const DownArrow = ({ value }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    const rotateDown = () => {
      anime({ targets: el, rotateZ: "90deg", easing: "easeOutExpo" });
    };
    const rotateUp = () => {
      anime({ targets: el, rotateZ: "0deg" });
    };
    if (value) {
      rotateDown();
    } else {
      rotateUp();
    }
    const handleMouseEnter = () => {
      if (!value) {
        rotateDown();
      }
    };
    const handleMouseLeave = () => {
      if (!value) {
        rotateUp();
      }
    };
    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [value]);

  return (
    <div ref={elRef} className={classes.el}>
      <svg width="24" height="24" display="block">
        <use href="#buttondown1">{buttondown1()}</use>
      </svg>
    </div>
  );
};

export default DownArrow;
