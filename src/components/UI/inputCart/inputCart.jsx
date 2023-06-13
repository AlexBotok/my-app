import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../screens/Redux/cartCount";
import classes from "./inputCart.module.css";

const InputCart = ({ id, count, maxCount, onChange }) => {
  const { getCartCount, updateCartCount, deleteItemFromCart } =
    useContext(CartContext);
  const [inputValue, setInputValue] = useState(count);

  useEffect(() => {
    const cartCount = getCartCount(id);
    setInputValue(cartCount);
  }, [id]);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 1 && value <= maxCount) {
      setInputValue(value);
      updateCartCount(id, value);
      onChange(value);
    } else if (value > maxCount) {
      setInputValue(maxCount);
      updateCartCount(id, maxCount);
      onChange(maxCount);
    } else {
      setInputValue(1);
      onChange(1);
      updateCartCount(id, 1);
    }
  };

  const handleIncrement = () => {
    const newValue = inputValue + 1;
    if (newValue <= maxCount) {
      setInputValue(newValue);
      updateCartCount(id, newValue);
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    const newValue = inputValue - 1;
    if (newValue >= 1) {
      setInputValue(newValue);
      updateCartCount(id, newValue);
      onChange(newValue);
    }
  };

  const handleDelete = () => {
    setInputValue(0);
    deleteItemFromCart(id);
    onChange(0);
  };

  return (
    <div className={classes.input}>
      <div style={{ display: "flex" }}>
        <button className={classes.button} onClick={handleDecrement}>
          -
        </button>
        <input
          className={classes.inputNumber}
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className={classes.button} onClick={handleIncrement}>
          +
        </button>
      </div>
      <div className={classes.delButton}>
        <button
          className={classes.button}
          style={{ width: 150 }}
          onClick={handleDelete}
        >
          Delete from cart
        </button>
      </div>
    </div>
  );
};
export default InputCart;
