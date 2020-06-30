import React, { Component } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import BannerSection from './components/BannerSection/BannerSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import OffersSection from './components/OffersSection/OffersSection';
import CoachesSection from './components/CoachesSection/CoachesSection';
import Modal from './components/Modal/Modal';
import {BASE_URL} from './constants';
import Loader from './components/Loader/Loader';
import FormLog from "./components/FormLog/FormLog";
import OffersEditor from "./components/OffersEditor/OffersEditor";

class App extends Component {
  state = {
    content: null,
    isOpenFormLog: false,
    accessToken: localStorage.getItem(('access_token')),
    isOpenFormEdit: false
  }

  async componentDidMount() {

    const data = await fetch(`${BASE_URL}/app/api/v1/section`).then(r => r.json());

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

  toggleModal = () => {
    this.setState({
      isOpenFormLog: !this.state.isOpenFormLog
    })
  }

  handleSuccessLogin = (accessToken) => {
    this.setState({
      accessToken,
      isOpenFormLog: false
    })
  }

  logOut = () => {
    localStorage.removeItem('access_token');
    this.setState({
      accessToken: null
    })
  }



  render() {
    const { data } = this.state;
    if (!data) {
      return <Loader />
    }

    const { info, service, navigation, coach, offer } = data;

    return (
      <div className="wrapper">
        <div className="content">
          <Header
            data={navigation}
            openModal={this.toggleModal}
            isAuthorised={this.state.accessToken}
            logOut={this.logOut}
          />
          <BannerSection
            data={info}
          />
          <ServicesSection
            data={service}
          />
          <OffersSection
            data={offer}
            openModal={this.toggleModal}
            isAuthorised={this.state.accessToken}
          />
          <CoachesSection
            data={coach}
          />
        </div>
        <Footer data={navigation} />
        <Modal isOpen={this.state.isOpenFormLog}>
          {
            this.state.accessToken
                ? <OffersEditor onClose={this.toggleModal}/>
                                : <FormLog onClose={this.toggleModal} onSuccess={this.handleSuccessLogin}/>
          }
        </Modal>
      </div>
    );
  }
}

export default App;
