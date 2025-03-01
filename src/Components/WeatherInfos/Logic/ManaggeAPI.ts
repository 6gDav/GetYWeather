type weatherTypes =  'townName' | 'temperature' | 'humidity' | 'description';

const apiKey = '9dce43d6f9c9dd0aa623390f1f7343c8';

export default async function ManageAPI(city: string, weatherType: string): Promise<NullAndString> {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === 200) { 
            switch (weatherType) 
            {
                case 'townName':
                    return data.name;
                case 'temperature':
                    return data.main.temp.toString();
                case 'humidity':
                    return data.main.humidity.toString();
                case 'description':
                    return data.weather[0].description;
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