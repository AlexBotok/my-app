import CategoriesTitle from "../CategoriesTitle";
import withTranslation from "../../../../withTranslation";
const Sofas = ({ t }) => {
  return <CategoriesTitle name={t("t12")} typeId="1" linka="sofas" />;
};

export default withTranslation(Sofas);
