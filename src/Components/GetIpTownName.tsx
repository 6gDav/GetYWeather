import { useEffect } from 'react';
import Infos from './UserDate/UserDate';
import { makeToWorkTheClok } from './Clock/MakeWorkTheClock';

export let cityName: string;

function GetIpTownName() {
    //Set the clcok according to the user IP addres
    useEffect(() => {
        //fetch("http://ip-api.com/json")
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                Infos.TownName = data.city;
                makeToWorkTheClok(); 
            });
    }, []);

    return null;
}

export default GetIpTownName;