import CategoriesTitle from "../CategoriesTitle";
import withTranslation from "../../../../withTranslation";
const Chairs = ({ t }) => {
  return <CategoriesTitle name={t("t14")} typeId="3" linka="chairs" />;
};

export default withTranslation(Chairs);