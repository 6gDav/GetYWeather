import React, { useState, useEffect } from 'react';
import Infos from '../UserDate/UserDate'; 
import './Styles/HeaderDesign.css'
import { isPlatform } from '@ionic/react';

function PlcaceHeader() {
  const [fontSize, setFontSize] = useState<number>(55);
  const [townName, setTownName] = useState<string>(Infos.TownName);

  useEffect(() => {
    const updateTownName = () => {
      setTownName(Infos.TownName);
    };

    const interval = setInterval(updateTownName, 1000); 

    return () => clearInterval(interval);
  }, [Infos.TownName]);

  return (
    <div style={{fontSize: fontSize}}>{townName || 'Place not found'}</div>
  );
}

export default PlcaceHeader;
