import classes from "./Goods.module.css";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";

const Goods = () => {
  return (
    <div className={classes.wrapper}>
      <header>
        <div className={classes.container}>
          <Header />
        </div>
        <hr />
        <div className={classes.container}>
        </div>
        <hr />
      </header>
      <main>
        <div className={classes.container}>main</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Goods;
