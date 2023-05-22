import React, { useState, useEffect } from "react";
import classes from "./ModalCart.module.css";
import WithTranslation from "../../../../withTranslation";
import Slider from "react-slick";
import {
  MyButtonLeft,
  MyButtonRight,
  MyButtonNone,
} from "../../../UI/button/MyButton";
import InputCart from "../../../UI/InputCart/InputCart";

const ModalCart = ({ t }) => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || { goods: [] }
  );

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
  };

  useEffect(() => {
    cartproducts();
  }, [data]);

  const [showModal, setShowModal] = useState(false);
  const [isScrollLocked, setScrollLocked] = useState(false);

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
        <img src="/img/shopping-cart.svg" alt="cart" />
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
            <div className={classes.cartinfo}>{cartproducts()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithTranslation(ModalCart);
