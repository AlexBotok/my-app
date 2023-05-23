import CategoriesTitleForPages from "../categoriesTitleForPages/categoriesTitleForPages";
import withTranslation from "../../../../i18next/withTranslation";
const Chairs = ({ t }) => {
  return <CategoriesTitleForPages name={t("t14")} typeId="3" link="chairs" />;
};

export default withTranslation(Chairs);