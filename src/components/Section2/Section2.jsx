import React from "react";
import classes from "./Section.module.css";
import { MyButtonLeft, MyButtonRight } from "../UI/button/MyButton";
import Slider from "react-slick";
const Section2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Отображение 3 слайдов
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 650, // При ширине экрана меньше 768px
        settings: {
          slidesToShow: 1, // Отображение 1 слайда
        },
      },
      // {
      //   breakpoint: 1699, // При ширине экрана меньше 768px
      //   settings: {
      //     slidesToShow: 2, // Отображение 1 слайда
      //   },
      // }
    ],
    nextArrow: <MyButtonRight id="2"/>, // Передача компонента кнопки "вправо"
    prevArrow: <MyButtonLeft id="2"/>, // Передача компонента кнопки "влево"
  };
  return (
    <div className={classes.container}>
      <div className={classes.sect2_1}>
        <div className={classes.sect2}>
          <div className={classes.rect3}></div>
          <p>Наші переваги</p>
        </div>
      </div>
      <div className={classes.sect3}>
        <Slider {...settings}>
          <div className={classes.sect3_1} style={{display:"flex"}}>
            <img src="/img/perevagi1.png" alt="perevagi1" />
            <div className={classes.rect4}></div>
            <p>Меблі преміум класу</p>
          </div>
          <div className={classes.sect3_1_1} style={{display:"flex"}}>
            <img src="/img/perevagi2.png" alt="perevagi2" />
            <p>Надійність</p>
            <h6 className={classes.sect3_1p}>
              За 14 років на ринку меблів для дому ми стали надійними партнерами
              на ринку Вінницької області та України
            </h6>
          </div>
          <div className={classes.sect3_1_2} style={{display:"flex"}}>
            <img src="/img/perevagi3.png" alt="perevagi3" />
            <p>Безкоштовна доставка</p>
          </div>
          <div className={classes.sect3_1} style={{display:"flex"}}>
            <img src="/img/perevagi5.png" alt="perevagi5" />
            <div className={classes.rect4}></div>
            <p>Низькі ціни</p>
          </div>
          <div className={classes.sect3_1} style={{display:"flex"}}>
            <img src="/img/team.png" alt="team" />
            <div className={classes.rect4}></div>
            <p>Професійний підхід</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Section2;
