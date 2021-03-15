import React from 'react';
import '../styles/App.css';
import Article from './Article';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';


function App() {
    return(
      <div className="wrapper">
        <Header/>
        <Article/>
        <Table/>
        <Footer/>
      </div>
    )
  }

export default App