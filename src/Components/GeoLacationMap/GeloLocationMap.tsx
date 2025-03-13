import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Style, Icon } from "ol/style";
import Infos from "../UserDate/UserDate"; 

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | null>(null);
  const vectorSource = new VectorSource();

  const [townName, setTownName] = useState<NullAndString>(); 

  useEffect(() => { 
    setTownName(Infos.TownName);
  }, [Infos.TownName]);

  useEffect(() => {
    if (!mapRef.current) return;

    const newMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
        new VectorLayer({
          source: vectorSource,
        }),
      ],
      view: new View({
        center: fromLonLat([ 1.50735, 52.12776]), 
        zoom: 6,
      }),
    });

    setMap(newMap);

    if (Infos.TownName) {
      searchCity(Infos.TownName);
    }

    return () => newMap.setTarget(undefined);
  }, []);

  const searchCity = async (cityName: string) => {
    if (!cityName) return;

    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(townName ?? 'London')}`);
    
    const data = await response.json();

    if (data.length > 0) {
      const { lon, lat } = data[0];
      const coords = fromLonLat([parseFloat(lon), parseFloat(lat)]);

      const marker = new Feature({
        geometry: new Point(coords),
      });

      marker.setStyle(
        new Style({
          image: new Icon({
            src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg",
            scale: 0.05,
          }),
        })
      );

      vectorSource.clear();
      vectorSource.addFeature(marker);

      map?.getView().animate({ center: coords, zoom: -50 });
    }
  };

  return (
    <div>
      <div ref={mapRef} style={{ width: "100%", height: "1000px", borderRadius: "5%" }} />
    </div>
  );
};

export default MapComponent;
