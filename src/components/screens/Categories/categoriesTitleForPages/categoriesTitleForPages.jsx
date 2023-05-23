import classes from "./categoriesTitleForPages.module.css";
import Header from "../../../UI/header/header";
import Footer from "../../../UI/footer/footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  MyButtonLeft,
  MyButtonRight,
  MyButtonNone,
} from "../../../UI/button/MyButton";
import CartButton from "../../../UI/cartButton/cartButton";

const CategoriesTitleForPages = ({ name, typeId, link }) => {
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
      });
  }, []);

  const renderProducts = () => {
    if (data && data[1] && data[1][0] && data[1][0].products) {
      for (let i = 0; i < data[1].length; i++) {
        if (data[1][i].id == typeId) {
          return data[1][i].products
            .filter((product) => product.typeId == typeId)
            .map((product) => (
              // console.log(product.images),
              <div className={classes.goods1} key={product.id}>
                <Link
                  to={`/${link}/${product.id}`}
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
                  <div className={classes.titleproduct}>{product.title}</div>
                </Link>
                <CartButton id={product.id} inStock={product.inStock} />
              </div>
            ));
        }
      }
    }
    return null;
  };

  return (
    <div className={classes.wrapper}>
      <header style={{ margin: "0 auto" }}>
        <div className={classes.container}>
          <Header />
        </div>
        <hr />
        <div className={classes.container}>
          <h1 className={classes.title}>{name}</h1>
        </div>
        <hr />
      </header>
      <main>
        <div className={classes.container}>
          <div className={classes.productsofa}>{renderProducts()}</div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CategoriesTitleForPages;
