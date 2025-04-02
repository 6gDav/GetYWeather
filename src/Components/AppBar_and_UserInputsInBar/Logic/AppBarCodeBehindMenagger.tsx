import { useState, useRef } from 'react';
import Infos from '../../UserDate/UserDate';
import { makeToWorkTheClok } from '../../Clock/MakeWorkTheClock';

export const useAppBar = (searchButtomRef: React.RefObject<HTMLButtonElement>, searchInputRef: React.RefObject<HTMLInputElement>) => {

    const handleClick = () => {
        if (searchButtomRef.current) {
            Infos.TownName = searchInputRef.current?.value ?? "";
            //console.log('Class ' + Infos.TownName); //Test Log
            makeToWorkTheClok();
        }
    };

    return { handleClick };
};

export const useTheme = () => {
    //Theme hooks
    const [themeText, setThemeText] = useState<string>("Light");
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(prevDarkMode => {
            document.documentElement.style.setProperty("--ion-background-color", prevDarkMode ? "#ffffff" : "#000000");
            document.documentElement.style.setProperty("--ion-text-color", prevDarkMode ? "#000000" : "#ffffff");
            setThemeText(prevDarkMode ? "Dark" : "Light");
            return !prevDarkMode;
        });
    };

    return { themeText, handleThemeChange };
};
