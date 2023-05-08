import classes from "./Categories.module.css";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
const CategoriesTitle = ({ name }) => {
  return (
    <div className={classes.wrapper}>
      <header>
        <div className={classes.container}>
          <Header />
        </div>
        <hr />
        <div className={classes.container}>
          <h1 className={classes.title}>{name}</h1>
        </div>
        <hr />
      </header>
      <main><div className={classes.container}>main</div></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CategoriesTitle;
