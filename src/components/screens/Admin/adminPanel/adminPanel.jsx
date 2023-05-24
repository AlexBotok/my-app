import Header2 from "../../../UI/Header2/Header2";
import Header from "../../../UI/header/header";
import classes from "./adminPanel.module.css";
import Footer from "../../../UI/footer/footer";
import withTranslation from "../../../../i18next/withTranslation";
import AdminAddGoodsModalWindow from "../adminModalWindow/adminAddGoodsModalWindow";

const AdminPanel = ({ t }) => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <hr className={classes.hr} />
      <h1 className={classes.title}> Furniture {t("t40")}</h1>
      <hr className={classes.hr} />
      <main className={classes.main}>
        <AdminAddGoodsModalWindow
          name={"Додати Товар"}
        ></AdminAddGoodsModalWindow>
      </main>
      <div></div>
      <Footer />
    </div>
  );
};

export default withTranslation(AdminPanel);
