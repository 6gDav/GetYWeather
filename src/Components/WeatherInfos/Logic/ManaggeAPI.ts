const apiKey = '9dce43d6f9c9dd0aa623390f1f7343c8';
export default async function ManageAPI(city: string): Promise<NullAndString> {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === 200) { 
            return data.main.temp;
        } else {
            console.error(`Error fetching weather data: ${data.message}`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}