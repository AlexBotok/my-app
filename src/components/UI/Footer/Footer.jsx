import classes from "./Footer.module.css";
import Switch from "../Switch/Switch";
import withTranslation from "../../../withTranslation.js";
import { Link } from "react-router-dom";
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
              <Link to="/sofas" className={classes.katalog}>
                <li>— {t("t12")}</li>
              </Link>
              <Link to="/beds" className={classes.katalog}>
                <li>— {t("t13")}</li>
              </Link>
              <Link to="/chairs" className={classes.katalog}>
                <li>— {t("t14")}</li>
              </Link>
              <Link to="/wardrobes" className={classes.katalog}>
                <li>— {t("t15")}</li>
              </Link>
              <Link to="/kitchens" className={classes.katalog}>
                <li>— {t("t16")}</li>
              </Link>
              <Link to="/chests" className={classes.katalog}>
                <li>— {t("t17")}</li>
              </Link>
            </ul>
            <ul className={classes.katalog2}>
              <Link to="/#" className={classes.katalog}>
                <li>— {t("t18")}</li>
              </Link>
              <Link to="/#" className={classes.katalog}>
                <li>— {t("t19")}</li>
              </Link>
              <Link to="/#" className={classes.katalog}>
                <li>— {t("t20")}</li>
              </Link>
              <Link to="/#" className={classes.katalog}>
                <li>— {t("t21")}</li>
              </Link>
            </ul>
            <ul className={classes.katalog3}>
              <Link to="/#" className={classes.katalog3_1}>
                <li>
                  <img src="./img/map.svg" alt="map" />
                  <p>TEST</p>
                </li>
              </Link>
              <Link to="/#" className={classes.katalog3_1}>
                <li>
                  <img src="./img/calendar.svg" alt="calendar" />
                  <p>{t("t22")}</p>
                </li>
              </Link>
              <Link to="/#" className={classes.katalog3_2}>
                <li>
                  <img src="./img/smartphone 1.svg" alt="smartphone" />
                  <div>
                    <p>(099) 111 22 33</p>
                    <p>(099) 222 33 44</p>
                  </div>
                </li>
              </Link>
              <div className={classes.socialocki}>
                <p>{t("t1")}</p>
                <div className={classes.socialocki_1}>
                  <Link
                    to="https://t.me/bot4ka"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "0px" }}
                  >
                    <img src="./img/Telegram1.svg" alt="Telegram" />
                  </Link>
                  <Link
                    to="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="./img/Facebook1.svg" alt="Facebook" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/bot4ka/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="./img/Instagram1.svg" alt="Instagram" />
                  </Link>
                </div>
              </div>
            </ul>
          </div>
          <Switch />
          <p className={classes.tob}>{t("tob")}</p>
        </div>
      </div>
    </footer>
  );
};

export default withTranslation(Footer);
