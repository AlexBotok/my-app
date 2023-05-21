import React, { useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { buttondown1 } from "../../svgcomp/Svg";
import classes from "./DownArrow1.module.css";

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

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [value]);

  return (
    <div ref={elRef} className={classes.el}>
      <svg width="24" height="24" display="block">
        <use href="#buttondown1"></use>
      </svg>
      {buttondown1()}
    </div>
  );
};

export default DownArrow;
