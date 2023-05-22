import React, { useState } from "react";

const InputCart = ({ count, localS }) => {
  const [inputValue, setInputValue] = useState(count);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <input type="number" value={inputValue} onChange={handleInputChange} />
  );
};

export default InputCart;
