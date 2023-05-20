import Header2 from "../../../UI/Header2/Header2";
import classes from "./AdminPanel.module.css";
import Footer from "../../../UI/Footer/Footer";
import withTranslation from "../../../../withTranslation";
import Modal from "../AdminModalWindow/Modal";
const AdminPanel = ({ t }) => {
  return (
    <div className={classes.wrapper}>
      <Header2 name={t("t40")} />
        <main className={classes.main}>
          <Modal name={"Додати Товар"}></Modal>
        </main>
      <Footer />
    </div>
  );
};

export default withTranslation(AdminPanel);
