import { useEffect } from 'react';
import Infos from './UserDate/UserDate';
import { makeToWorkTheClok } from './Clock/MakeWorkTheClock';

export let cityName: string;

function GetIpTownName() {
    useEffect(() => {
        fetch("http://ip-api.com/json")
            .then((res) => res.json())
            .then((data) => {
                Infos.TownName = data.city;
                makeToWorkTheClok();
            });
    }, []);

    return null;
}

export default GetIpTownName;