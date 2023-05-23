import classes from "./section3.module.css";
import Section3Categories from "./categories/section3Categories.jsx";
import withTranslation from "../../../../i18next/withTranslation.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import Section3_goods_card from "./goods/section3Goods";
const Section3 = ({ t }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className={classes.container}>
      <div className={classes.sect4}>
        <div className={classes.sect4_1}>
          <div className={classes.rect3}></div>
          <p>{t("t29")}</p>
        </div>
        <div className={classes.sect4_2}>
          <Section3Categories
            id="divani"
            name={t("t12")}
            url={`/sofas?language=${localStorage.getItem("language")}`}
            onCardHover={handleCardHover}
            onCardMouseLeave={handleCardMouseLeave}
            hoveredCard={hoveredCard}
          />
          <Section3Categories
            id="lijka"
            name={t("t13")}
            url={`/beds?language=${localStorage.getItem("language")}`}
            onCardHover={handleCardHover}
            onCardMouseLeave={handleCardMouseLeave}
            hoveredCard={hoveredCard}
          />
          <Section3Categories
            id="krisla"
            name={t("t14")}
            url={`/chairs?language=${localStorage.getItem("language")}`}
            onCardHover={handleCardHover}
            onCardMouseLeave={handleCardMouseLeave}
            hoveredCard={hoveredCard}
          />
          <Section3Categories
            id="komodi"
            name={t("t17")}
            url={`/chests?language=${localStorage.getItem("language")}`}
            onCardHover={handleCardHover}
            onCardMouseLeave={handleCardMouseLeave}
            hoveredCard={hoveredCard}
          />
          <Section3Categories
            id="shafi"
            name={t("t15")}
            url={`/wardrobes?language=${localStorage.getItem("language")}`}
            onCardHover={handleCardHover}
            onCardMouseLeave={handleCardMouseLeave}
            hoveredCard={hoveredCard}
          />
          <Section3Categories
            id="kuhnia"
            name={t("t16")}
            url={`/kitchens?language=${localStorage.getItem("language")}`}
            onCardHover={handleCardHover}
            onCardMouseLeave={handleCardMouseLeave}
            hoveredCard={hoveredCard}
          />
        </div>
        <div className={classes.sect4__2}>
          <Section3_goods_card
            name={t("l5")}
            price="8&nbsp;999"
            img="/img/bedRamona.svg"
            id="2"
            index="1"
          />
          <Section3_goods_card
            name={t("l6")}
            price="8&nbsp;999"
            newprice="7&nbsp;999"
            img="/img/bedChester.svg"
            id="1"
            index="2"
          />
          <Section3_goods_card
            name={t("l7")}
            price="8&nbsp;999"
            img="/img/bedVeneziaLuxe.svg"
            index="3"
          />
          <Section3_goods_card
            name={t("l8")}
            price="8&nbsp;999"
            img="/img/bedEmpire.svg"
            id="2"
            index="4"
          />
          <Section3_goods_card
            name={t("l9")}
            price="8&nbsp;999"
            img="/img/bedAdele.svg"
            index="5"
          />
          <Section3_goods_card
            name={t("l10")}
            price="8&nbsp;999"
            newprice="7&nbsp;999"
            img="/img/bedAtlant.svg"
            id="1"
            index="6"
          />
        </div>
        <Link to={`/?language=${localStorage.getItem("language")}`} style={{ textDecoration: "none" }}>
          <div className={classes.sect4__2_1}>
            <p>{t("t27")}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default withTranslation(Section3);
