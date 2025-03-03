import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonContent, isPlatform } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

import Infos from './Components/UserDate/UserDate';

import AppBar from './Components/AppBar_and_UserInputsInBar/AppBar';
import AppBarMobil from './Components/AppBar_and_UserInputsInBar/AppBarMobil';
import Clock from './Components/Clock/Clock';
import PlcaceHeader from './Components/PlaceHeader/PlcaceHeader';
import FooterSection from './Components/Footer/FooterSection';
import WeatherInfos from './Components/WeatherInfos/WeatherInfos';

import './global.css'

setupIonicReact();

const App: React.FC = () => {
  const isIOS = isPlatform('ios');
  const isAndroid = isPlatform('android');


  return (
    <IonApp>
      <IonContent className="body" scrollY={true}>
        <IonReactRouter>
          <div>
            {!isIOS && !isAndroid && < AppBar/>}
            {isIOS || isAndroid && <AppBarMobil />}
            {/* <AppBar /> */}
            <div className='main-div2'>
              <PlcaceHeader />
              <Clock />
              <hr />
              <WeatherInfos />
            </div>
            <FooterSection />
          </div>
        </IonReactRouter>
      </IonContent>
    </IonApp>
  );
}

export default App;
