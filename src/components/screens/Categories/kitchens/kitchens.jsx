import CategoriesTitle from "../CategoriesTitle";
import withTranslation from "../../../../withTranslation";
const Kitchens = ({ t }) => {
  return <CategoriesTitle name={t("t16")} typeId="6" linka="kitchens"/>;
};

export default withTranslation(Kitchens);
