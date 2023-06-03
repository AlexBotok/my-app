import classes from "./filterComponentPrice.module.css";
import { buttondown1 } from "../../../svgComponent/svg";
import { useRef, useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { useSearchParams, useLocation } from "react-router-dom";

const FilterComponentPrice = ({ maxPrice, minPrice }) => {
  const [click, setClick] = useState(false);
  const [maxValue, setMaxValue] = useState("");
  const [minValue, setMinValue] = useState("");
  const elRef = useRef(null);
  const el = elRef.current;
  const [searchParams, setSearchParams] = useSearchParams();
  const loc = useLocation();
  const priceParam = searchParams.get("price");
  const buttonSvgRotate = () => {
    if (click === false) {
      setClick(true);
      anime({ targets: el, rotateZ: "90deg", easing: "easeOutExpo" });
    } else {
      setClick(false);
      anime({ targets: el, rotateZ: "0deg", easing: "easeOutExpo" });
    }
  };

  const maxValueHandler = (e) => {
    if (e.target.value > maxPrice) {
      e.target.value = maxPrice;
    }
    setMaxValue(e.target.value);
  };
  const minValueHandler = (e) => {
    if (e.target.value > maxPrice) {
      e.target.value = maxPrice;
    }
    setMinValue(e.target.value);
  };

  useEffect(() => {
    const selectedPrice = priceParam ? priceParam.split("-") : [];
    if (selectedPrice.length === 2) {
      setMaxValue(selectedPrice[1]);
      setMinValue(selectedPrice[0]);
    }
  }, [searchParams]);

  const Price = () => {
    return (
      <div className={classes.priceComp}>
        <div className={classes.priceInputs}>
          <input
            className={classes.priceInput}
            placeholder={minPrice}
            value={minValue}
            onChange={minValueHandler}
            type="number"
          />
          <span aria-hidden="true"> — </span>
          <input
            className={classes.priceInput}
            placeholder={maxPrice}
            value={maxValue}
            onChange={maxValueHandler}
            type="number"
          />
          <button
            className={classes.priceButton}
            onClick={() => setUrlPrice(maxValue, minValue)}
          >
            OK
          </button>
        </div>
        {/* <input type="range" min={minPrice} max={maxPrice} onChange={setMinValue}/>
        <div className={classes.sliderWrapper}>
          <div className={classes.slider}>
            <div className={classes.sliderRange}>
              <div className={classes.sliderRangeSpace}></div>
            </div>
            <button
              }}
              className={classes.buttonSlider}
              style={{ left: "0%", marginLeft: "-24px" }}
            ></button>
            <button
              className={classes.buttonSlider}
              style={{ left: "100%" }}
            ></button>
          </div>
        </div> */}
      </div>
    );
  };

  const setUrlPrice = (maxValue, minValue) => {
    console.log(maxValue, minValue);
    const brandsParam = searchParams.get("brands");
    const languageParam = searchParams.get("language");
    let params = {};
    if (brandsParam) {
      params.brands = brandsParam;
    }
    if (maxValue !== "" && minValue !== "") {
      params.price = `${minValue}` + "-" + `${maxValue}`;
    }
    if (languageParam) {
      params.language = languageParam;
    }
    setSearchParams(params);
    window.location.reload(loc.pathname + "?" + searchParams.toString());
  };

  return (
    <div
      className={classes.filter1}
      style={click ? { height: `${40 + 35}px` } : { height: "35px" }}
    >
      <div className={classes.filflex} onClick={buttonSvgRotate}>
        <p className={classes.unselectable}>Ціна</p>
        <div ref={elRef}>
          <svg className={classes.filtersvg}>
            <use href="#buttondown1">{buttondown1()}</use>
          </svg>
        </div>
      </div>
      {Price()}
    </div>
  );
};

export default FilterComponentPrice;