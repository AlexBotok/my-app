import React, { useContext, useEffect } from "react";
import { CartContext } from "../../screens/useContext/cartCount";
import classes from "./cartButton.module.css";

const CartButton = ({ id, inStock }) => {
  const { getCartCount, updateCartCount } = useContext(CartContext);
  const cartCount = getCartCount(id);
  useEffect(() => {
    const savedCartData = localStorage.getItem("cartData");
    if (savedCartData) {
      const cartData = JSON.parse(savedCartData);
      const itemIndex = cartData.goods.findIndex((good) => good.id === id);
      if (itemIndex !== -1) {
        updateCartCount(id, cartData.goods[itemIndex].count);
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
    updateCartCount(id, cartData.goods[itemIndex] ? cartData.goods[itemIndex].count : 1
    );
  };

  return (
    <button className={classes.cart} onClick={click}>
      <img src="/img/cart.svg" alt="cart" className={classes.cartButton} />
      <div className={classes.counter}>{cartCount}</div>
    </button>
  );
};

export default CartButton;
