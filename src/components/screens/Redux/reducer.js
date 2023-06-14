import { cartButtonUpdate } from "./types";

const localStorageData = localStorage.getItem("cartData");
let cartData = { goods: [] };
if (localStorageData) {
  cartData = JSON.parse(localStorageData);
}

export const reducer = (state = cartData, action) => {
  const localStorageData = localStorage.getItem("cartData");
  let cartData = { goods: [] };
  if (localStorageData) {
    cartData = JSON.parse(localStorageData);
  }
  switch (action.type) {
    case cartButtonUpdate:
      return { ...cartData };
    default:
      return state;
  }
};
