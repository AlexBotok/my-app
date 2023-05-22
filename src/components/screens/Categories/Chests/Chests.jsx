import CategoriesTitle from "../CategoriesTitle";
import withTranslation from "../../../../withTranslation";
const Chests = ({ t }) => {
  return <CategoriesTitle name={t("t17")} typeId="4" linka="chests" />;
};

export default withTranslation(Chests);