import React from 'react';
import '../styles/App.css';
import Article from './Article';
import articles from './fixtures';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';


function App() {
    return(
      <div className="wrapper">
        <Header/>
        <h1>React internship</h1>
        <Article article={articles[0]}/>
        <Table/>
        <Footer/>
      </div>
    )
  }

export default App