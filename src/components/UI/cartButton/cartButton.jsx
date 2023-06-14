import classes from "./cartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartUpdate } from "../../screens/Redux/acitons";

const CartButton = ({ id, inStock }) => {
  const dispatch = useDispatch();
  const counter = useSelector(() => {
    const savedCartData = localStorage.getItem("cartData");
    if (savedCartData) {
      const cartData = JSON.parse(savedCartData);
      const itemIndex = cartData.goods.findIndex((good) => good.id === id);
      if (itemIndex !== -1) {
        return cartData.goods[itemIndex].count;
      }
    }
  });

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
    dispatch(cartUpdate());
  };

  return (
    <button className={classes.cart} onClick={click}>
      <img src="/img/cart.svg" alt="cart" className={classes.cartButton} />
      <div className={classes.counter}>{counter}</div>
    </button>
  );
};

export default CartButton;
