import anime from "animejs/lib/anime.es.js";
import { buttondown1 } from "../svgcomp/Svg";
import classes from "./DownArrow.module.css";

const DownArrow = ({ value }) => {
  const handleMouseEnterArrow = (event) => {
    const hov = event.currentTarget;
    if (value == 1) {
      const hov1 = document.getElementById("hov_menu1");
      hov1.style.opacity = 1;
      hov1.style.visibility = "visible";
      anime({ targets: hov, rotateZ: "90deg", easing: "easeOutExpo" });
    }
  };

  const handleMouseLeaveArrow = (event) => {
    const hov = event.currentTarget;
    if (value == 1) {
      const hov1 = document.getElementById("hov_menu1");
      hov1.style.opacity = 0;
      hov1.style.visibility = "hidden";
      anime({ targets: hov, rotateZ: "0deg" });
    }
  };

  return (
    <div
      className={classes.el}
      onMouseEnter={handleMouseEnterArrow}
      onMouseLeave={handleMouseLeaveArrow}
    >
      <svg width="24" height="24" display="block">
        <use href="#buttondown1"></use>
      </svg>
      {buttondown1()}
    </div>
  );
};

export default DownArrow;