import CategoriesTitleForPages from "../categoriesTitleForPages/categoriesTitleForPages";
import withTranslation from "../../../../i18next/withTranslation";
const Chests = ({ t }) => {
  return <CategoriesTitleForPages name={t("t17")} typeId="4" link="chests" />;
};

export default withTranslation(Chests);