import React from 'react';

const WeatherInfos = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="../Images/thermometer.jpg" className="card-img-top" alt="Weather Image" title="weather image"/>
      <h5 className="card-title">Card title</h5>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default WeatherInfos;