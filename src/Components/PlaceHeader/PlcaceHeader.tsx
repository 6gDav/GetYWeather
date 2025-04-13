import { useState, useEffect } from 'react';
import Infos from '../UserDate/UserDate';

function PlcaceHeader() {
  //Varibles
  const [fontSize, setFontSize] = useState<number>(); //Font size
  const [townName, setTownName] = useState<string>(Infos.TownName); //The searched city

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setFontSize(45);
      }
      else {
        setFontSize(100);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Set the town names
  useEffect(() => {
    const updateTownName = () => {
      setTownName(Infos.TownName);
    };

    const interval = setInterval(updateTownName, 1000); //if the towh name change set it to the setted town nem
    return () => clearInterval(interval);
  }, [Infos.TownName]);

  return (
    <div>
      <h1 style={{ fontSize: fontSize || 100 }}>{townName || "Place not found"}</h1>
    </div>
  );
}

export default PlcaceHeader;
