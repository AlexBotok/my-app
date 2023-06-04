import classes from "./filters.module.css";
import { filtersvg } from "../svgComponent/svg";
import FilterComponentBrands from "./filterComponents/brands/filterComponentBrands";
import FilterComponentPrice from "./filterComponents/price/filterComponentPrice";
import {apiServices} from "../../services/apiServices";
import { useEffect, useState } from "react";
const Filters = ({maxPrice, minPrice}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    apiServices
      .getApiData()
      .then((data) => {
        setData(data);
        setIsLoading(true);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const mapFilters = () => {
    if (isLoading) {
      for (let i = 0; i < data[0].length; i++) {
        return (
          <div>
            <FilterComponentBrands
              brands={data[0]}
              lengthFilter={data[0].length}
            />
            <FilterComponentPrice maxPrice={maxPrice} minPrice={minPrice} />
          </div>
        );
      }
    }
  };

  return (
    <div className={classes.filter}>
      <div className={classes.filterosnova}>
        <p>Фільтри</p>
        <svg className={classes.filtersvg}>
          <use href="#filtersvg">{filtersvg()}</use>
        </svg>
      </div>
      <div className={classes.linef1}></div>
      {isLoading ? mapFilters() : <div>Loading...</div>}
    </div>
  );
};

export default Filters;
