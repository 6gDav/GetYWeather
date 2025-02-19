const GetContinentByCity = async (city: NullAndString): Promise<NullAndString> => {
    //if (!city) return null; // Ha nincs város megadva, ne is próbálkozzon

    const apiKey = 'b56615eb035c4135b259729965782e55';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city ?? '')}&key=${apiKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            return null;
        }

        const continent = data.results[0].components.continent || null;
        //console.log("Success to get request. (OpenCage) Data:", JSON.stringify(data, null, 2));

        return continent || null;
    } catch (error: any) {
        console.error('Error occurred:', error.message);
        return null;
    }
};

export default GetContinentByCity;
