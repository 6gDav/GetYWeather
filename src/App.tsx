//#region Imports
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

//#endregion

import { useEffect, useState } from 'react';

//Naviagtion bars
import AppBar from './Components/AppBar_and_UserInputsInBar/NewAppBar';
import AppBarMobil from './Components/AppBar_and_UserInputsInBar/AppBarMobil';


//Pages
import Feature from './Components/pages/Features';
import HomaPage from './Components/pages/HomaPage';
import Pricing from './Components/pages/Pricing';
import Contact from './Components/pages/Contact';

//user administration
import Login from './Components/pages/UserAdministration/Login';
import SingUp from './Components/pages/UserAdministration/SingUp';
import ForgotPassword from './Components/pages/UserAdministration/ForgotPassword';

//Theme variables 
import './theme/variables.css';
import './global.css'

setupIonicReact();

const App: React.FC = () => {

  //Chack mobil size
  const [isMobil, setIsMobil] = useState<boolean>(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobil(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //The basic navigation of the progra
  return (
    <IonApp>
      <IonReactRouter>
        {!isMobil && <AppBar />}
        {isMobil && <AppBarMobil />}
        <IonContent>
          <IonRouterOutlet>
            <Route path="/home" component={HomaPage} exact />
            <Route path="/feature" component={Feature} exact />
            <Route path="/pricing" component={Pricing} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/singup" component={SingUp} exact />
            <Route path="/forgotpassword" component={ForgotPassword} exact />
            <Route exact path="/" render={() => <Redirect to="/home" />} /> 
            {/* set the Home page as the default */}
          </IonRouterOutlet>
        </IonContent>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
