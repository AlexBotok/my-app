import classes from "./section2.module.css";
import withTranslation from "../../../../i18next/withTranslation.js";
import Slider from "react-slick";
import sliderSettings from "../../../UI/scripts/sliderSettings";

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
        <Slider key="slider" {...sliderSettings(3,2,true)}>
          <div className={classes.sect3_1}>
            <img src="/img/section2FurniturePremium.png" alt="perevagi1" />
            <p>{t("t6")}</p>
          </div>
          <div className={classes.sect3_1_1}>
            <img src="/img/section2Reliability.png" alt="perevagi2" />
            <div className={classes.slidet7}>
              <p>{t("t7")}</p>
              <h6 className={classes.sect3_1p}>{t("t8")}</h6>
            </div>
          </div>
          <div className={classes.sect3_1_2}>
            <img src="/img/section2Shipping.png" alt="perevagi3" />
            <p>{t("t9")}</p>
          </div>
          <div className={classes.sect3_1}>
            <img src="/img/section2LowPrices.png" alt="perevagi5" />
            <p>{t("t10")}</p>
          </div>
          <div className={classes.sect3_1}>
            <img src="/img/section2Team.png" alt="team" />
            <p>{t("t11")}</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default withTranslation(Section2);
