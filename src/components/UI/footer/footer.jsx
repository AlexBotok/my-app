import classes from "./footer.module.css";
import Switch from "../switchLanguage/switchLanguage";
import withTranslation from "../../../i18next/withTranslation.js";
import { Link } from "react-router-dom";
const Footer = ({ t }) => {
  return (
    <footer className={classes.footer} id="footer">
      <div className={classes.container}>
        <div className={classes.footercontent}>
          <div className={classes.header_2_2_footer}>
            <img src="/img/furnitureLogoWhite.svg" alt="FLogo" />
            <p>
              <span>F</span>urniture
            </p>
          </div>
          <div className={classes.footer_2_2}>
            <ul className={classes.katalog1}>
              <li className={classes.katalog}>
                <Link to="/sofas" className={classes.link}>
                  — {t("t12")}
                </Link>
              </li>

              <li className={classes.katalog}>
                <Link to="/beds" className={classes.link}>
                  — {t("t13")}
                </Link>
              </li>

              <li className={classes.katalog}>
                <Link to="/chairs" className={classes.link}>
                  — {t("t14")}
                </Link>
              </li>

              <li className={classes.katalog}>
                <Link to="/wardrobes" className={classes.link}>
                  — {t("t15")}
                </Link>
              </li>

              <li className={classes.katalog}>
                <Link to="/kitchens" className={classes.link}>
                  — {t("t16")}
                </Link>
              </li>

              <li className={classes.katalog}>
                <Link to="/chests" className={classes.link}>
                  — {t("t17")}
                </Link>
              </li>
            </ul>
            <ul className={classes.katalog2}>
              <li className={classes.katalog}>
                <Link to="/" className={classes.link}>
                  — {t("t18")}
                </Link>
              </li>

              <li className={classes.katalog}>
                <Link to="/" className={classes.link}>
                  — {t("t19")}
                </Link>
              </li>

              <li className={classes.katalog}>
                <Link to="/" className={classes.link}>
                  — {t("t20")}
                </Link>
              </li>

              <li className={classes.katalog}>
                <Link to="/" className={classes.link}>
                  — {t("t21")}
                </Link>
              </li>
            </ul>
            <ul className={classes.katalog3}>
              <li className={classes.katalog3_1}>
                <Link to="/" className={classes.link}>
                  <img src="/img/mapLocation.svg" alt="map" />
                  <p>TEST</p>
                </Link>
              </li>

              <li className={classes.katalog3_1}>
                <Link to="/" className={classes.link}>
                  <img src="/img/calendarFooter.svg" alt="calendar" />
                  <p>{t("t22")}</p>
                </Link>
              </li>

              <li className={classes.katalog3_2}>
                <img src="/img/phoneGreen.svg" alt="smartphone" />
                <div>
                  <Link to="tel:+380682735499" className={classes.link1}>
                    <p>(099) 111 22 33</p>
                  </Link>
                  <Link to="tel:+380682735499" className={classes.link1}>
                    <p>(099) 222 33 44</p>
                  </Link>
                </div>
              </li>
              <div className={classes.socialocki}>
                <p>{t("t1")}</p>
                <div className={classes.socialocki_1}>
                  <Link
                    to="https://t.me/bot4ka"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "0px" }}
                  >
                    <img src="/img/telegramWhite.svg" alt="Telegram" />
                  </Link>
                  <Link
                    to="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/facebookWhite.svg" alt="Facebook" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/bot4ka/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/img/instagramWhite.svg" alt="Instagram" />
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
