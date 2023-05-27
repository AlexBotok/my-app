import { MyButtonLeft, MyButtonRight, MyButtonNone } from "../button/MyButton";

const sliderSettings = (slidesToShow, slidesToShowBreakpoint, dots) => {
  return {
    autoplay: false,
    infinite: true,
    dots: dots,
    speed: 300,
    width: 586,
    autoplaySpeed: 2000,
    slidesToShow: slidesToShow,
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
          slidesToShow: slidesToShowBreakpoint,
        },
      },
    ],
  };
};

export default sliderSettings;
