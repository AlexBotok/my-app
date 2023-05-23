import CategoriesTitleForPages from "../categoriesTitleForPages/categoriesTitleForPages";
import withTranslation from "../../../../i18next/withTranslation";
const Beds = ({ t }) => {
  return <CategoriesTitleForPages name={t("t13")} typeId="2" link="beds"/>;
};

export default withTranslation(Beds);
