import classes from "./Section.module.css";
import withTranslation from "../../../../withTranslation.js";
import {
  MyButtonLeft,
  MyButtonRight,
  MyButtonNone,
} from "../../../UI/button/MyButton";
import Slider from "react-slick";
const settings = {
  autoplay: false,
  infinite: true,
  dots: true,
  speed: 300,
  width: 586,
  autoplaySpeed: 2000,
  slidesToShow: 3, // Отображение слайдов
  slidesToScroll: 1,
  nextArrow: <MyButtonRight id="2" />, // Передача компонента кнопки "вправо"
  prevArrow: <MyButtonLeft id="2" />, // Передача компонента кнопки "влево"
  responsive: [
    {
      breakpoint: 768, // При ширине экрана меньше 768px
      settings: {
        slidesToShow: 1, // Отображение 1 слайда
        nextArrow: <MyButtonNone />, // Убрать кнопку "вправо"
        prevArrow: <MyButtonNone />,
        centerMode: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
const Section2 = ({ t }) => {
  return (
    <div className={classes.container}>
      <div className={classes.sect2_1}>
        <div className={classes.sect2}>
          <div className={classes.rect3}></div>
          <p>{t("t5")}</p>
        </div>
      </div>
      <div className={classes.sect3}>
        <Slider {...settings}>
          <div className={classes.sect3_1}>
            <img src="/img/perevagi1.png" alt="perevagi1" />
            <p>{t("t6")}</p>
          </div>
          <div className={classes.sect3_1_1}>
            <img src="/img/perevagi2.png" alt="perevagi2" />
            <div className={classes.slidet7}>
              <p>{t("t7")}</p>
              <h6 className={classes.sect3_1p}>{t("t8")}</h6>
            </div>
          </div>
          <div className={classes.sect3_1_2}>
            <img src="/img/perevagi3.png" alt="perevagi3" />
            <p>{t("t9")}</p>
          </div>
          <div className={classes.sect3_1}>
            <img src="/img/perevagi5.png" alt="perevagi5" />
            <p>{t("t10")}</p>
          </div>
          <div className={classes.sect3_1}>
            <img src="/img/team.png" alt="team" />
            <p>{t("t11")}</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default withTranslation(Section2);
