import Infos from "../../UserDate/UserDate";

type weatherTypes = 'townName' | 'main' | 'temperature' | 'humidity' | 'description' | 'clouds' | 'wind speed' | 'wind deg' | 'wind gust' | 'feels_like' | 'temp_min' | 'temp_max' | 'pressure';

const apiKey = '9dce43d6f9c9dd0aa623390f1f7343c8';

export default async function ManageAPI(city: string, weatherType: weatherTypes): Promise<NullAndString> {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const responseForCards = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=hu&appid=${apiKey}`);

        const data = await response.json();
        Infos.Data = await responseForCards.json();

        if (data.cod === 200) {
            switch (weatherType) {
                case 'townName':
                    return data.name;
                case 'main':
                    return data.weather[0].main;
                case 'temperature':
                    return data.main.temp.toString();
                case 'humidity':
                    return data.main.humidity.toString();
                case 'description':
                    return data.weather[0].description;
                case 'clouds':
                    return data.clouds.all.toString();
                case 'wind speed':
                    return data.wind.speed.toString();
                case 'wind deg':
                    return data.wind.deg.toString();
                case 'wind gust':
                    return data.wind.gust.toString();
                case 'feels_like':
                    return data.main.feels_like.toString();
                case 'temp_min':
                    return data.main.temp_min.toString();
                case 'temp_max':
                    return data.main.temp_max.toString();
                case 'pressure':
                    return data.main.pressure.toString();
                default:
                    return 'Invalid weatherType';
            }
        } else {
            console.error(`Error fetching weather data: ${data.message}`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}