import React, { useState, useEffect } from "react";
import classes from "./CartButton.module.css";
const CartButton = ({ id, inStock }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCartData = localStorage.getItem("cartData");

    if (savedCartData) {
      const cartData = JSON.parse(savedCartData);
      const item = cartData.goods.find((good) => good.id === id);

      if (item) {
        setCount(item.count);
      }
    }
  }, [id]);

  const handleClick = () => {
    const newCount = count + 1;

    if (newCount <= inStock) {
      setCount(newCount);

      const savedCartData = localStorage.getItem("cartData");
      let cartData = { goods: [] };

      if (savedCartData) {
        cartData = JSON.parse(savedCartData);
      }

      const itemIndex = cartData.goods.findIndex((good) => good.id === id);

      if (itemIndex >= 0) {
        cartData.goods[itemIndex].count = newCount;
      } else {
        cartData.goods.push({ id: id, count: newCount });
      }

      localStorage.setItem("cartData", JSON.stringify(cartData));
    }
  };

  return <button className={classes.cart} onClick={handleClick}>Добавить в корзину ({count})</button>;
};

export default CartButton;
