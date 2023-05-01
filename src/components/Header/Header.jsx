import React from "react";
import classes from "./Header.module.css";
import DownArrow from "../UI/hoverDownArrow/HoverDownArrow";
const Header = () => {
  const clickbtnopen = () => {
    const menu = document.getElementById("menushkaid");
    menu.classList.add(classes.add);
  };
  const clickbtnclose = () => {
    const menu = document.getElementById("menushkaid");
    menu.classList.remove(classes.add);
    console.log("gay");
  };
  return (
    <header className={classes.header} id="header">
      <div className={classes.container}>
        <div className={classes.header_1}>
          <div className={classes.header_flex_dir}>
            <div className={classes.header_1_1}>
              <p>Ми в соціальних мережах:</p>
              <a href="https://t.me/bot4ka" target="_blank" rel="noreferrer">
                <img src="./img/Telegram.svg" alt="Telegram" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/Facebook.svg" alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/bot4ka/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/Instagram.svg" alt="Instagram" />
              </a>
              <a href="tel:+380682735499" className="header_bottom">
                <img
                  src="./img/smartphone.svg"
                  alt="Smartphone"
                  className={classes.header_bottomimg}
                />
              </a>
              <a href="tel:+380682735498">
                <p>(068) 273 54 99</p>
              </a>
              <div className={classes.downarrow}>
                <DownArrow value="1"></DownArrow>
              </div>

              <ul className={classes.hov_menu1} id="hov_menu1">
                <li>Це номер телефону оператора</li>
              </ul>
            </div>
            <div className={classes.header_1_2}>
              <ul className={classes.header_1_2_1}>
                <li>
                  <a
                    href="/"
                    style={{ marginLeft: "0px" }}
                    className={classes.bottomrect1}
                  >
                    Головна
                  </a>
                </li>
                <li>
                  <a href="/#" className={classes.bottomrect1}>
                    АкцІї
                  </a>
                </li>
                <li>
                  <a href="/#" className={classes.bottomrect1}>
                    Доставка та оплата
                  </a>
                </li>
                <li>
                  <a href="/#" className={classes.bottomrect1}>
                    Про нас
                  </a>
                </li>
                <li>
                  <a href="/#" className={classes.bottomrect1}>
                    Контакти
                  </a>
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
                <a href="/sofas">Дивани</a>
                <DownArrow></DownArrow>
              </li>
              <li className={classes.header_2_1_2}>
                <a href="/#">Ліжка</a>
                <DownArrow></DownArrow>
              </li>
              <li className={classes.header_2_1_2}>
                <a href="/#">Крісла</a>
                <DownArrow></DownArrow>
              </li>
              <li className={classes.header_2_1_2}>
                <a href="/#">Комоди</a>
                <DownArrow></DownArrow>
              </li>
              <li className={classes.header_2_1_2}>
                <a href="/#">Шафи</a>
                <DownArrow></DownArrow>
              </li>
              <li className={classes.header_2_1_2}>
                <a href="/#">Кухня</a>
                <DownArrow></DownArrow>
              </li>
            </ul>
          </div>
          <div className={classes.header_2_2}>
            <img src="./img/FLogo.svg" alt="FLogo" />
            <p>
              <span>F</span>urniture
            </p>
          </div>
          <div className={classes.header_2_3}>
            <a href="/cart">
              <img src="./img/shopping-cart.svg" alt="cart" />
            </a>
            <a className={classes.header_2_3_1} href="/cart">
              <p>Кошик</p>
            </a>
            <a href="/#">
              <div className={classes.header_2_3_2}>
                <p className={classes.header_2_3_3}>Замовити дзвінок</p>
              </div>
            </a>
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
                    <a
                      href="/"
                      style={{ marginLeft: "0px" }}
                      className={classes.bottomrect1}
                    >
                      Головна
                    </a>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <a
                      href="/#"
                      className={classes.bottomrect1}
                      style={{ marginLeft: "0px" }}
                    >
                      АкцІї
                    </a>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <a
                      href="/#"
                      className={classes.bottomrect1}
                      style={{ marginLeft: "0px" }}
                    >
                      Доставка та оплата
                    </a>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <a
                      href="/#"
                      className={classes.bottomrect1}
                      style={{ marginLeft: "0px" }}
                    >
                      Про нас
                    </a>
                  </li>
                  <li style={{ margin: "10px 0px" }}>
                    <a
                      href="/#"
                      className={classes.bottomrect1}
                      style={{ marginLeft: "0px" }}
                    >
                      Контакти
                    </a>
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
            <img src="./img/burger.svg" alt="menu" />
          </button>
          <div className={classes.header_2_2}>
            <img src="./img/FLogo.svg" alt="FLogo" />
            <p>
              <span>F</span>urniture
            </p>
          </div>
          <button className={classes.knopka}>
            <img src="./img/cart1.svg" alt="cart" />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
