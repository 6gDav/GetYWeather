import React, { useEffect, useState } from 'react'
import Infos from '../UserDate/UserDate';

interface WeatherData {
  dt_txt: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
}

function WeatherCards() {
  const [data, setData] = useState<WeatherData[]>([]);

  useEffect(() => {
    if (Infos.Data) {
      let parsedData: any = ''
      try {

        parsedData = JSON.parse(Infos.Data);  //! Itt a hiba
      } 
      catch (error) {
        console.error('Itt a hiba!!!' + error);
        return;
      }
      
      const forecastData = parsedData.list.map((item: WeatherData) => {
        item.dt_txt.includes("12:00:00")  // pl. 12:00-kori adatokat jelenítjük meg
      });

      setData(forecastData);
    }
  }, [Infos.Data]);

  return (
    <div>
      {data.map((item) => (
        <div key={item.dt_txt} className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center">
          <p className="font-bold">{new Date(item.dt_txt).toLocaleDateString('hu-HU', { weekday: 'long' })}</p>
          <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
          <p className="text-xl font-semibold">{item.main.temp}°C</p>
          <p className="text-gray-600">{item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherCards;
