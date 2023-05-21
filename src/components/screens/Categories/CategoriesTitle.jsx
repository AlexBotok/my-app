import classes from "./Categories.module.css";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import { useEffect, useState } from "react";

const CategoriesTitle = ({ name, typeId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const renderProducts = () => {
    if (data && data[1] && data[1][0] && data[1][0].products) {
      for (let i = 0; i < data[1][0].products.length; i++) {
        if(data[1][0].products[i].typeId == typeId){
          return data[1][0].products.map(
          (product) => (
            console.log(product),
            (
              <div key={product.id} className="name">
                {product.name}
                {product.price}
                {product.title}
                {product.inStock}
              </div>
            )
          )
        );
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
          <h1 className={classes.title}>{name}</h1>
        </div>
        <hr />
      </header>
      <main>
        <div className={classes.container}>{renderProducts()}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CategoriesTitle;
