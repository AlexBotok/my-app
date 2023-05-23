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
          <div className={classes.sect3_2}>
            <p className={classes.name}>{name}</p>
            <div className={classes.two}>
              <p className={classes.newprice}>{newprice} ГРН</p>
              <p className={classes.skidon}>{price}ГРН</p>
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
          <div className={classes.sect3_2}>
            <p className={classes.name}>{name}</p>
            <p className={classes.price}>{price} ГРН</p>
          </div>
        </div>
      );
    }
  };
  return (
    <Link to="/beds" className={classes.link}>
      {checknewprice()}
    </Link>
  );
};

export default withTranslation(Section3Goods);
