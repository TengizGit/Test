
import { Dropdown, DropdownButton } from 'react-bootstrap';
import React, { useContext } from 'react';
import './Header.css';
import { EN, RU } from '../../constants/languages';
import { AppLanguageContext } from '../../contexts/AppLanguageProvider';

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useContext(AppLanguageContext);

    return (
        <DropdownButton
            // className={s.headerWrapperDropdownLang}
            // id="dropdown-button-drop"
            // size="sm"
            // variant="secondary"
            title={language.toUpperCase()}
        >
            <Dropdown.Item onSelect={() => changeLanguage(EN)} eventKey={EN}>EN</Dropdown.Item>
            <Dropdown.Item onSelect={() => changeLanguage(RU)} eventKey={RU}>RU</Dropdown.Item>
        </DropdownButton>
    );
};

export default LanguageSwitcher;