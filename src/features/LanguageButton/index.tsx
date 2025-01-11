import React, { FC, useMemo } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Button from "@/components/Button";

const LanguageButton: FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const currentLanguage = useMemo(() => {
    return i18n.language === "th" ? "th" : "en";
  }, [i18n.language]);

  const handleChangeLanguage = () => {
    const changeLanguage = i18n.language === "th" ? "en" : "th";

    i18n.changeLanguage(changeLanguage);
    router.push(router.pathname, router.asPath, { locale: changeLanguage });
  };

  return (
    <div>
      <Button
        className="hidden md:block"
        theme="blue"
        onClick={handleChangeLanguage}
      >
        TH / EN
      </Button>
      <Button
        className="block md:hidden"
        theme="blue"
        onClick={handleChangeLanguage}
      >
        {currentLanguage.toUpperCase()}
      </Button>
    </div>
  );
};

export default LanguageButton;
