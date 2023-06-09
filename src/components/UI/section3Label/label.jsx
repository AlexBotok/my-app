import classes from "./label.module.css";
import withTranslation from "../../../i18next/withTranslation"
const Elem3 = ({name, id, t}) => {
const checkid = () => {
    if (id === "1") {
      return (
        <div>
          <p className={classes.rect4__2}>{name}</p>
          <p className={classes.rect4__2_1}>{t("t38")}</p>
        </div>
      );
    } else if (id === "2") {
      return (
        <div className={classes.rect4__2}>
          <p>{name}</p>
        </div>
      );
    }
}
  return (
    checkid()
  );
};

export default withTranslation(Elem3);
