import classes from "./Header2.module.css";
import { Link } from "react-router-dom";
import withTranslation from "../../../withTranslation";
const Header2 = ({ t, name }) => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.nav}>
          <div className={classes.header_2_2}>
            <img src="/img/FLogo.svg" alt="FLogo" />
            <p><span>F</span>urniture {name}</p>
          </div>
          <div className={classes.header_1_2}>
            <ul className={classes.header_1_2_1}>
              <li>
                <Link
                  to={`/?language=${localStorage.getItem("language")}`}
                  style={{ marginLeft: "0px" }}
                  className={classes.bottomrect1}
                >
                  {t("t23")}
                </Link>
              </li>
              <li>
                <Link to={`/?language=${localStorage.getItem("language")}`} className={classes.bottomrect1}>
                {t("t18")}
                </Link>
              </li>
              <li>
                <Link to={`/?language=${localStorage.getItem("language")}`} className={classes.bottomrect1}>
                {t("t19")}
                </Link>
              </li>
              <li>
                <Link to={`/?language=${localStorage.getItem("language")}`} className={classes.bottomrect1}>
                {t("t28")}
                </Link>
              </li>
              <li>
                <Link to={`/?language=${localStorage.getItem("language")}`} className={classes.bottomrect1}>
                {t("t21")}
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

export default withTranslation(Header2);
