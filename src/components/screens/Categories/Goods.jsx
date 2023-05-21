import classes from "./Goods.module.css";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import { useEffect, useState } from "react";
const Goods = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  const url = window.location.href;
  const parts = url.split("/");
  const lastPart = parts[parts.length - 1];
  const digit = parseInt(lastPart, 10);

  const renderProducts = () => {
    if (data && data[1] && data[1][0] && data[1][0].products) {
      for (let i = 0; i < data[1][0].products.length; i++) {
        if (data[1][0].products[i].id == digit) {
          return data[1][0].products[i].name;
        }
      }
    }
    return null;
  };

  return (
    <div className={classes.wrapper}>
      <header>
        <div className={classes.container}>
          <Header />
        </div>
        <hr />
        <div className={classes.container}>
          <h1 className={classes.title}>{renderProducts()}</h1>
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
