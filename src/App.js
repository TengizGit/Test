import React from 'react';
import './styles/App.css';
import Article from './components/Article/Article';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Task5 from './pages/DraggebleSortedTask/Task';
import Request from './pages/RequestApi/RequestApi';
import RunEvents from './pages/RunEvents/RunEvents';
import './i18n';

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
  );
}

export default App;
