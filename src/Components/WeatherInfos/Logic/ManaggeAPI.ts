import Infos from '../../UserDate/UserDate';

//the searchable values
type weatherTypes = 'townName' | 'main' | 'temperature' | 'humidity' | 'description' | 'clouds' | 'wind speed' | 'wind deg' | 'wind gust' | 'feels_like' | 'temp_min' | 'temp_max' | 'pressure';

const apiKey = import.meta.env.VITE_OPENWEATHER;

export default async function ManageAPI(city: string, weatherType: weatherTypes): Promise<NullAndString> {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const responseForCards = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${apiKey}`);

        const data = await response.json();
        const data2 = await responseForCards.json();
        Infos.Data = JSON.stringify(data2);

        //if the data code is OK cahck the vlaue of the weatherType and return that value form the api
        if (data.cod === 200) {
            switch (weatherType) {
                case "townName":
                    return data.name || "Unknown";
                case "main":
                    return data.weather?.[0]?.main || "Unknown";
                case "temperature":
                    return data.main?.temp?.toString() || "N/A";
                case "humidity":
                    return data.main?.humidity?.toString() || "N/A";
                case "description":
                    return data.weather?.[0]?.description || "N/A";
                case "clouds":
                    return data.clouds?.all?.toString() || "N/A";
                case "wind speed":
                    return data.wind?.speed?.toString() || "N/A";
                case "wind deg":
                    return data.wind?.deg?.toString() || "N/A";
                case "wind gust":
                    return data.wind?.gust?.toString() || "N/A";
                case "feels_like":
                    return data.main?.feels_like?.toString() || "N/A";
                case "temp_min":
                    return data.main?.temp_min?.toString() || "N/A";
                case "temp_max":
                    return data.main?.temp_max?.toString() || "N/A";
                case "pressure":
                    return data.main?.pressure?.toString() || "N/A";
                default:
                    return "Invalid weatherType";
            }
        } else {
            console.error(`Error fetching weather data: ${data.message}`);
            if (confirm("Not existing city. Please enter an existing city.")) {
                location.reload();
            }
            else {
                location.reload();
            }
            return null;
        }
    } catch (error) {
        console.error("Error fetching weather data: " + error);
        if (confirm("Not existing city. Please enter an existing city.")) {
            location.reload();
        }
        else {
            location.reload();
        }
        return null;
    }
}