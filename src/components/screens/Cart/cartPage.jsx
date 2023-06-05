import Header from "../../UI/header/header";
import Footer from "../../UI/footer/footer";
import classes from "./cartPage.module.css";
import withTranslation from "../../../i18next/withTranslation";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import sliderSettings from "../../UI/scripts/sliderSettings";
import InputCart from "../../UI/inputCart/inputCart";
import {apiServices} from "../../services/apiServices";

const CartPage = ({ t }) => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
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

  const cartproducts = () => {
    const matchedProducts = [];
    let localStorageGoods = JSON.parse(localStorage.getItem("cartData"));
    if (localStorageGoods) {
      let localStorageGoods = JSON.parse(
        localStorage.getItem("cartData")
      ).goods;

      if (data && data[1]) {
        for (let k = 0; k < data[1].length; k++) {
          if (data[1][k].products) {
            // Проверка или есть товары в типе мебели
            for (let i = 0; i < data[1][k].products.length; i++) {
              // Цикл для перебора товаров в данной категории
              const productId = data[1][k].products[i].id; // id товара для дальнейшего сравнения с id товаров в localStorage
              for (let j = 0; j < localStorageGoods.length; j++) {
                // Цикл для перебора товаров в localStorage
                const localStorageId = localStorageGoods[j].id; // id товара в localStorage
                if (productId == localStorageId) {
                  // Сравнение id товара в localStorage с id товара в данной категории
                  let product = data[1][k].products[i]; // Присвоение товара в переменную
                  const maxCount = product.inStock; // Товар в наличии
                  matchedProducts.push(
                    <div className={classes.container} key={product.id}>
                      <div className={classes.goods1}>
                        <Link
                          to={`/sofas/${product.id}`}
                          className={classes.link}
                        >
                          <Slider {...sliderSettings(1,1)}>
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
                        </Link>
                        <div className={classes.infoBlock}>
                          <div className={classes.name}>{product.name}</div>
                          <div className={classes.price}>{product.price}₴</div>
                          <div className={classes.instock}>
                            В наличии: {product.inStock}
                          </div>
                          <div className={classes.titleproduct}>
                            {product.title}
                          </div>
                        </div>
                        <InputCart
                          id={productId}
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
      }
    }

    if (matchedProducts.length > 0) {
      return matchedProducts;
    } else {
      return <div>Корзина пуста</div>;
    }
  };

  const handleCountChange = (product, newCount) => {
    const savedCartData = localStorage.getItem("cartData"); // Получение старых данных из localStorage
    let cartData = { goods: [] }; // Создание нового объекта для записи в localStorage
    if (savedCartData) {
      // Проверка или есть данные в localStorage
      cartData = JSON.parse(savedCartData); // Присвоение данных из localStorage в новый объект
    }
    const item = cartData.goods.findIndex((good) => good.id === product.id); // Поиск товара в localStorage
    if (newCount >= 1) {
      // Проверка или количество товара больше 1
      cartData.goods[item].count = newCount; // Присвоение нового количества товара
      localStorage.setItem("cartData", JSON.stringify(cartData)); // Запись новых данных в localStorage
    } else if (newCount === 0) {
      // Проверка или количество товара равно 0
      cartData.goods.splice(item, 1); // Удаление товара из localStorage
      localStorage.setItem("cartData", JSON.stringify(cartData)); // Запись новых данных в localStorage
    }
    calculateTotalPrice(cartData.goods);
  };

  const calculateTotalPrice = (cartGoods) => {
    let totalPrice = 0;
    if (data && data[1]) {
      for (let i = 0; i < data[1].length; i++) {
        const products = data[1][i].products;
        for (let j = 0; j < products.length; j++) {
          const product = products[j];
          const productId = product.id;
          for (let k = 0; k < cartGoods.length; k++) {
            const cartProductId = cartGoods[k].id;
            if (productId === cartProductId) {
              totalPrice += product.price * cartGoods[k].count;
            }
          }
        }
      }
    }
    setTotalPrice(totalPrice);
  };
  const cartData = JSON.parse(localStorage.getItem("cartData")) || {
    goods: [],
  };
  useEffect(() => {
    if (isLoading) {
      calculateTotalPrice(cartData.goods);
    }
  }, [isLoading]);

  return (
    <div className={classes.wrapper}>
      <Header />
      <hr className={classes.hr} />
      <h1 className={classes.title}> Furniture {t("t37")}</h1>
      <hr className={classes.hr} />
      <main className={classes.main}>
        <div className={classes.cartinfo}>
          {isLoading ? (
            cartproducts()
          ) : (
            <h1 style={{ fontSize: 24, color: "#fff", textAlign: "center" }}>
              Loading...
            </h1>
          )}
        </div>
        <div className={classes.totalPrice}>До сплати: {totalPrice}₴</div>
      </main>
      <Footer />
    </div>
  );
};

export default withTranslation(CartPage);
