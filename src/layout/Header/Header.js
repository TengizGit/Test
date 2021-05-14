import React from 'react';
import {useTranslation} from 'react-i18next';
import './Header.css';
import LanguageSwitcher from '../Header/LanguageSwitcher';

const Header = () => {
    const {t} = useTranslation('Header');
    return (
        <div className="header">
            <div className="header-center">
                <LanguageSwitcher/>
                <h1>{t('heading')}</h1>
            </div>
        </div>
    );
}

export default Header;
