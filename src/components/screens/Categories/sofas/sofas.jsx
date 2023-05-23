import CategoriesTitleForPages from "../categoriesTitleForPages/categoriesTitleForPages";
import withTranslation from "../../../../i18next/withTranslation";
const Sofas = ({ t }) => {
  return <CategoriesTitleForPages name={t("t12")} typeId="1" link="sofas" />;
};

export default withTranslation(Sofas);
