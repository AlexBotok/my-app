import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import sliderSettings from "../../../UI/scripts/sliderSettings";
import classes from "./goodsPages.module.css";
import Header from "../../../UI/header/header";
import Footer from "../../../UI/footer/footer";
import CartButton from "../../../UI/cartButton/cartButton";
import {apiServices} from "../../../services/apiServices";

const GoodsPages = () => {
  const [data, setData] = useState([]);
  const digit = useParams().id;
  
  function fetchData() {
    apiServices
      .getApiData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderTitle = () => {
    if (data && data[1]) {
      for (let k = 0; k < data[1].length; k++) {
        for (let i = 0; i < data[1][k].products.length; i++) {
          if (data[1][k].products[i].id == digit) {
            let product = data[1][k].products[i];
            return <h1 className={classes.title}>{product.name}</h1>;
          }
        }
      }
    }
    return null;
  };

  const renderProductPage = () => {
    if (data && data[1] && data[1][0] && data[1][0].products) {
      for (let k = 0; k < data[1].length; k++) {
        for (let i = 0; i < data[1][k].products.length; i++) {
          if (data[1][k].products[i].id == digit) {
            let product = data[1][k].products[i];
            return (
              <div className={classes.container}>
                <div className={classes.goods1} key={product.id}>
                  <Link>
                    <Slider {...sliderSettings(1,1)}>
                      {product.images.map((image, index) => (
                        <div className={classes.imageproduct} key={index}>
                          <img
                            alt={product.name}
                            title={product.name}
                            className={classes.imageproduct}
                            src={`http://localhost:5000/public/${image}`}
                          />
                        </div>
                      ))}
                    </Slider>
                  </Link>
                  <div className={classes.name}>{product.name}</div>
                  <div className={classes.price}>{product.price}₴</div>
                  <div className={classes.instock}>
                    В наличии: {product.inStock}
                  </div>
                  <div className={classes.titleproduct}>{product.title}</div>
                  <CartButton id={product.id} inStock={product.inStock} />
                </div>
              </div>
            );
          }
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
        <div className={classes.container}>{renderTitle()}</div>
        <hr />
      </header>
      <main>{renderProductPage()}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default GoodsPages;
