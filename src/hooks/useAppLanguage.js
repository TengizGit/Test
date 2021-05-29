import { useState } from 'react';
import i18n from 'i18next';
import { EN } from '../constants/languages';

const useAppLanguage = () => {
    const [language, setLanguage] = useState(EN);

    i18n.getItem = function (entryTaskAppLanguage) {
        return "";
    }
    const appLanguage = i18n.getItem('entry-task-app-language') || EN;
    if (appLanguage !== language) setLanguage(appLanguage);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then(() => setLanguage(lng));
    };

    return {
        language,
        changeLanguage,
    };
};

export default useAppLanguage;