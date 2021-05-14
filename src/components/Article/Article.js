import React from 'react';
import './Article.css';
import {firstTitle} from '../../constants/constants';

function Article() {
    return (
        <div className="article">
            <h1>{firstTitle}</h1>
        </div>
    );
}

export default Article;
