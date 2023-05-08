import classes from "./Section4.module.css";
import withTranslation from "../../../../withTranslation.js";
const Section4 = ({t}) => {
  return (
    <div className={classes.container}>
      <div className={classes.sect5}>
        <div className={classes.sect5__1}>
          <div className={classes.sect4_1}>
            <div className={classes.rect3}></div>
            <p>{t("t28")}</p>
          </div>
        </div>
        <div className={classes.sect5__2}>
          <div className={classes.sect5_1}>
            <div className={classes.sect5_1_1}>
              <p style={{ marginTop: "50px" }}>
                <span className={classes.furniture}>"Furniture"</span> – "Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <p className={classes.psect5_1_1}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <p className={classes.psect5_1_1} style={{ marginBottom: "50px" }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure
              </p>
            </div>
            <div className={classes.sect5_1_1_1}></div>
          </div>
          <img
            src="/img/sect5img.png"
            className={classes.sect5img}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default withTranslation(Section4);
