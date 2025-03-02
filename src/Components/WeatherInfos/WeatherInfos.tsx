import React, { useEffect, useState } from 'react';
import Infos from '../UserDate/UserDate';
import ManageAPI from './Logic/ManaggeAPI';

import './Styles/WeatherInfosStyling.css';

const WeatherInfos = () => {
  //WaatherDatas
  const [description, setDescription] = useState<NullAndString>();
  const [temperature, setTemperature] = useState<NullAndString>();
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
            if (data)
              {
                if (+data < -10) setTempColors('rgb(51, 204, 255)')
                else if (+data > -10 && +data < 0) setTempColors('blue')
                else if (+data > 0 && +data < 10) setTempColors('rgb(51, 102, 255)')
                else if (+data > 10 && +data < 20) setTempColors('rgb(255, 255, 0)')
                else if (+data > 20 && +data < 30) setTempColors('rgb(255, 153, 102)')
                else if (+data > 30 && +data < 40) setTempColors('rgb(153, 0, 204)')
                else if (+data > 40) setTempColors('rgb(204, 0, 0)')
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
    };

    const interval = setInterval(startManageAPI, 1000);

    return () => clearInterval(interval)
  }, [Infos.TownName]);

  return (
    <div className='mainDiv'>
      <div className='tempatureDiv' style={{ background: tempColors }}>
        <h1 className='tempaterureHeader'>Temp: {temperature}</h1>
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