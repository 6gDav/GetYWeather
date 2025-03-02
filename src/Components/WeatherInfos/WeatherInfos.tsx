import React, { useEffect, useState } from 'react';
import Infos from '../UserDate/UserDate';
import ManageAPI from './Logic/ManaggeAPI';

import './Styles/WeatherInfosStyling.css';

const WeatherInfos = () => {
  //WaatherDatas

  const [temperature, setTemperature] = useState<NullAndString>('Place not found');
  const [description, setDescription] = useState<NullAndString>();
  const [humidity, setHumidity] = useState<NullAndString>();

  //Dibamic Wather Styles

  let [tempColors, setTempColors] = useState<string>('linear-gradient(90deg, rgb(51, 204, 255), blue, rgb(51, 102, 255), rgb(255, 255, 0), rgb(255, 153, 102), rgb(153, 0, 204), rgb(204, 0, 0))');

  useEffect(() => {
    const startManageAPI = () => {
      if (Infos.TownName) {
        //Description
        ManageAPI(Infos.TownName, 'description')
          .then((data) => {
            //console.log("API response:", data);
            setDescription(data);
          })
          .catch(console.error);

        //Tempature
        ManageAPI(Infos.TownName, 'temperature')
          .then((data) => {
            console.log("API response:", data);
            setTemperature(data);
            if (data) {
              if (+data < -10) setTempColors('linear-gradient(to left, rgb(51, 204, 255) 30%, rgba(51, 204, 255, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)')
              else if (+data > -10 && +data < 0) setTempColors('linear-gradient(to left, blue 30%, rgba(0, 0, 255, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)')
              else if (+data > 0 && +data < 10) setTempColors('linear-gradient(to left, rgb(51, 102, 255) 30%, rgba(51, 102, 255, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)')
              else if (+data > 10 && +data < 20) setTempColors('linear-gradient(to left, rgb(255, 255, 0) 30%, rgba(255, 255, 0, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)')
              else if (+data > 20 && +data < 30) setTempColors('linear-gradient(to left, rgb(255, 153, 102) 30%, rgba(255, 153, 102, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)')
              else if (+data > 30 && +data < 40) setTempColors('linear-gradient(to left, rgb(153, 0, 204) 30%, rgba(153, 0, 204, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)')
              else if (+data > 40) setTempColors('linear-gradient(to left, rgb(204, 0, 0) 30%, rgba(204, 0, 0, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)')
              console.log('Enter in the dinamic color if');
            }
            console.log(tempColors);
          })
          .catch(console.error);

        //Humidity
        ManageAPI(Infos.TownName, 'humidity')
          .then((data) => {
            //console.log("API response:", data);
            setHumidity(data);
          })
          .catch(console.error);
      }
    }

    const interval = setInterval(startManageAPI, 1000);

    return () => clearInterval(interval)
  }, [Infos.TownName]);

  return (
    <div className='mainDiv'>
      <div className='tempatureDiv' style={{ background: tempColors }}>
        <h1 className='tempaterureHeader'>Temp: {temperature} °C</h1>
      </div>
      <h2>Description: {description}</h2>
      <h2>Humidity: {humidity}</h2>
    </div>
  )
}

export default WeatherInfos;

// > -10 => rgb(51, 204, 255)
// > -10 < 0 => blue
// > 0 < 10 => rgb(51, 102, 255)
// > 10 < 20 => rgb(255, 255, 0)
// > 20 < 30 => rgb(255, 153, 102)
// > 30 < 40 => rgb(153, 0, 204)
// < 40 => rgb(204, 0, 0)