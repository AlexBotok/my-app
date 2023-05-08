import Header2 from "../../UI/Header2/Header2";
import Footer from "../../UI/Footer/Footer";
import classes from "./Cart.module.css";
import withTranslation from "../../../withTranslation";
const Cart = ({ t }) => {
  return (
    <div className={classes.wrapper}>
      <Header2 name={t("t37")} />
      <main className={classes.main}>main</main>
      <Footer />
    </div>
  );
};

export default withTranslation(Cart);
