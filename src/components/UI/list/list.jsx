import classes from "./list.module.css";
import DownArrow1 from "../hoverDownArrow/hoverDownList/hoverDownArrowList";
import { Link } from "react-router-dom";
import withTranslation from "../../../i18next/withTranslation";
import React, { useState, useEffect, useRef } from "react";

const List = ({ name, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hov1Ref = useRef(null);

  useEffect(() => {
    const hov1 = hov1Ref.current;
    if (hov1) {
      if (isHovered) {
        hov1.style.opacity = "1";
        hov1.style.display = "block";
      } else {
        hov1.style.opacity = "1";
        hov1.style.display = "none";
      }
    }
  }, [isHovered]);

  const listLiElements = () => {
    if (link == "profile") {
      return (
        <ul ref={hov1Ref} id="hov_menu1" className={classes.hovmenusofasul}>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="">Logout</Link></li>
        </ul>
      );
    } else {
      return (
        <ul ref={hov1Ref} id="hov_menu1" className={classes.hovmenusofasul}>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
        </ul>
      );
    }
  };

  return (
    <div
      className={classes.hovmenusofas}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={classes.flexcateg}>
        <Link to={`/${link}`}>{name}</Link>
        <DownArrow1 value={isHovered} />
      </div>
      {listLiElements()}
    </div>
  );
};

export default withTranslation(List);
