import classes from "./filterComponentBrands.module.css";
import anime from "animejs/lib/anime.es.js";
import { buttondown1 } from "../../../svgComponent/svg";
import { useRef, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { apiSofas } from "../../../../services/apiServices.js";

const FilterComponentBrands = ({ brands, lengthFilter }) => {
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);
  const elRef = useRef(null);
  const el = elRef.current;
  const [searchParams, setSearchParams] = useSearchParams();
  const loc = useLocation();
  const brandsParam = searchParams.get("brands");
  const buttonSvgRotate = () => {
    if (click === false) {
      setClick(true);
      anime({ targets: el, rotateZ: "90deg", easing: "easeOutExpo" });
    } else {
      setClick(false);
      anime({ targets: el, rotateZ: "0deg", easing: "easeOutExpo" });
    }
  };

  const Brands = () => {
    const selectedBrands = brandsParam ? brandsParam.split(",") : [];

    return brands.map((item, key) => {
      const isChecked = selectedBrands.includes(item.brandName);

      return (
        <div className={classes.filflex1} key={key}>
          <div className={classes.category}>
            <p className={classes.brand + classes.unselectable}>
              {item.brandName}
            </p>
            <input
              className={classes.checkbox}
              type="checkbox"
              checked={isChecked}
              onChange={() => handleNav(item.brandName)}
            />
          </div>
        </div>
      );
    });
  };

  const handleNav = (brandName) => {
    const languageParam = searchParams.get("language");
    const priceParam = searchParams.get("price");
    const type = searchParams.get("type");
    let updatedBrands = [];
    if (brandsParam) {
      updatedBrands = brandsParam.split(",");
    }
    const brandsSet = new Set(updatedBrands);
    if (brandsSet.has(brandName)) {
      brandsSet.delete(brandName);
    } else {
      brandsSet.add(brandName);
    }
    let params = {};
    params.type = "Дивани";
    apiSofas
      .getApiData()
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    if (brandsSet.size > 0) {
      params.brands = Array.from(brandsSet).join(",");
    } else {
      params = {};
    }
    if (priceParam) {
      params.price = priceParam;
    }
    if (languageParam) {
      params.language = languageParam;
    }
    setSearchParams(params, { replace: true });
  };

  return (
    <div
      className={classes.filter1}
      style={
        click ? { height: `${lengthFilter * 30 + 35}px` } : { height: "35px" }
      }
    >
      <div className={classes.filflex} onClick={buttonSvgRotate}>
        <p className={classes.unselectable}>Виробник</p>
        <div ref={elRef}>
          <svg className={classes.filtersvg}>
            <use href="#buttondown1">{buttondown1()}</use>
          </svg>
        </div>
      </div>
      {Brands()}
    </div>
  );
};

export default FilterComponentBrands;
