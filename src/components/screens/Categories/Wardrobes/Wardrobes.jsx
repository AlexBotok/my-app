import CategoriesTitle from "../CategoriesTitle";
import withTranslation from "../../../../withTranslation";
const Wardrobes = ({ t }) => {
  return <CategoriesTitle name={t("t15")} typeId="5" linka="wardrobes"/>;
};

export default withTranslation(Wardrobes);