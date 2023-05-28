import classes from "./section3Goods.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Elem3 from "../../../../UI/section3Label/label";
import withTranslation from "../../../../../i18next/withTranslation";
import CartButton from "../../../../UI/cartButton/cartButton";
const Section3Goods = ({
  name,
  price,
  img,
  newprice,
  id,
  t,
  productId,
  productInStock,
}) => {
  const preventDefault = (event) => event.preventDefault();
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
            <div className={classes.two} onClick={preventDefault}>
              <p className={classes.newprice}>{newprice} ГРН</p>
              <p className={classes.skidon}>{price}ГРН</p>
              <CartButton id={productId} inStock={productInStock} />
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
            <div className={classes.flex} onClick={preventDefault}>
              <p className={classes.price}>{price} ГРН</p>
              <CartButton id={productId} inStock={productInStock} />
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <Link to={`/beds/${productId}`} className={classes.link}>
      {checknewprice()}
    </Link>
  );
};

export default withTranslation(Section3Goods);
