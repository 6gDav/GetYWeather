import Infos from '../UserDate/UserDate';
import stateAndCapital from './GeoLocateComponentsForClock/State-And-Capital';
import countryCodeAndRealName from './GeoLocateComponentsForClock/CountryCode-And-RealName';
import GetTheValueViaKey from './Logic/Record-Iterator';
import GetCountryByCity from './Logic/Get-Country-By-City';
import GetContinentByCity from './Logic/Get-Continet-By-City-Name';
import AskTheClockMaker from "./Logic/The-Actudal-Clcok-Of-The-Town";

export function makeToWorkTheClok() {
    (async () => {
        const town: string = Infos.TownName;
        let counntry: NullAndString = await GetCountryByCity(town);

        if (counntry) {
            const fullNameOfCountry: NullAndString = GetTheValueViaKey(countryCodeAndRealName, counntry);
            const capitalName: NullAndString = GetTheValueViaKey(stateAndCapital, fullNameOfCountry ?? "");
            const cityContient: NullAndString = await GetContinentByCity(capitalName);
            Infos.Continent = cityContient ?? '';

            if (cityContient && capitalName) {
                AskTheClockMaker(cityContient, capitalName);
            }
            else {
                console.error('Some components are null');
            }
        }
        else {
            console.error('Failded to request the current clock of the town.');
        }

    })();
}