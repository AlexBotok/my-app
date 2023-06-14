import React, { useState } from "react";
import classes from "./inputCart.module.css";
import { useDispatch } from "react-redux";
import { cartUpdate } from "../../screens/Redux/acitons";

const InputCart = ({ count, maxCount, onChange }) => {
  const [inputValue, setInputValue] = useState(count);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 1 && value <= maxCount) {
      setInputValue(value);
      onChange(value);
    } else if (value > maxCount) {
      setInputValue(maxCount);
      onChange(maxCount);
    } else {
      setInputValue(1);
      onChange(1);
    }
  };

  const handleIncrement = () => {
    const newValue = inputValue + 1;
    if (newValue <= maxCount) {
      setInputValue(newValue);
      onChange(newValue);
    }
    dispatch(cartUpdate());
  };

  const handleDecrement = () => {
    const newValue = inputValue - 1;
    if (newValue >= 1) {
      setInputValue(newValue);
      onChange(newValue);
    }
    dispatch(cartUpdate());
  };

  const handleDelete = () => {
    setInputValue(0);
    onChange(0);
    dispatch(cartUpdate());
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
