import React, {useContext} from 'react';
import './Header.css';
import {EN, RU} from '../../constants/languages';
import {AppLanguageContext} from '../../contexts/AppLanguageProvider';

const LanguageSwitcher = () => {
    const {language, changeLanguage} = useContext(AppLanguageContext);

    return (
        <div
            title={language.toUpperCase()}
        >
            <button
                onClick={() => changeLanguage(RU)} eventkey={RU}>RU
            </button>
            <button
                onClick={() => changeLanguage(EN)} eventkey={EN}>EN
            </button>
        </div>
    )
};

export default LanguageSwitcher;
