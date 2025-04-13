import { IonContent } from '@ionic/react';
import Clock from '../Clock/Clock'
import WeatherInfos from '../WeatherInfos/WeatherInfos';
import NewGeoLocationMap from '../GeoLacationMap/NewGeoLocationMap';
import Calendar from '../Calendar/Calendar';
import FooterSection from '../Footer/FooterSection';
import AIChat from '../AIChat/AIChat';
import PlcaceHeader from '../PlaceHeader/PlcaceHeader';

import GetIpTownName from '../GetIpTownName';

import '../../global.css';

function HomaPage() {
  //Mixing the components 
  return (
    <IonContent class="body">
      <div className="main-div">
        <div className="main-div2">
          <GetIpTownName />
          <AIChat />
          <PlcaceHeader />
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

export default HomaPage;