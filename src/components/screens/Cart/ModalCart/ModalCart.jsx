import React, { useState, useEffect } from "react";
import classes from "./ModalCart.module.css";
import WithTranslation from "../../../../withTranslation";
const ModalCart = ({ t }) => {
  const [showModal, setShowModal] = useState(false);
  const [isScrollLocked, setScrollLocked] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setScrollLocked(true); // Заблокировать скролл при открытии модального окна
  };

  const closeModal = () => {
    setShowModal(false);
    setScrollLocked(false); // Разблокировать скролл при закрытии модального окна
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
      document.body.style.overflow = "hidden"; // Заблокировать скролл на body элементе
    } else {
      document.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto"; // Разблокировать скролл на body элементе
    }

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto"; // Восстановить скролл на body элементе при размонтировании компонента
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
          </div>
        </div>
      )}
    </div>
  );
};

export default WithTranslation(ModalCart);
