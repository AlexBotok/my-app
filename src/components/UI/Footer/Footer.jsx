import classes from "./Footer.module.css";
import Switch from "../Switch/Switch";
import withTranslation from "../../../withTranslation.js";
const Footer = ({ t }) => {
  return (
    <footer className={classes.footer} id="footer">
      <div className={classes.container}>
        <div className={classes.footercontent}>
          <div className={classes.header_2_2_footer}>
            <img src="./img/FLogoWhite.svg" alt="FLogo" />
            <p>Furniture</p>
          </div>
          <div className={classes.footer_2_2}>
            <ul className={classes.katalog1}>
              <a href="/sofas" className={classes.katalog}>
                <li>— {t("t12")}</li>
              </a>
              <a href="/#" className={classes.katalog}>
                <li>— {t("t13")}</li>
              </a>
              <a href="/#" className={classes.katalog}>
                <li>— {t("t14")}</li>
              </a>
              <a href="/#" className={classes.katalog}>
                <li>— {t("t15")}</li>
              </a>
              <a href="/#" className={classes.katalog}>
                <li>— {t("t16")}</li>
              </a>
              <a href="/#" className={classes.katalog}>
                <li>— {t("t17")}</li>
              </a>
            </ul>
            <ul className={classes.katalog2}>
              <a href="/#" className={classes.katalog}>
                <li>— {t("t18")}</li>
              </a>
              <a href="/#" className={classes.katalog}>
                <li>— {t("t19")}</li>
              </a>
              <a href="/#" className={classes.katalog}>
                <li>— {t("t20")}</li>
              </a>
              <a href="/#" className={classes.katalog}>
                <li>— {t("t21")}</li>
              </a>
            </ul>
            <ul className={classes.katalog3}>
              <a href="/#" className={classes.katalog3_1}>
                <li>
                  <img src="./img/map.svg" alt="map" />
                  <p>TEST</p>
                </li>
              </a>
              <a href="/#" className={classes.katalog3_1}>
                <li>
                  <img src="./img/calendar.svg" alt="calendar" />
                  <p>{t("t22")}</p>
                </li>
              </a>
              <a href="/#" className={classes.katalog3_2}>
                <li>
                  <img src="./img/smartphone 1.svg" alt="smartphone" />
                  <div>
                    <p>(099) 111 22 33</p>
                    <p>(099) 222 33 44</p>
                  </div>
                </li>
              </a>
              <div className={classes.socialocki}>
                <p>{t("t1")}</p>
                <div className={classes.socialocki_1}>
                  <img
                    src="./img/Telegram1.svg"
                    alt="Telegram"
                    style={{ marginLeft: "0px" }}
                  />
                  <img src="./img/Facebook1.svg" alt="Facebook" />
                  <img src="./img/Instagram1.svg" alt="Instagram" />
                </div>
              </div>
            </ul>
          </div>
          <Switch/>
          <p className={classes.tob}>{t("tob")}</p>
        </div>
      </div>
    </footer>
  );
};

export default withTranslation(Footer);
