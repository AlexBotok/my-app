import classes from "./header.module.css";
import DownArrow from "../hoverDownArrow/hoverDownArrow";
import withTranslation from "../../../i18next/withTranslation.js";
import { Link } from "react-router-dom";
import { profile } from "../svgComponent/svg";
import ModalCart from "../../screens/Cart/modalCart/modalCart";
import List from "../list/list";
const Header = ({ t }) => {
  const clickbtnopen = () => {
    const menu = document.getElementById("menushkaid");
    menu.classList.add(classes.add);
  };
  const clickbtnclose = () => {
    const menu = document.getElementById("menushkaid");
    menu.classList.remove(classes.add);
  };
  return (
    <header className={classes.header} id="header">
      <div className={classes.container}>
        <div className={classes.header_1}>
          <div className={classes.header_flex_dir}>
            <div className={classes.header_1_1}>
              <p>{t("t1")}</p>
              <Link to="https://t.me/bot4ka" target="_blank" rel="noreferrer">
                <img src="/img/telegramBlack.svg" alt="Telegram" />
              </Link>
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/facebookBlack.svg" alt="Facebook" />
              </Link>
              <Link
                to="https://www.instagram.com/bot4ka/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/instagramBlack.svg" alt="Instagram" />
              </Link>
              <Link to="tel:+380682735499">
                <img
                  src="/img/phoneBlack.svg"
                  alt="Smartphone"
                  className={classes.header_bottomimg}
                />
              </Link>
              <Link to="tel:+380682735499">
                <p>(068) 273 54 99</p>
              </Link>
              <div className={classes.downarrow}>
                <DownArrow value="1"></DownArrow>
              </div>

              <ul className={classes.hov_menu1} id="hov_menu1">
                <li>{t("t26")}</li>
              </ul>
            </div>
            <div className={classes.header_1_2}>
              <ul className={classes.header_1_2_1}>
                <li>
                  <Link to="/" className={classes.bottomrect1}>
                    {t("t23")}
                  </Link>
                </li>
                <li>
                  <Link to="/" className={classes.bottomrect1}>
                    {t("t18")}
                  </Link>
                </li>
                <li>
                  <Link to="/" className={classes.bottomrect1}>
                    {t("t19")}
                  </Link>
                </li>
                <li>
                  <Link to="/" className={classes.bottomrect1}>
                    {t("t20")}
                  </Link>
                </li>
                <li>
                  <Link to="/" className={classes.bottomrect1}>
                    {t("t21")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.header_hr}></div>
        <div className={classes.header_2}>
          <div className={classes.header_2_1}>
            <ul className={classes.header_2_1_1}>
              <li className={classes.header_2_1_2_1}>
                <List name={t("t12")} link="sofas" />
              </li>
              <li className={classes.header_2_1_2}>
                <List name={t("t13")} link="beds" />
              </li>
              <li className={classes.header_2_1_2}>
                <List name={t("t14")} link="chairs" />
              </li>
              <li className={classes.header_2_1_2}>
                <List name={t("t17")} link="chests" />
              </li>
              <li className={classes.header_2_1_2}>
                <List name={t("t15")} link="wardrobes" />
              </li>
              <li className={classes.header_2_1_2}>
                <List name={t("t16")} link="kitchens" />
              </li>
            </ul>
          </div>
          <div className={classes.header_2_2}>
            <img src="/img/furnitureLogoBlack.svg" alt="FLogo" />
            <p>
              <span>F</span>urniture
            </p>
          </div>
          <div className={classes.header_2_3}>
            <Link to="/profile" style={{ marginLeft: "0px" }}>
              <svg width="24" height="24" display="block">
                <use href="#profile"></use>
              </svg>
              {profile()}
            </Link>
            <Link
              className={classes.header_2_3_1}
              style={{ marginRight: "25px" }}
              to="/profile"
            >
              <p>{t("t41")}</p>
            </Link>
            <ModalCart />
            <Link className={classes.header_2_3_1} to="/cart">
              <p>{t("t25")}</p>
            </Link>
            <Link to="/">
              <div className={classes.header_2_3_2}>
                <p className={classes.header_2_3_3}>{t("t24")}</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={classes.menushka} id="menushkaid">
          <div className={classes.menushka_1}>
            <nav className="navmenushka">
              <div
                className={classes.header_2_2}
                style={{ justifyContent: "center" }}
              >
                <p style={{ paddingLeft: "0px" }}>
                  <span>F</span>urniture
                </p>
              </div>
              <div className={classes.header_1_2}>
                <ul
                  className={classes.header_1_2_1}
                  style={{ flexDirection: "column" }}
                >
                  <li style={{ margin: "10px 0px" }}>
                    <Link
                      to="/"
                      style={{ marginLeft: "0px" }}
                      className={classes.bottomrect1}
                    >
                      {t("t23")}
                    </Link>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <Link
                      to="/"
                      className={classes.bottomrect1}
                      style={{ marginLeft: "0px" }}
                    >
                      {t("t18")}
                    </Link>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <Link
                      to="/"
                      className={classes.bottomrect1}
                      style={{ marginLeft: "0px" }}
                    >
                      {t("t19")}
                    </Link>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <Link
                      to="/"
                      className={classes.bottomrect1}
                      style={{ marginLeft: "0px" }}
                    >
                      {t("t20")}
                    </Link>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <Link
                      to="/"
                      className={classes.bottomrect1}
                      style={{ marginLeft: "0px" }}
                    >
                      {t("t21")}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <button
              onClick={clickbtnclose}
              className={classes.knopkazakroi}
            ></button>
          </div>
        </div>
        <div className={classes.mobilka}>
          <button onClick={clickbtnopen} className={classes.knopka}>
            <img src="/img/burgerMenu.svg" alt="menu" />
          </button>
          <div className={classes.header_2_2}>
            <img src="/img/furnitureLogoBlack.svg" alt="FLogo" />
            <p>
              <span>F</span>urniture
            </p>
          </div>
          <ModalCart />
        </div>
      </div>
    </header>
  );
};
export default withTranslation(Header);
