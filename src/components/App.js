import React from 'react';
import '../styles/App.css';
import Article from './Article';
import Header from './Header';
import Footer from './Footer';
import Task5 from './Task5';
import Request from './Request';
import RunEvents from './RunEvents';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Article />
      <Task5 />
      <RunEvents />
      <Request />
      <Footer />
    </div>
  )
}

export default App