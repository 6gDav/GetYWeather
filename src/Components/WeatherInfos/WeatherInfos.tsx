import React, { useEffect, useState } from 'react';
import Infos from '../UserDate/UserDate';
import ManageAPI from './Logic/ManaggeAPI';

const WeatherInfos = () => {
  const [apiData, setApiData] = useState<NullAndString>(null);

  useEffect(() => {
    const startManageAPI = () => {
      if (Infos.TownName) {
        ManageAPI(Infos.TownName)
          .then((data) => {
            console.log("API response:", data);
          })
          .catch(console.error);
      }
    };

    const interval = setInterval(startManageAPI, 1000);

    return () => clearInterval(interval)
  }, [Infos.TownName]);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="../Images/thermometer.jpg" className="card-img-top" alt="Weather Image" title="weather image" />
      <h5 className="card-title">Card title</h5>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default WeatherInfos;