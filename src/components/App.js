import React from 'react';
import '../styles/App.css';
import Article from './Article';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';
import Request from './Request';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Article />
      <Table />
      <Request />
      <Footer />
    </div>
  )
}

export default App