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
  const [fileCount, setFileCount] = useState(0);

  const handleFileChange = () => {
    let files = document.getElementById("inputimg").files;
    console.log(files.length);
    setFileCount(files.length);
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault(); // Предотвращаем отправку формы
  //   // Дополнительные действия по обработке данных формы, если необходимо
  //   console.log("Додав")
  // };

  return (
    <div className={classes.container}>
      <div className={classes.btn} id="mybtn" onClick={openModal}>
        <p>{name}</p>
      </div>
      {showModal && (
        <div
          id="myModal"
          className={`${classes.show} ${classes.modal} `}
          onClick={handleOutsideClick}
        >
          <div className={classes.modalcontent}>
            <div className={classes.flex}>
              <h2>Product Create </h2>
              <span className={classes.close} onClick={closeModal}>
                &times;
              </span>
            </div>
            <hr style={{ margin: "0px" }} />
            <form
              action="http://localhost:5000/admin/createProduct"
              method="post"
              className={classes.forma}
              // onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className={classes.allinfo}>
                <div className={classes.inputBox}>
                  <input type="text" name="name" placeholder="Name" />
                  <i></i>
                </div>
                <div className={classes.inputBox}>
                  <input type="number" name="price" placeholder="Price" />
                  <i></i>
                </div>
                <div className={classes.inputBox}>
                  <input type="title" name="title" placeholder="Title" />
                  <i></i>
                </div>
                <div className={classes.inputBox}>
                  <input
                    type="text"
                    name="description"
                    placeholder="Desciption"
                  />
                  <i></i>
                </div>
                <div className={classes.inputBox}>
                  <input type="number" name="inStock" placeholder="In Stock" />
                  <i></i>
                </div>
              </div>
              <div className="infoimg">
                <div className={classes.imgin}>
                  <span className={classes.browse}>
                    Click For Browse Images
                  </span>
                  <input
                    style={{ opacity: "0", cursor: "pointer" }}
                    type="file"
                    id="inputimg"
                    name="images"
                    accept="image/jpeg, image/x-png"
                    placeholder="Select file"
                    multiple
                    onChange={handleFileChange}
                  />
                  <p>Images: {fileCount}</p>
                </div>
              </div>
              <div className="infoselect">
                <div className={classes.inputBox}>
                  <span>Type</span>
                  <select name="typeId" className={classes.select}>
                    <option id="1">1</option>
                    <option>Ліжко</option>
                    <option>Крісло</option>
                    <option>Комод</option>
                    <option>Шафа</option>
                    <option>Кухня</option>
                  </select>
                </div>
                <div className={classes.inputBox}>
                  <span>Brand</span>
                  <select name="brandId" className={classes.select}>
                    <option id="1">1</option>
                    <option>Ліжко</option>
                    <option>Крісло</option>
                    <option>Комод</option>
                    <option>Шафа</option>
                    <option>Кухня</option>
                  </select>
                </div>
              </div>

              <input
                type="submit"
                className={classes.addtodb}
                value="Add to DB"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
