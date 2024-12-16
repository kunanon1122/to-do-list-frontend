import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Button from "@/components/Button";

const LanguageButton: FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { locale } = router;

  const handleChangeLanguage = () => {
    const changeLanguage = i18n.language === "th" ? "en" : "th";

    i18n.changeLanguage(changeLanguage);
    localStorage.setItem("locale", changeLanguage);
    router.push(router.pathname, router.asPath, { locale: changeLanguage });
  };

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");

    if (savedLocale && savedLocale !== locale) {
      router.push(router.pathname, router.asPath, { locale: savedLocale });
    }
  }, [locale, router]);

  return (
    <Button theme="blue" onClick={handleChangeLanguage}>
      TH / EN
    </Button>
  );
};

export default LanguageButton;
