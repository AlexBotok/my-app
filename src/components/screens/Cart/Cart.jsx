import Header2 from "../../UI/Header2/Header2";
import Footer from "../../UI/Footer/Footer";
import classes from "./Cart.module.css";
import withTranslation from "../../../withTranslation";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import {
  MyButtonLeft,
  MyButtonRight,
  MyButtonNone,
} from "../../UI/button/MyButton";
import InputCart from "../../UI/InputCart/InputCart";

const Cart = ({ t }) => {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || { goods: [] }
  );
  const [totalPrice, setTotalPrice] = useState(0); // Общая сумма
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
        console.log(data);
      });
  }, []);

  const updateCartData = (productId, count) => {
    const updatedData = cartData.goods.map((item) => {
      if (item.id === productId) {
        return { id: item.id, count: count };
      }
      return item;
    });

    setCartData({ goods: updatedData });
    localStorage.setItem("cartData", JSON.stringify({ goods: updatedData }));
  };

  const cartproducts = () => {
    let localStorageGoods = JSON.parse(localStorage.getItem("cartData"));
    if (localStorageGoods) {
      let localStorageGoods = JSON.parse(
        localStorage.getItem("cartData")
      ).goods;
      const matchedProducts = [];
      if (localStorageGoods != null) {
        if (data && data[1] && data[1][0] && data[1][0].products) {
          for (let i = 0; i < data[1][0].products.length; i++) {
            const productId = data[1][0].products[i].id;
            for (let j = 0; j < localStorageGoods.length; j++) {
              const localStorageId = localStorageGoods[j].id;
              if (productId == localStorageId) {
                let product = data[1][0].products[i];
                const maxCount = product.inStock;
                matchedProducts.push(
                  <div className={classes.container} key={product.id}>
                    <div className={classes.goods1}>
                      <Link
                        to={`/sofas/${product.id}`}
                        style={{ textDecoration: "none" }}
                      >
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
                        <div className={classes.titleproduct}>
                          {product.title}
                        </div>
                      </Link>
                      <InputCart
                        count={localStorageGoods[j].count}
                        maxCount={maxCount}
                        onChange={(newCount) =>
                          handleCountChange(localStorageGoods[j], newCount)
                        }
                      />
                    </div>
                  </div>
                );
              }
            }
          }
        }
      }
      return matchedProducts;
    } else {
      return <div>Корзина пуста</div>;
    }
  };

  const handleCountChange = (item, newCount) => {
    const savedCartData = localStorage.getItem("cartData");
    let cartData = { goods: [] };

    if (savedCartData) {
      cartData = JSON.parse(savedCartData);
    }

    const itemIndex = cartData.goods.findIndex((good) => good.id === item.id);

    if (itemIndex >= 0) {
      cartData.goods[itemIndex].count = newCount;
    } else {
      cartData.goods.push({ id: item.id, count: newCount });
    }

    localStorage.setItem("cartData", JSON.stringify(cartData));
    calculateTotalPrice(cartData.goods); // Обновляем общую сумму при изменении количества товаров
  };

  const calculateTotalPrice = (cartGoods) => {
    let totalPrice = 0;
    if (data && data[1] && data[1][0] && data[1][0].products) {
      for (let i = 0; i < data[1][0].products.length; i++) {
        const productId = data[1][0].products[i].id;
        for (let j = 0; j < cartGoods.length; j++) {
          const cartProductId = cartGoods[j].id;
          if (productId === cartProductId) {
            const product = data[1][0].products[i];
            totalPrice += product.price * cartGoods[j].count;
          }
        }
      }
    }
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    if (!isLoading) {
      calculateTotalPrice(cartData.goods);
    }
  }, [isLoading, cartData.goods]);

  return (
    <div className={classes.wrapper}>
      <Header2 name={t("t37")} />
      <main className={classes.main}>
        <div className={classes.cartinfo}>{cartproducts()}</div>
        <div className={classes.totalPrice}>До сплати: {totalPrice}₴</div>
      </main>
      <Footer />
    </div>
  );
};

export default withTranslation(Cart);
