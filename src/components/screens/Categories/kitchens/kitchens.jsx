import CategoriesTitleForPages from "../categoriesTitleForPages/categoriesTitleForPages";
import withTranslation from "../../../../i18next/withTranslation";
const Kitchens = ({ t }) => {
  return <CategoriesTitleForPages name={t("t16")} typeId="6" link="kitchens"/>;
};

export default withTranslation(Kitchens);
