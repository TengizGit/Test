import React from 'react';
import './Footer.css';

function Footer() {
  const creationDate = 'creation date: ';
  const CreatorName = 'Tengiz Akhalaia';
  const linkToGithub = 'Github';
  return (
    <div className="footer">
      <h3>{CreatorName}</h3>
      <p>
        {creationDate}
        {(new Date()).toDateString()}
      </p>
      <a href="https://github.com/TengizGit/Test.git" target="_blank" rel="noreferrer">{linkToGithub}</a>
    </div>
  );
}

export default Footer;
