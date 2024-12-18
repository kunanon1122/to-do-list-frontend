import React, { FC } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import Title from "@/components/Title";
import LanguageButton from "@/features/LanguageButton";

import { Translations } from "@/variables/API";

const TopNavigation: FC = () => {
  const { t } = useTranslation(Translations.common);

  return (
    <div className="h-14 w-full flex items-center px-3 justify-between border-b border-core-gray-100">
      <div className="flex items-center">
        <Image
          src="/imgs/to-do-list-icon.png"
          alt="Not Found"
          height={30}
          width={30}
        />
        <Title level={3} ml>
          To-do List {t("hello")}
        </Title>
      </div>
      <div>
        <LanguageButton />
      </div>
    </div>
  );
};

export default TopNavigation;
