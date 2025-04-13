import Infos from '../UserDate/UserDate';
import stateAndCapital from './GeoLocateComponentsForClock/State-And-Capital';
import countryCodeAndRealName from './GeoLocateComponentsForClock/CountryCode-And-RealName';
import GetTheValueViaKey from './Logic/Record-Iterator';
import GetCountryByCity from './Logic/Get-Country-By-City';
import GetContinentByCity from './Logic/Get-Continet-By-City-Name';
import AskTheClockMaker from './Logic/The-Actudal-Clcok-Of-The-Town';

export function makeToWorkTheClok() {
    (async () => {
        const town: string = Infos.TownName; //set the the town local varible basicly to the given town name
        let counntry: NullAndString = await GetCountryByCity(town); //throw back the country of the selcted town

        if (counntry) //if the return value is valid
        {
            const fullNameOfCountry: NullAndString = GetTheValueViaKey(countryCodeAndRealName, counntry); //selected the country code like Hungary: HU, Engalng: EN from a Reacord list by the contry
            const capitalName: NullAndString = GetTheValueViaKey(stateAndCapital, fullNameOfCountry ?? ""); //the capital of the county serlected form a record too
            const cityContient: NullAndString = await GetContinentByCity(capitalName); // the contienet by the capital name
            Infos.Continent = cityContient ?? '';

            if (cityContient && capitalName) //if  the contient and the capital are valid 
            { 
                AskTheClockMaker(cityContient, capitalName); // send the datails to the CloclkMaker function
            }
            else {
                console.error("Some components are null");
            }
        }
        else {
            console.error("Failded to request the current clock of the town.");
            const clockHeadingEL: HTMLHeadElement = document.getElementById("clock")! as HTMLHeadElement; 
            clockHeadingEL.innerText = "Faild to get the time."; //set a faild text
        }

    })();
}