//Return the country by the city name
export default async function GetCountryByCity(city: string): Promise<NullAndString> {

    const API_KEY = import.meta.env.VITE_OPENWEATHER;
    const baseUrl = "https://api.openweathermap.org/geo/1.0/direct";

    try {
        const response = await fetch(`${baseUrl}?q=${city}&limit=1&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`Error occurnd: ${response.statusText}`);
        }

        const data = await response.json();

        if (data && data.length > 0) {
            return data[0].country;
        }
        else {
            console.error("City is not found");
            if (confirm("Not existing city. Please enter an existing city.")) {
                location.reload();
            }
            else {
                location.reload();
            }
            return null;
        }
    }
    catch (error) {
        console.error("Error occurred: ", error);
        if (confirm("Not existing city. Please enter an existing city.")) {
            location.reload();
        }
        else {
            location.reload();
        }
        return null;
    }
}