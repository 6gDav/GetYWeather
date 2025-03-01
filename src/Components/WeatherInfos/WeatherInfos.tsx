import React, { useEffect, useState } from 'react';
import Infos from '../UserDate/UserDate';
import ManageAPI from './Logic/ManaggeAPI';

const WeatherInfos = () => {
  const [description, setDescription] = useState<NullAndString>();
  const [temperature, setTemperature] = useState<NullAndString>();
  const [humidity, setHumidity] = useState<NullAndString>();

  useEffect(() => {
    const startManageAPI = () => {
      if (Infos.TownName) {
        //Tempature
        ManageAPI(Infos.TownName, 'description')
          .then((data) => {
            console.log("API response:", data);
            setDescription(data);
          })
          .catch(console.error);

        //Description
        ManageAPI(Infos.TownName, 'temperature')
          .then((data) => {
            console.log("API response:", data);
            setTemperature(data);
          })
          .catch(console.error);

        //Humidity
        ManageAPI(Infos.TownName, 'humidity')
          .then((data) => {
            console.log("API response:", data);
            setHumidity(data);
          })
          .catch(console.error);
      }
    };

    const interval = setInterval(startManageAPI, 1000);

    return () => clearInterval(interval)
  }, [Infos.TownName]);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <h1>Description: {description}</h1>
      <h2>Temp: {temperature}</h2>
      <h2>Humidity: {humidity}</h2>
    </div>
  )
}

export default WeatherInfos;