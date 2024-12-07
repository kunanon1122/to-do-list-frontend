import React from "react";
import { useTranslation } from 'react-i18next'
import { useSelector } from "react-redux";

import LanguageButton from '@/components/Button/LanguageButton'
import { Counter } from "@/features/counter/Counter";
import { RootState } from "@/redux/store";

const Home = () => {
  const { t } = useTranslation('common')

  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <div className="text-3xl text-core-red-100">{`${t("hello")} ${count}`}</div>
      <div className="mt-3">
        <LanguageButton /> 
        <Counter />
      </div>
    </div>
  );
};

export default Home;
