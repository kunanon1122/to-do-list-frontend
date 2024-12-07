import React from "react";
import { useTranslation } from 'react-i18next'

import LanguageResponse from '@/src/components/Button/LanguageResponse'

const Home = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <div className="text-3xl text-core-red-100">{t("hello")}</div>
      <div className="mt-3">
        <LanguageResponse />
      </div>
    </div>
  );
};

export default Home;
