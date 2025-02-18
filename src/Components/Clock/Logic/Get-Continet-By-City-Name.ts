const GetContinentByCity = async (city: NullAndString): Promise<NullAndString> => {
    const apiKey = 'b56615eb035c4135b259729965782e55';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city ?? "")}&key=${apiKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();

        if (data.results.length === 0) {
            return null;
        }

        const continent = data.results[0].components.continent;
        return continent || null;
    }
    catch (error: any) {
        console.log('Error occurred: ' + error.message);
        return null;
    }
};

export default GetContinentByCity;