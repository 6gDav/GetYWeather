import React from 'react'
import { IonContent } from '@ionic/react';

import Clock from '../Clock/Clock'
import WeatherInfos from '../WeatherInfos/WeatherInfos';
import NewGeoLocationMap from '../GeoLacationMap/NewGeoLocationMap';
import Calendar from '../Calendar/Calendar';
import FooterSection from '../Footer/FooterSection';

import '../../global.css';

//User Administration
import Login from './UserAdministration/Login';

function HomaPage() {
  return (
    <IonContent class='body'>
      <div className='main-div'>
        <div className='main-div2'>
          <Clock />
          <hr />
          <WeatherInfos />
          <hr />
          <NewGeoLocationMap />
          <hr />
          <Calendar />
        </div>
        <FooterSection />
      </div>
    </IonContent>
  )
}

export default HomaPage