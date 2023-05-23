import classes from "./section3Goods.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Elem3 from "../../../../UI/section3Label/label";
import withTranslation from "../../../../../i18next/withTranslation";
const Section3Goods = ({ name, price, img, newprice, id, t, index }) => {
  const checknewprice = () => {
    if (newprice) {
      return (
        <div className={classes.sect3_all}>
          <div className={classes.sect3_1}>
            <Elem3 id={id} name={t("t39")} />
            <img src={img} alt={name} />
          </div>
          <div className={classes.sect3_2} style={background}>
            <p className={classes.name}>{name}</p>
            <div className={classes.two}>
              <p className={classes.newprice} style={background}>
                {newprice} ГРН
              </p>
              <p className={classes.skidon} style={background}>
                {price}ГРН
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.sect3_all}>
          <div className={classes.sect3_1}>
            <Elem3 id={id} name={t("t2")} />
            <img src={img} alt={name} />
          </div>
          <div className={classes.sect3_2} style={background}>
            <p className={classes.name}>{name}</p>
            <p className={classes.price}>{price} ГРН</p>
          </div>
        </div>
      );
    }
  };
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  const background = hovered
    ? { background: "#44C697", color: "#FFFFFF" }
    : { background: "#FFFFFF" };
  return (
    <Link
      to={`/beds/?language=${localStorage.getItem("language")}`}
      className={classes.link}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ bottom: hovered ? "25px" : "0px", ...background }}
    >
      {checknewprice()}
    </Link>
  );
};

export default withTranslation(Section3Goods);
