import { useTranslation } from "react-i18next";

const withTranslation = (WrappedComponent) => {
  return (props) => {
    const { t, i18n } = useTranslation();
    return <WrappedComponent {...props} t={t} i18n={i18n} />;
  };
};

export default withTranslation;
