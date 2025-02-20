import React, { useState, useEffect } from 'react';
import Infos from '../UserDate/UserDate'; // Assuming Infos is an object
import './Styles/HeaderDesign.css'

function PlcaceHeader() {
  const [townName, setTownName] = useState(Infos.TownName);

  useEffect(() => {
    const updateTownName = () => {
      setTownName(Infos.TownName);
    };

    const interval = setInterval(updateTownName, 1000); 

    return () => clearInterval(interval);
  }, [Infos.TownName]);


  return (
    <div className='textFonrSizeOfHader'>{townName}</div>
  );
}

export default PlcaceHeader;
