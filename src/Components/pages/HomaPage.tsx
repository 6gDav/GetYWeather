import React from 'react'
import { IonContent } from '@ionic/react';

import Clock from '../Clock/Clock'
import WeatherInfos from '../WeatherInfos/WeatherInfos';
import MapComponent from '../GeoLacationMap/GeloLocationMap';
import Calendar from '../Calendar/Calendar';
import FooterSection from '../Footer/FooterSection';

import '../../global.css';

function HomaPage() {
  return (
    <IonContent class='body'>
      <div className='main-div'>
        <div className='main-div2'>
          <Clock />
          <hr />
          <WeatherInfos />
          <hr />
          <MapComponent />
          <hr />
          <Calendar />
        </div>
        <FooterSection />
      </div>
    </IonContent>
  )
}

export default HomaPage