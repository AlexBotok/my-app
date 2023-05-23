import CategoriesTitleForPages from "../categoriesTitleForPages/categoriesTitleForPages";
import withTranslation from "../../../../i18next/withTranslation";
const Wardrobes = ({ t }) => {
  return <CategoriesTitleForPages name={t("t15")} typeId="5" link="wardrobes"/>;
};

export default withTranslation(Wardrobes);