import { useState, useEffect } from 'react';
import Infos from '../UserDate/UserDate';

import './PlaceHeaderStyle.css'

function PlcaceHeader() {
  //Varibles
  const [townName, setTownName] = useState<string>(Infos.TownName); //The searched city

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
      <h1 className="headerFontSizeStyle">{townName || "Place not found"}</h1>
    </div>
  );
}

export default PlcaceHeader;
