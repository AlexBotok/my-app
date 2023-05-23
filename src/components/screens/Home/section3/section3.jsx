import classes from "./section3.module.css";
import Section3Categories from "./categories/section3Categories.jsx";
import withTranslation from "../../../../i18next/withTranslation.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import Section3Goods from "./goods/section3Goods";
const Section3 = ({ t }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
  };
  const propsSection3Categories = {
    1: { id: "divani", name: t("t12"), url: "/sofas" },
    2: { id: "lijka", name: t("t13"), url: "/beds" },
    3: { id: "krisla", name: t("t14"), url: "/chairs" },
    4: { id: "komodi", name: t("t17"), url: "/chests" },
    5: { id: "shafi", name: t("t15"), url: "/wardrobes" },
    6: { id: "kuhnia", name: t("t16"), url: "/kitchens" },
  };
  const propsSection3CategoriesHovered = {
    onCardHover: handleCardHover,
    onCardMouseLeave: handleCardMouseLeave,
    hoveredCard: hoveredCard,
  };

  const propsSection3Goods = {
    1: {
      name: t("l5"),
      price: "8 999",
      img: "/img/bedRamona.svg",
      id: "2",
      index: "1",
    },
    2: {
      name: t("l6"),
      price: "8 999",
      newprice: "7 999",
      img: "/img/bedChester.svg",
      id: "1",
      index: "2",
    },
    3: {
      name: t("l7"),
      price: "8 999",
      img: "/img/bedVeneziaLuxe.svg",
      index: "3",
    },
    4: {
      name: t("l8"),
      price: "8 999",
      img: "/img/bedEmpire.svg",
      id: "2",
      index: "4",
    },
    5: {
      name: t("l9"),
      price: "8 999",
      img: "/img/bedAdele.svg",
      id: "2",
      index: "5",
    },
    6: {
      name: t("l10"),
      price: "8 999",
      newprice: "7 999",
      img: "/img/bedAtlant.svg",
      id: "1",
      index: "6",
    },
  };

  const returnSection3Goods = () => {
    return Object.keys(propsSection3Goods).map((key) => {
      return <Section3Goods key={key} {...propsSection3Goods[key]} />;
    });
  };
  const returnSection3Categories = () => {
    return Object.keys(propsSection3Goods).map((key) => {
      return (
        <Section3Categories
          key={key}
          {...propsSection3Categories[key]}
          {...propsSection3CategoriesHovered}
        />
      );
    });
  };
  return (
    <div className={classes.container}>
      <div className={classes.sect4}>
        <div className={classes.sect4_1}>
          <div className={classes.rect3}></div>
          <p>{t("t29")}</p>
        </div>
        <div className={classes.sect4_2}>{returnSection3Categories()}</div>
        <div className={classes.sect4__2}>{returnSection3Goods()}</div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className={classes.sect4__2_1}>
            <p>{t("t27")}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default withTranslation(Section3);
