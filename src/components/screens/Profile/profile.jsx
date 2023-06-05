import classes from "./profile.module.css";
import Header from "../../UI/header/header";
import Footer from "../../UI/footer/footer";
import withTranslation from "../../../i18next/withTranslation";
import {cookie} from "../../constants/constants"
// import jwt from "jsonwebtoken";
const Profile = ({ t }) => {
  console.log(cookie);
  // const token = jwt.decode(cookie);
  // console.log(token);
  return (
    <div className={classes.wrapper}>
      <Header />
      <hr className={classes.hr} />
      <h1 className={classes.title}> Furniture {t("t41")}</h1>
      <hr className={classes.hr} />
      <main className={classes.main}>
        <p className={classes.p}>User Name: User Name</p>
        <p className={classes.p}>Email Address: Email Address</p>
      </main>
      <Footer />
    </div>
  );
};

export default withTranslation(Profile);
