import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Button from "@/components/Button";

const LanguageButton: FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = () => {
    const changeLanguage = i18n.language === "th" ? "en" : "th";

    i18n.changeLanguage(changeLanguage);
  };

  return (
    <Button theme="blue" onClick={handleChangeLanguage}>
      TH / EN
    </Button>
  );
};

export default LanguageButton;
