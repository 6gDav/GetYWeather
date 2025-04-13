import { useState, useEffect } from 'react';
import Infos from '../UserDate/UserDate';

function PlcaceHeader() {
  //Varibles
  const [fontSize, setFontSize] = useState<number>(100); //Font size
  const [townName, setTownName] = useState<string>(Infos.TownName); //The searched city

  //Change chanckers
  useEffect(() => {
    const handleResize = () => {
      //if the page width less then 600 
      if (window.innerWidth < 600) {
        setFontSize(45); //set the font size
      }
      else {
        setFontSize(100); //if bigger
      }
    }

    window.addEventListener("resize", handleResize); //watch the move of the page
    return () => window.removeEventListener("resize", handleResize); // remove the listener
  }, [window.innerWidth]);

  //Set the town names
  useEffect(() => {
    const updateTownName = () => {
      setTownName(Infos.TownName);
    };

    const interval = setInterval(updateTownName, 1000); //if the towh name change set it to the setted town nem

    return () => clearInterval(interval);
  }, [Infos.TownName]);

  return (
    <div style={{ fontSize: fontSize }}>{townName || "Place not found"}</div>
  );
}

export default PlcaceHeader;
