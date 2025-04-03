import { useState, useEffect } from 'react';
import Infos from '../UserDate/UserDate';

function PlcaceHeader() {
  //Varibles
  const [fontSize, setFontSize] = useState<number>(100);
  const [townName, setTownName] = useState<string>(Infos.TownName);

  //Change chanckers
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setFontSize(45);
      }
      else {
        setFontSize(100);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  //Set the town names
  useEffect(() => {
    const updateTownName = () => {
      setTownName(Infos.TownName);
    };

    const interval = setInterval(updateTownName, 1000);

    return () => clearInterval(interval);
  }, [Infos.TownName]);

  return (
    <div style={{ fontSize: fontSize }}>{townName || "Place not found"}</div>
  );
}

export default PlcaceHeader;
