import React, { Component } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import BannerSection from './components/BannerSection/BannerSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import OffersSection from './components/OffersSection/OffersSection';
import CoachesSection from './components/CoachesSection/CoachesSection';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    content: null,
    isOpenFormLog: false
  }

  async componentDidMount() {

    const data = await fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section').then(r => r.json());

    const groupedData = data.content.reduce((res, item) => {
      const { type } = item;

      if (!(type in item)) {
        return {
          ...res,
          [type]: item
        }
      }

      return res;
    }, {});

    this.setState({
      data: groupedData
    });

  }

  openModal = () => {
    this.setState({
      isOpenFormLog: !this.state.isOpenFormLog
    })
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>
    }

    const { info, service, navigation, coach, offer } = data;

    return (
      <div className="wrapper">
        <div className="content">
          <Header
            data={navigation}
            openModal={this.openModal}
          />
          <BannerSection
            data={info}
          />
          <ServicesSection
            data={service}
          />
          <OffersSection
            data={offer}
          />
          <CoachesSection
            data={coach}
          />
        </div>
        <Footer data={navigation} />
        <Modal close={this.openModal} isOpen={this.state.isOpenFormLog} />
      </div>
    );
  }
}

export default App;
