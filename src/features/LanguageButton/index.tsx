import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Button from "@/components/Button";

const LanguageButton: FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const handleChangeLanguage = () => {
    const changeLanguage = i18n.language === "th" ? "en" : "th";

    i18n.changeLanguage(changeLanguage);
    router.push(router.pathname, router.asPath, { locale: changeLanguage });
  };

  return (
    <Button theme="blue" onClick={handleChangeLanguage}>
      TH / EN
    </Button>
  );
};

export default LanguageButton;
