import React, {useContext} from 'react';
import './Header.css';
import {useTranslation} from 'react-i18next';
import LanguageSwitcher from '../Header/LanguageSwitcher';
import ToggleSwitch from '../../components/toggle-swich/ToggleSwitch';
import ThemeContext from '../../contexts/theme';

const Header = () => {
  const {t} = useTranslation('Header');
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className="header">
      <div className={theme}>
        <LanguageSwitcher/>
        <ToggleSwitch handleChange={() => toggleTheme()} id="toggle-theme"/>
        <h1>{t('heading')}</h1>
      </div>
    </div>
  );
}

export default Header;
