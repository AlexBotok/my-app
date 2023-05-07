import Header2 from "../../UI/Header2/Header2";
import Footer from "../../UI/Footer/Footer";
import classes from "./Cart.module.css";
const Cart = () => {
  return (
    <div className={classes.wrapper}>
        <Header2 name="Furniture Cart Page" />
        <main className={classes.main}>main</main>
        <Footer />
      </div>
  );
};

export default Cart;
