import classes from "./categoriesTitleForPages.module.css";
import Header from "../../../UI/header/header";
import Footer from "../../../UI/footer/footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import sliderSettings from "../../../UI/scripts/sliderSettings";
import CartButton from "../../../UI/cartButton/cartButton";
import { apiServices } from "../../../services/apiServices";
import Filters from "../../../UI/filters/filters";

const CategoriesTitleForPages = ({ name, typeId, link }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function fetchData() {
    apiServices
      .getApiData()
      .then((data) => {
        setData(data);
        setIsLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderProducts = () => {
    if (data && data[1]) {
      for (let i = 0; i < data[1].length; i++) {
        if (data[1][i].id == typeId) {
          return data[1][i].products
            .filter((product) => product.typeId == typeId)
            .map((product) => (
              <div className={classes.goods1} key={product.id}>
                <Link
                  to={`/${link}/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Slider {...sliderSettings(1, 1)}>
                    {product.images.map((image, index) => (
                      <div className={classes.imageproduct} key={index}>
                        <img
                          alt={product.name}
                          title={product.name}
                          className={classes.imageproduct}
                          src={`https://furniturebackendapp.herokuapp.com/public/${image}`}
                        />
                      </div>
                    ))}
                  </Slider>

                  <div className={classes.name}>{product.name}</div>
                  <div className={classes.price}>{product.price}₴</div>
                  <div className={classes.instock}>
                    В наличии: {product.inStock}
                  </div>
                  <div className={classes.titleproduct}>{product.title}</div>
                </Link>
                <div style={{ display: "flex", alignItems: "center" }}>
                  Додати в кошик:
                  <CartButton id={product.id} inStock={product.inStock} />
                </div>
              </div>
            ));
        }
      }
    }
    return null;
  };

  const maxPrice = () => {
    if (data && data[1]) {
      for (let i = 0; i < data[1].length; i++) {
        if (data[1][i].id == typeId) {
          return data[1][i].products
            .filter((product) => product.typeId == typeId)
            .map((product) => product.price)
            .reduce((a, b) => Math.max(a, b));
        }
      }
    }
  };

  const minPrice = () => {
    if (data && data[1]) {
      for (let i = 0; i < data[1].length; i++) {
        if (data[1][i].id == typeId) {
          return data[1][i].products
            .filter((product) => product.typeId == typeId)
            .map((product) => product.price)
            .reduce((a, b) => Math.min(a, b));
        }
      }
    }
  };

  return (
    <div className={classes.wrapper}>
      <header style={{ margin: "0 auto" }}>
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
        <div className={classes.container}>
          <div className={classes.flex}>
            <Filters maxPrice={maxPrice()} minPrice={minPrice()} />
            <div className={classes.productsofa}>
              {isLoading ? (
                renderProducts()
              ) : (
                <h1
                  style={{ fontSize: 24, color: "#fff", textAlign: "center" }}
                >
                  Loading...
                </h1>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CategoriesTitleForPages;
