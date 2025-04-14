import { useEffect, useState } from 'react';
import WeatherCards from './WeatherCards';
import Infos from '../UserDate/UserDate';
import ManageAPI from './Logic/ManaggeAPI';

import './Styles/WeatherInfosStyling.css';


const WeatherInfos = () => {
  //WaatherDatas

  const [temperature, setTemperature] = useState<NullAndString>("Place not found");
  const [minTempatre, setminTempature] = useState<NullAndString>();
  const [maxTempature, setMaxTempatre] = useState<NullAndString>();
  const [description, setDescription] = useState<NullAndString>();
  const [humidity, setHumidity] = useState<NullAndString>();
  const [feelsLike, setfeelsLike] = useState<NullAndString>();
  const [clouds, setclouds] = useState<NullAndString>();
  const [windSpeed, setwindSpeed] = useState<NullAndString>();
  const [pressure, setpressure] = useState<NullAndString>();
  const [winddeg, setwinddeg] = useState<NullAndString>();
  const [windgust, setwindgust] = useState<NullAndString>();


  //Dibamic Wather Styles

  let [tempColors, setTempColors] = useState<string>("linear-gradient(90deg, rgb(51, 204, 255), blue, rgb(51, 102, 255), rgb(255, 255, 0), rgb(255, 153, 102), rgb(153, 0, 204), rgb(204, 0, 0))");

  useEffect(() => {
    const startManageAPI = () => {
      if (Infos.TownName) {
        //Description
        ManageAPI(Infos.TownName, "description")
          .then((data) => {
            //console.log("API response:", data);
            setDescription(data);
          })
          .catch(console.error);

        //Tempature
        ManageAPI(Infos.TownName, "temperature")
          .then((data) => {
            //console.log("API response: ", data);
            setTemperature(data);
            if (data) {
              if (+data < -10) setTempColors("linear-gradient(to left, rgb(51, 204, 255) 30%, rgba(51, 204, 255, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)")
              else if (+data > -10 && +data < 0) setTempColors("linear-gradient(to left, blue 30%, rgba(0, 0, 255, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)")
              else if (+data > 0 && +data < 10) setTempColors("linear-gradient(to left, rgb(51, 102, 255) 30%, rgba(51, 102, 255, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)")
              else if (+data > 10 && +data < 20) setTempColors("linear-gradient(to left, rgb(255, 255, 0) 30%, rgba(255, 255, 0, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)")
              else if (+data > 20 && +data < 30) setTempColors("linear-gradient(to left, rgb(255, 153, 102) 30%, rgba(255, 153, 102, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)")
              else if (+data > 30 && +data < 40) setTempColors("linear-gradient(to left, rgb(153, 0, 204) 30%, rgba(153, 0, 204, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)")
              else if (+data > 40) setTempColors("linear-gradient(to left, rgb(204, 0, 0) 30%, rgba(204, 0, 0, 0.7) 35%, rgba(255, 255, 255, 0.7) 40%, white 45%)")
              //console.log("Enter in the dinamic color if");
            }
            //console.log(tempColors);
          })
          .catch(console.error);

        //Min tempature
        ManageAPI(Infos.TownName, "temp_min")
          .then((data) => {
            //console.log("API response:", data);
            setminTempature(data);
          })
          .catch(console.error);

        //Max tempature
        ManageAPI(Infos.TownName, "temp_max")
          .then((data) => {
            //console.log("API response:", data);
            setMaxTempatre(data);
          })
          .catch(console.error);

        //Humidity
        ManageAPI(Infos.TownName, "humidity")
          .then((data) => {
            //console.log("API response:", data);
            setHumidity(data);
          })
          .catch(console.error);

        //Feels Like 
        ManageAPI(Infos.TownName, "feels_like")
          .then((data) => {
            //console.log("API response:", data);
            setfeelsLike(data);
          })
          .catch(console.error);

        //Clouds
        ManageAPI(Infos.TownName, "clouds")
          .then((data) => {
            //console.log("API response:", data);
            setclouds(data);
          })
          .catch(console.error);

        //Wind Speed
        ManageAPI(Infos.TownName, "wind speed")
          .then((data) => {
            //console.log("API response:", data);
            setwindSpeed(data);
          })
          .catch(console.error);

        //Pressure
        ManageAPI(Infos.TownName, "pressure")
          .then((data) => {
            //console.log("API response:", data);
            setpressure(data);
          })
          .catch(console.error);

        //Wind deg
        ManageAPI(Infos.TownName, "wind deg")
          .then((data) => {
            //console.log("API response:", data);
            setwinddeg(data);
          })
          .catch(console.error);

        //Wind gust
        ManageAPI(Infos.TownName, "wind gust")
          .then((data) => {
            //console.log("API response:", data);
            setwindgust(data);
          })
          .catch(console.error);
      }
    }

    const interval = setInterval(startManageAPI, 1000);

    return () => clearInterval(interval)
  }, [Infos.TownName]);

  //Chack mobil size
  const [isMobil, setIsMobil] = useState<boolean>(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobil(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mainDiv">
      <main>
        <div className="tempatureDiv" style={{ background: tempColors }}>
          <h1 className="tempaterureHeader"> {temperature} °C</h1>
        </div>
        <div className="secodanryTemps">
          <h2>Min Temp: <p style={{ fontSize: "45px", color: "blue" }}>{minTempatre} °C</p></h2>
          {!isMobil && <div className="lineDiv" />}
          {isMobil && <div className="lineDiv" />}

          <h2>Max Temp: <p style={{ fontSize: "45px", color: "red" }}>{maxTempature} °C</p></h2>
        </div>
        <div>
          <h2 className="feelsLike">Feels Like: {feelsLike} °C</h2>
        </div>

        <hr className="hrColor" />

        {/* first row  */}
        <div className="otherInfosDiv">
          <div className="tileStyleContainer">
            <h2>Description: <br /> <p style={{ fontSize: "50px" }}>{description}</p></h2>
          </div>
          <br />
          <div className="tileStyleContainer">
            <h2>Humidity: <br /> <p style={{ fontSize: "50px" }}>{humidity} %</p></h2>
          </div>
        </div>

        <br />

        {/* second row */}
        <div className="otherInfosDiv">
          <div className="tileStyleContainer">
            <h2>Clouds percentage: <br /> <p style={{ fontSize: "50px" }}>{clouds} %</p></h2>
          </div>
          <br />
          <div className="tileStyleContainer">
            <h2>Wind Speed: <br /> <p style={{ fontSize: "50px" }}>{windSpeed} km/h</p></h2>
          </div>
        </div>

        <br />

        {/* thrred row */}
        <div className="otherInfosDiv">
          <div className="tileStyleContainer">
            <h2>Wind deg: <br /> <p style={{ fontSize: "50px" }}>{winddeg}°</p></h2>
          </div>
          <br />
          <div className="tileStyleContainer">
            <h2>Wind Gust: <br /> <p style={{ fontSize: "50px" }}>{windgust} km/h</p></h2>
          </div>
        </div>

        <br />

        {/* last row */}
        <div className="otherInfosDiv">
          <div className="tileStyleContainer2">
            <h2>Pressure: <br /> <p style={{ fontSize: "50px" }}>{pressure} hPa</p> </h2>
          </div>
        </div>

        <hr className="hrColor" />

        <div className="forcast">
          <h2 className="forcastHeading">Forcast</h2>
          <br />

          {/* cards */}
          <div className="forcastDiv">
            <br />
            <WeatherCards />
          </div>
        </div>
      </main>
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