import classes from "./section5.module.css";
import withTranslation from "../../../../i18next/withTranslation.js";
import { Link } from "react-router-dom";
const Section5 = ({ t }) => {
  return (
    <div className={classes.container}>
      <div className={classes.sect6}>
        <div className={classes.sect6_1}>
          <div className={classes.sect4_16}>
            <div className={classes.rect3}></div>
            <p>{t("t30")}</p>
          </div>
        </div>
        <div className={classes.sect6_2}>
          <img
            src="/img/section5Image.png"
            alt="Kvartirka"
            className={classes.sect6img}
          />
          <div className={classes.sect6_4}>
            <div className={classes.sect6_palkag}></div>
            <div className={classes.windowkons}>
              <p className={classes.wind_1}>{t("t31")}</p>
              <form className={classes.form1}>
                <input
                  type="text"
                  id="namew"
                  placeholder={t("t35")}
                  className={classes.namew}
                />
              </form>
              <form className={classes.form1}>
                <input
                  type="text"
                  id="namew"
                  placeholder={t("t36")}
                  className={classes.namew}
                />
              </form>
              <button className={classes.btn6}>{t("t32")}</button>
              <p className={classes.zaiavka}>
                {t("t33")}
                <Link
                  to="tel:+380991112233"
                  className={classes.zaiavkanomer}
                  style={{ textDecoration: "none" }}
                >
                  (099) 111 22 33
                </Link>
                , {t("t34")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(Section5);
