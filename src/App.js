import React, { Component } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="content">
          <Header />
          <Banner />
          <Services />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
