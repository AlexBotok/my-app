import React, { useState, useEffect } from "react";
import classes from "./cartButton.module.css";

const CartButton = ({ id, inStock }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCartData = localStorage.getItem("cartData");
    if (savedCartData) {
      const cartData = JSON.parse(savedCartData);
      const itemIndex = cartData.goods.findIndex((good) => good.id === id);
      if (itemIndex !== -1) {
        setCount(cartData.goods[itemIndex].count);
      }
    }
  }, [id]);

  const click = () => {
    const savedCartData = localStorage.getItem("cartData");
    let cartData = { goods: [] };
    if (savedCartData) {
      cartData = JSON.parse(savedCartData);
    }
    const itemIndex = cartData.goods.findIndex((good) => good.id === id);
    if (itemIndex === -1) {
      cartData.goods.push({ id: id, count: 1 });
    } else {
      if (
        cartData.goods[itemIndex] &&
        cartData.goods[itemIndex].count < inStock
      ) {
        cartData.goods[itemIndex].count += 1;
      } else {
        return;
      }
    }
    localStorage.setItem("cartData", JSON.stringify(cartData));
    setCount(cartData.goods[itemIndex] ? cartData.goods[itemIndex].count : 1);
  };

  return (
    <button className={classes.cart} onClick={click}>
      <img src="/img/cart.svg" alt="cart" className={classes.cartButton} />
      <div className={classes.counter}>{count}</div>
    </button>
  );
};

export default CartButton;
