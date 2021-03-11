import React from 'react';
import '../styles/Header.css';

const Header = () => {
    const heading = 'React';
    return (
        <div className='header'>         
            <div className="header-center">
                <h1>{heading}</h1>
            </div>
        </div>
    );
}

export default Header;
