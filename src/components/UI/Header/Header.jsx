import classes from "./Header.module.css";
import DownArrow from "../hoverDownArrow/HoverDownArrow";
import withTranslation from "../../../withTranslation.js";
import { Link } from "react-router-dom";
import { profile } from "../../UI/svgcomp/Svg";
import ModalCart from "../../screens/Cart/ModalCart/ModalCart";
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
                <img src="/img/Telegram.svg" alt="Telegram" />
              </Link>
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/Facebook.svg" alt="Facebook" />
              </Link>
              <Link
                to="https://www.instagram.com/bot4ka/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/Instagram.svg" alt="Instagram" />
              </Link>
              <Link to="tel:+380682735499" className="header_bottom">
                <img
                  src="/img/smartphone.svg"
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
                  <Link
                    to={`/?language=${localStorage.getItem("language")}`}
                    className={classes.bottomrect1}
                  >
                    {t("t23")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/?language=${localStorage.getItem("language")}`}
                    className={classes.bottomrect1}
                  >
                    {t("t18")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/?language=${localStorage.getItem("language")}`}
                    className={classes.bottomrect1}
                  >
                    {t("t19")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/?language=${localStorage.getItem("language")}`}
                    className={classes.bottomrect1}
                  >
                    {t("t20")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/?language=${localStorage.getItem("language")}`}
                    className={classes.bottomrect1}
                  >
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
                <Link
                  to={`/sofas?language=${localStorage.getItem("language")}`}
                >
                  {t("t12")}
                </Link>
                <DownArrow></DownArrow>
              </li>
              <li className={classes.header_2_1_2}>
                <Link to={`/beds?language=${localStorage.getItem("language")}`}>
                  {t("t13")}
                </Link>
                <DownArrow></DownArrow>
              </li>
              <li className={classes.header_2_1_2}>
                <Link
                  to={`/chairs?language=${localStorage.getItem("language")}`}
                >
                  {t("t14")}
                </Link>
                <DownArrow></DownArrow>
              </li>
              <li className={classes.header_2_1_2}>
                <Link
                  to={`/chests?language=${localStorage.getItem("language")}`}
                >
                  {t("t17")}
                </Link>
                <DownArrow></DownArrow>
              </li>
              <li className={classes.header_2_1_2}>
                <Link
                  to={`/wardrobes?language=${localStorage.getItem("language")}`}
                >
                  {t("t15")}
                </Link>
                <DownArrow></DownArrow>
              </li>
              <li className={classes.header_2_1_2}>
                <Link
                  to={`/kitchens?language=${localStorage.getItem("language")}`}
                >
                  {t("t16")}
                </Link>
                <DownArrow></DownArrow>
              </li>
            </ul>
          </div>
          <div className={classes.header_2_2}>
            <img src="/img/FLogo.svg" alt="FLogo" />
            <p>
              <span>F</span>urniture
            </p>
          </div>
          <div className={classes.header_2_3}>
            <Link
              to={`/profile?language=${localStorage.getItem("language")}`}
              style={{ marginLeft: "0px" }}
            >
              <svg width="24" height="24" display="block">
                <use href="#profile"></use>
              </svg>
              {profile()}
            </Link>
            <Link
              className={classes.header_2_3_1} style={{ marginRight: "25px" }}
              to={`/profile?language=${localStorage.getItem("language")}`}
            >
              <p>{t("t41")}</p>
            </Link>
            {/* <Link to={`/cart?language=${localStorage.getItem("language")}`}>
              <img src="/img/shopping-cart.svg" alt="cart" />
            </Link> */}
            <ModalCart />
            <Link
              className={classes.header_2_3_1}
              to={`/cart?language=${localStorage.getItem("language")}`}
            >
              <p>{t("t25")}</p>
            </Link>
            <Link to={`/?language=${localStorage.getItem("language")}`}>
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
                      to={`/?language=${localStorage.getItem("language")}`}
                      style={{ marginLeft: "0px" }}
                      className={classes.bottomrect1}
                    >
                      {t("t23")}
                    </Link>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <Link
                      to={`/?language=${localStorage.getItem("language")}`}
                      className={classes.bottomrect1}
                      style={{ marginLeft: "0px" }}
                    >
                      {t("t18")}
                    </Link>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <Link
                      to={`/?language=${localStorage.getItem("language")}`}
                      className={classes.bottomrect1}
                      style={{ marginLeft: "0px" }}
                    >
                      {t("t19")}
                    </Link>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <Link
                      to={`/?language=${localStorage.getItem("language")}`}
                      className={classes.bottomrect1}
                      style={{ marginLeft: "0px" }}
                    >
                      {t("t20")}
                    </Link>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <Link
                      to={`/?language=${localStorage.getItem("language")}`}
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
            <img src="/img/burger.svg" alt="menu" />
          </button>
          <div className={classes.header_2_2}>
            <img src="/img/FLogo.svg" alt="FLogo" />
            <p>
              <span>F</span>urniture
            </p>
          </div>
          <button className={classes.knopka}>
            <Link to={`/cart?language=${localStorage.getItem("language")}`}>
              <img src="/img/cart1.svg" alt="cart" />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};
export default withTranslation(Header);
