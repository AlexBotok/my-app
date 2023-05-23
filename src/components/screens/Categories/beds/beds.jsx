import CategoriesTitle from "../CategoriesTitle";
import withTranslation from "../../../../withTranslation";
const Beds = ({ t }) => {
  return <CategoriesTitle name={t("t13")} typeId="2" linka="beds"/>;
};

export default withTranslation(Beds);
