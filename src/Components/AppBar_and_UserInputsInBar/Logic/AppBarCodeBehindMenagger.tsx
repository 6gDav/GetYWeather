import { useState } from 'react';
import Infos from '../../UserDate/UserDate';
import { makeToWorkTheClok } from '../../Clock/MakeWorkTheClock';

//the function require the search buttom instance and the entered town name too
export const useAppBar = (searchButtomRef: React.RefObject<HTMLButtonElement>, searchInputRef: React.RefObject<HTMLInputElement>) => {
    //this is the function to handel the search buttom
    const handleClick = () => {
        if (searchButtomRef.current) //if the buttom is a valid instance
        {
            Infos.TownName = searchInputRef.current?.value ?? ""; //if the searchet town a valid town and it set to equal with the Infos town. Another class
            //console.log('Class ' + Infos.TownName); //Test Log
            makeToWorkTheClok(); //runing the clock
        }
    };

    return { handleClick }; //return the buttom code behind function
};

export const useTheme = () => {
    //Theme hooks
    const [themeText, setThemeText] = useState<string>("Light"); //the text of the curent theme scheme reverse
    const [darkMode, setDarkMode] = useState<boolean>(false); //the buttom switch mode

    const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(prevDarkMode => {
            document.documentElement.style.setProperty("--ion-background-color", prevDarkMode ? "#ffffff" : "#000000"); //set to light 
            document.documentElement.style.setProperty("--ion-text-color", prevDarkMode ? "#000000" : "#ffffff"); //set to dark
            setThemeText(prevDarkMode ? "Dark" : "Light"); //the text setup
            return !prevDarkMode; //return the revers of the condition
        });
    };

    return { themeText, handleThemeChange }; //return the two parameter (Text, colors)
};
