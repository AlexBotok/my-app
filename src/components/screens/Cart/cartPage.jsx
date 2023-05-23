import Header2 from "../../UI/Header2/Header2";
import Footer from "../../UI/footer/footer";
import classes from "./cartPage.module.css";
import withTranslation from "../../../i18next/withTranslation";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import sliderSettings from "../../UI/scripts/sliderSettings";
import InputCart from "../../UI/inputCart/inputCart";

const CartPage = ({ t }) => {
  const [data, setData] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        console.log(data);
      });
  });

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
                          style={{ textDecoration: "none" }}
                        >
                          <Slider {...sliderSettings}>
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
      }
    }

    if (matchedProducts.length > 0) {
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
    calculateTotalPrice(cartData.goods);
  };

  const calculateTotalPrice = (cartGoods) => {
    let totalPrice = 0;
    if (data && data[0]) {
      const productCategories = data[0];
      for (let i = 0; i < productCategories.length; i++) {
        const products = productCategories[i].products;
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
    if (!isLoading) {
      calculateTotalPrice(cartData.goods);
    }
  });

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

export default withTranslation(CartPage);
