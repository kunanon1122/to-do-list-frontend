import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageButton: FC = () => {
    const { i18n } = useTranslation();

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="relative flex items-center flex-initial p-1 border border-white">
            <button onClick={() => handleChangeLanguage('th')}>
                TH
            </button>
            <span className="mx-1">/</span>
            <button onClick={() => handleChangeLanguage('en')}>
                EN
            </button>
        </div>
    );
};

export default LanguageButton;
