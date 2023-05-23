import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  MyButtonLeft,
  MyButtonRight,
  MyButtonNone,
} from "../../../UI/button/MyButton";
import classes from "./goodsInPages.module.css";
import Header from "../../../UI/header/header";
import Footer from "../../../UI/footer/footer";
import CartButton from "../../../UI/cartButton/cartButton";

const GoodsInPages = () => {
  const [data, setData] = useState([]);
  const settings = {
    autoplay: false,
    infinite: true,
    dots: false,
    speed: 300,
    width: 586,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <MyButtonRight id="2" />,
    prevArrow: <MyButtonLeft id="2" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          nextArrow: <MyButtonNone />,
          prevArrow: <MyButtonNone />,
          centerMode: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data[1].length);
      });
  }, []);

  const url = window.location.href;
  const parts = url.split("/");
  const lastPart = parts[parts.length - 1];
  const digit = parseInt(lastPart, 10);

  const renderTitle = () => {
    if (data && data[1] && data[1][0] && data[1][0].products) {
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
                  <Slider {...settings}>
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

export default GoodsInPages;
