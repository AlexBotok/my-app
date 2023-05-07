import classes from "./Header2.module.css";
import { Link } from "react-router-dom";
const Header2 = ({ name }) => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.nav}>
          <div className={classes.header_2_2}>
            <img src="/img/FLogo.svg" alt="FLogo" />
            <p>{name}</p>
          </div>
          <div className={classes.header_1_2}>
            <ul className={classes.header_1_2_1}>
              <li>
                <Link
                  to="/"
                  style={{ marginLeft: "0px" }}
                  className={classes.bottomrect1}
                >
                  Головна
                </Link>
              </li>
              <li>
                <Link to="/#" className={classes.bottomrect1}>
                  АкцІї
                </Link>
              </li>
              <li>
                <Link to="/#" className={classes.bottomrect1}>
                  Доставка та оплата
                </Link>
              </li>
              <li>
                <Link to="/#" className={classes.bottomrect1}>
                  Про нас
                </Link>
              </li>
              <li>
                <Link to="/#" className={classes.bottomrect1}>
                  Контакти
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header2;
