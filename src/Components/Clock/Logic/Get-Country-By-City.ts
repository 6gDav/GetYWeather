export default async function GetCountryByCity(city: string): Promise<string | null> {
    const API_KEY = '9dce43d6f9c9dd0aa623390f1f7343c8';
    const baseUrl = 'http://api.openweathermap.org/geo/1.0/direct';

    try {
        const response = await fetch(`${baseUrl}?q=${city}&limit=1&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`Hiba történt: ${response.statusText}`);
        }

        const data = await response.json();

        if (data && data.length > 0) {
            return data[0].country; // Az ország neve lesz visszaadva
        }
        else {
            console.error('Nem található település.');
            return null;
        }
    }
    catch (error) {
        console.error('Hiba történt:', error);
        return null;
    }
}