import React, { Component } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import BannerSection from './components/BannerSection/BannerSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import OffersSection from './components/OffersSection/OffersSection';
import CoachesSection from './components/CoachesSection/CoachesSection';
class App extends Component {
  // state = {
  // content: [
  //   {
  //     meta: {
  //       title: "Our Services",
  //       description: "We want to make your wedding day perfect that is why suggest a lot of options for dance: not only for a bride and groom but for their friends and relatives"
  //     },
  //     _id: "5ec131d92d542b15b4d9baf1",
  //     type: "service",
  //     content: [
  //       {
  //         "style": [],
  //         "_id": "5ee4c757cb8992000240ce1a",
  //         "title": "For Bride and Groom",
  //         "url": "/service1"
  //       },
  //       {
  //         "style": [],
  //         "_id": "5ee4c757cb8992000240ce19",
  //         "title": "For Guests",
  //         "url": "/service2"
  //       },
  //       {
  //         "style": [],
  //         "_id": "5ee4c757cb8992000240ce18",
  //         "title": "Other events",
  //         "url": "/service3"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "meta": {
  //       "title": "Our Coaches",
  //       "description": "Coaches in our school are not only perfect dancers but also have a big experience in coaching that is why you will feel really amazing after each of your class"
  //     },
  //     "_id": "5ec13890e463d93d2474169d",
  //     "type": "coach",
  //     "content": [
  //       {
  //         "style": [
  //           "Vienese Waltz, Salsa"
  //         ],
  //         "_id": "5edf559f9a5be200024c5484",
  //         "name": "Tom Wilspon",
  //         "direction": "Great dancer",
  //         "workExperience": "25",
  //         "teachExperience": "10",
  //         "url": "/service1"
  //       },
  //       {
  //         "style": [
  //           "Disco, Hip-Hop"
  //         ],
  //         "_id": "5edf559f9a5be200024c5483",
  //         "name": "Alan Walker",
  //         "direction": "Dancer",
  //         "workExperience": "10",
  //         "teachExperience": "8",
  //         "url": "/service1"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "meta": {
  //       "title": "We offer",
  //       "description": "what we offer?"
  //     },
  //     "_id": "5ec13906e463d93d247416a0",
  //     "type": "offer",
  //     "content": [
  //       {
  //         "style": [],
  //         "_id": "5ee9228d150c03000282116f",
  //         "title": "Talented Coaches11111",
  //         "url": "/offer1"
  //       },
  //       {
  //         "style": [],
  //         "_id": "5ee9228d150c03000282116e",
  //         "title": "Cozy rooms for training",
  //         "url": "/offer2"
  //       },
  //       {
  //         "style": [],
  //         "_id": "5ee9228d150c03000282116d",
  //         "title": "Coffee, tea, and cookies",
  //         "url": "/offer3"
  //       },
  //       {
  //         "style": [],
  //         "_id": "5ee9228d150c03000282116c",
  //         "title": "Good physical form",
  //         "url": "/offer4"
  //       },
  //       {
  //         "style": [],
  //         "_id": "5ee9228d150c03000282116b",
  //         "title": "Self Confidence and success on your event",
  //         "url": "/offer5"
  //       },
  //       {
  //         "style": [],
  //         "_id": "5ee9228d150c03000282116a",
  //         "title": "Exciting emotions and a lot of fun",
  //         "url": "/offer6"
  //       },
  //       {
  //         "style": [],
  //         "_id": "5ee9228d150c030002821169",
  //         "title": "Great photos from your event",
  //         "url": "/offer7"
  //       },
  //       {
  //         "style": [],
  //         "_id": "5ee9228d150c030002821168",
  //         "title": "Spend hours together in happiness",
  //         "url": "/offer8"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "meta": {
  //       "title": "Wedding Dance"
  //     },
  //     "action": {
  //       "title": "Start",
  //       "url": "/get-started"
  //     },
  //     "_id": "5ec92b01a8fdeb00021926c0",
  //     "type": "navigation",
  //     "content": [
  //       {
  //         "style": [],
  //         "_id": "5ee4f48c14a26b0002cf4fa6",
  //         "title": "Services",
  //         "url": "/services"
  //       },
  //       {
  //         "style": [],
  //         "_id": "5ee4f48c14a26b0002cf4fa5",
  //         "title": "Our Coaches",
  //         "url": "/coaches"
  //       },
  //       {
  //         "style": [],
  //         "_id": "5ee4f48c14a26b0002cf4fa4",
  //         "title": "Testimonials",
  //         "url": "/testimonials"
  //       },
  //       {
  //         "style": [],
  //         "_id": "5ee4f48c14a26b0002cf4fa3",
  //         "title": "FAQ",
  //         "url": "/faq"
  //       },
  //       {
  //         "style": [],
  //         "_id": "5ee4f48c14a26b0002cf4fa2",
  //         "title": "Lesson Review",
  //         "url": "/review"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     meta: {
  //       title: "Wedding Dance Lessons",
  //       location: "New Jersey",
  //       description: "The wedding dance is one of the most important dances in your life. You look perfect and the whole audience is looking at you. Also, it becomes the favorite moment you like to play on videos and photos. Feel the moment",
  //       heroImage: "/hero.jpg"
  //     },
  //     action: {
  //       title: "Start",
  //       url: "/get-started"
  //     },
  //     _id: "5ec935ddee6ba900029794b3",
  //     type: "info",
  //     content: [],
  //     __v: 0
  //   },
  // ]
  // }

  render() {
    return (
      <div className="wrapper">
        <div className="content">
          <Header />
          <BannerSection />
          <ServicesSection />
          <OffersSection />
          <CoachesSection />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
