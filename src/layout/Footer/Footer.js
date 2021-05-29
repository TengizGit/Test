import React, {useContext} from 'react';
import './Footer.css';
import ThemeContext from '../../contexts/theme';

function Footer() {
    const creationDate = 'creation date: ';
    const CreatorName = 'Tengiz Akhalaia';
    const linkToGithub = 'Github';
    const {theme} = useContext(ThemeContext);

    return (
        <>
            <div className="footer">
                <div className={`copyright ${theme}`}>
                    <h3>{CreatorName}</h3>
                    <p>
                        {creationDate}
                        {(new Date()).toDateString()}
                    </p>
                    <a href="https://github.com/TengizGit/Test.git" target="_blank" rel="noreferrer">{linkToGithub}</a>
                </div>
            </div>
        </>
    );
}

export default Footer;
