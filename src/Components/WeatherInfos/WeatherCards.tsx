import { useEffect, useState } from 'react'
import Infos from '../UserDate/UserDate';

interface WeatherData {
  dt_txt: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
}

function WeatherCards() {
  const [data, setData] = useState<WeatherData[]>([]);
  const [infos, setinfos] = useState<any>();

  //run if the searched city name change
  useEffect(() => {
    if (Infos.Data) {
      let parsedData: any = "";
      try {
        parsedData = JSON.parse(Infos.Data); //parse the city to json
      }
      catch (error) {
        console.error("Error here " + error);
        return;
      }

      const forecastData = parsedData.list.filter((item: WeatherData) => item.dt_txt.includes("12:00:00")); //search every item that contains the value

      setData(forecastData);
    }
  }, [Infos.Data]);

  useEffect(() => {
    try {
      setinfos(Infos.Data);
    }
    catch (error) {
      console.log("An error occurd" + error);
    }
  }, [Infos.Data]);

  return (
    <div>
      {data.map((item) => (
        <div key={item.dt_txt} className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center" style={{ borderRadius: "25px" }}>
          <p className="font-bold">{new Date(item.dt_txt).toLocaleDateString('en-EN', { weekday: 'long' })}</p>
          <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
          <p className="font-semibold" style={{ fontSize: "45px" }}>{item.main.temp}°C</p>
          <p className="text-gray-600">{item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherCards;
