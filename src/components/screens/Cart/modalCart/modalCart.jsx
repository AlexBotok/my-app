import React, { useState, useEffect } from "react";
import classes from "./modalCart.module.css";
import WithTranslation from "../../../../i18next/withTranslation";
import Slider from "react-slick";
import sliderSettings from "../../../UI/scripts/sliderSettings";
import { Link } from "react-router-dom";
import InputCart from "../../../UI/inputCart/inputCart";
import apiServices from "../../../services/apiServices";

const ModalCart = ({ t }) => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const cartData = JSON.parse(localStorage.getItem("cartData")) || {
    goods: [],
  };
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isScrollLocked, setScrollLocked] = useState(false);

  async function fetchData() {
    const data = await apiServices.getApiData();
    setData(data);
    setIsLoading(true);
  }

  useEffect(() => {
    fetchData();
  }, [showModal == true]);

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
                        <Link>
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
                        </Link>
                        <div className={classes.name}>{product.name}</div>
                        <div className={classes.price}>{product.price}₴</div>
                        <div className={classes.instock}>
                          В наличии: {product.inStock}
                        </div>
                        <div className={classes.titleproduct}>
                          {product.title}
                        </div>
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
      if (matchedProducts.length > 0) {
        return matchedProducts;
      }
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
  };

  const openModal = () => {
    setShowModal(true);
    setScrollLocked(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setScrollLocked(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === "myModal") {
      closeModal();
    }
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrollLocked) {
        event.preventDefault();
      }
    };

    if (isScrollLocked) {
      document.addEventListener("scroll", handleScroll, { passive: false });
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isScrollLocked]);

  return (
    <div>
      <button onClick={openModal} className={classes.button}>
        <img src="/img/cart.svg" alt="cart" />
      </button>
      {showModal && (
        <div
          id="myModal"
          className={`${classes.show} ${classes.modal} `}
          onClick={handleOutsideClick}
        >
          <div className={classes.modalcontent}>
            <div className={classes.carthead}>
              <h2 className={classes.h2}>{t("t37")}</h2>
              <span
                className={classes.close}
                onClick={closeModal}
                style={{ marginRight: "5px" }}
              >
                &times;
              </span>
            </div>
            <hr />
            <div className={classes.cartinfo}>
              {isLoading ? (
                cartproducts()
              ) : (
                <h1
                  style={{
                    fontSize: 24,
                    color: "#000000",
                    textAlign: "center",
                  }}
                >
                  Loading...
                </h1>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithTranslation(ModalCart);
