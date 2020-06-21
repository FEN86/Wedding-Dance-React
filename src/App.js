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
    content: null
  }

  async componentDidMount() {

    // const items = await Promise.all([fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/navigation').then(r => r.json()),
    // fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/info').then(r => r.json()),
    // fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/service').then(r => r.json()),
    // fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/offer').then(r => r.json()),
    // fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/coach').then(r => r.json()),
    // ])


    // console.log(items)

    const data = await fetch('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section').then(r => r.json());
    // setTimeout(() => {
    //   this.setState({ content: data.content })
    // }, 2000)

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


  render() {
    const { data } = this.state;
    console.log(data);

    // const content = this.state.content;

    if (!data) {
      return <div>Loading...</div>
    }

    const { info, service, navigation, coach, offer } = data;

    return (
      <div className="wrapper">
        <div className="content">
          <Header
            data={navigation}
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
        <Footer />
        <Modal />
      </div>
    );
  }
}

export default App;
