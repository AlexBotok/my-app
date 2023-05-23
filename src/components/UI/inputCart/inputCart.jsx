import React, { useState } from "react";

const InputCart = ({ count, onChange, maxCount }) => {
  const [inputValue, setInputValue] = useState(count);

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

  return (
    <input type="number" value={inputValue} onChange={handleInputChange} />
  );
};

export default InputCart;
