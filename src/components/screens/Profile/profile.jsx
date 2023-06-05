import classes from "./profile.module.css";
import Header from "../../UI/header/header";
import Footer from "../../UI/footer/footer";
import withTranslation from "../../../i18next/withTranslation";
import {cookie} from "../../constants/constants"
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
const Profile = ({ t }) => {
  const [token, setToken] = useState({});
  console.log(token);
  useEffect(() => {
    if(cookie){
      setToken(jwt_decode(cookie));
    }
  }, []);
  return (
    <div className={classes.wrapper}>
      <Header />
      <hr className={classes.hr} />
      <h1 className={classes.title}> Furniture {t("t41")}</h1>
      <hr className={classes.hr} />
      <main className={classes.main}>
        <p className={classes.p}>User Name: {cookie ?`${token.name} ${token.surname}` : "Login please"}</p>
        <p className={classes.p}>Email Address: {cookie ? `${token.email}` : "Login please"}</p>
      </main>
      <Footer />
    </div>
  );
};

export default withTranslation(Profile);
