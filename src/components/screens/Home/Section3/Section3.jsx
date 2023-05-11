import classes from "./Section3.module.css";
import Section3_card from "./Section3_card.jsx";
import withTranslation from "../../../../withTranslation.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import Section3_goods_card from "./Section3_goods_card";
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
          <Section3_card
            id="divani"
            name={t("t12")}
            url="/sofas"
            onCardHover={handleCardHover}
            onCardMouseLeave={handleCardMouseLeave}
            hoveredCard={hoveredCard}
          />
          <Section3_card
            id="lijka"
            name={t("t13")}
            url="/beds"
            onCardHover={handleCardHover}
            onCardMouseLeave={handleCardMouseLeave}
            hoveredCard={hoveredCard}
          />
          <Section3_card
            id="krisla"
            name={t("t14")}
            url="/chairs"
            onCardHover={handleCardHover}
            onCardMouseLeave={handleCardMouseLeave}
            hoveredCard={hoveredCard}
          />
          <Section3_card
            id="komodi"
            name={t("t17")}
            url="/chests"
            onCardHover={handleCardHover}
            onCardMouseLeave={handleCardMouseLeave}
            hoveredCard={hoveredCard}
          />
          <Section3_card
            id="shafi"
            name={t("t15")}
            url="/wardrobes"
            onCardHover={handleCardHover}
            onCardMouseLeave={handleCardMouseLeave}
            hoveredCard={hoveredCard}
          />
          <Section3_card
            id="kuhnia"
            name={t("t16")}
            url="/kitchens"
            onCardHover={handleCardHover}
            onCardMouseLeave={handleCardMouseLeave}
            hoveredCard={hoveredCard}
          />
        </div>
        <div className={classes.sect4__2}>
          <Section3_goods_card
            name={t("l5")}
            price="8&nbsp;999"
            img="/img/lijkoramona.svg"
            id="2"
          />
          <Section3_goods_card
            name={t("l6")}
            price="8&nbsp;999"
            newprice="7&nbsp;999"
            img="/img/lijkochester.svg"
            id="1"
          />
          <Section3_goods_card
            name={t("l7")}
            price="8&nbsp;999"
            img="/img/lijkotiajkiluxe.svg"
          />
          <Section3_goods_card
            name={t("l8")}
            price="8&nbsp;999"
            img="/img/lijkoukraine.svg"
            id="2"
          />
          <Section3_goods_card
            name={t("l9")}
            price="8&nbsp;999"
            img="/img/lijkoadele.svg"
          />
          <Section3_goods_card
            name={t("l10")}
            price="8&nbsp;999"
            newprice="7&nbsp;999"
            img="/img/lijkoatlant.svg"
            id="1"
          />
        </div>
        <Link to="/#" style={{ textDecoration: "none" }}>
          <div className={classes.sect4__2_1}>
            <p>{t("t27")}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default withTranslation(Section3);
