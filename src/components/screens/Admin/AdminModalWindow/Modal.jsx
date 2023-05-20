import React, { useState } from "react";
import classes from "./Modal.module.css";

const Modal = ({ name }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === "myModal") {
      closeModal();
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.btn} id="mybtn" onClick={openModal}>
        <p>{name}</p>
      </div>
      {showModal && (
        <div id="myModal" className={`${classes.show} ${classes.modal} `} onClick={handleOutsideClick}>
          <div className={classes.modalcontent}>
            <span className={classes.close} onClick={closeModal}>
              &times;
            </span>
            <form
              action="/admin-product"
              method="post"
              className={classes.forma}
              encType="multipart/form-data"
            >
              <h2>Product</h2>
              <div className={classes.inputBox}>
                <span>Тип товара</span>
                <select name="type">
                  <option>Диван</option>
                  <option>Ліжко</option>
                  <option>Крісло</option>
                  <option>Комод</option>
                  <option>Шафа</option>
                  <option>Кухня</option>
                </select>
              </div>
              <div className={classes.inputBox}>
                <span>Name</span>
                <input type="text" name="name" />
              </div>
              <div className={classes.inputBox}>
                <span>Price</span>
                <input type="number" name="price" />
              </div>
              <div className={classes.inputBox}>
                <span>Title</span>
                <input type="title" name="title" />
              </div>
              <div className={classes.inputBox}>
                <span>In Stock</span>
                <input type="number" name="instock" />
              </div>
              <input type="submit" value="Добавить в БД" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
