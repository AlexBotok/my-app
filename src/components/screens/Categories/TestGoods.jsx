import React from "react";
import classes from "./TestGoods.module.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  MyButtonLeft,
  MyButtonRight,
  MyButtonNone,
} from "../../UI/button/MyButton";

const TestGoods = ({ name, price, img, id }) => {
  const settings = {
    autoplay: true,
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

  const slider = () => {
    console.log("penis", img);
    if (Array.isArray(img)) {
      return (
        <Slider {...settings}>
          {img.map((image) => (
            <div className={classes.imageproduct} key={image}>
              <img
                className={classes.imageproduct}
                src={`http://localhost:5000/${image}`}
                alt=""
              />
            </div>
          ))}
        </Slider>
      );
    }
    return null;
  };

  return (
    <Link
      to={`/beds/?language=${localStorage.getItem("language")}`}
      className={classes.link}
    >
      <div className={classes.sect3_all}>
        <div className={classes.sect3_1}>{slider()}</div>
        <div className={classes.sect3_2}>
          <p className={classes.name}>{name}</p>
          <p className={classes.price}>{price} ГРН</p>
        </div>
      </div>
    </Link>
  );
};

export default TestGoods;
