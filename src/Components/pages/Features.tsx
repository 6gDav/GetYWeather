import React from 'react'
import FooterSection from '../Footer/FooterSection';
import { IonContent } from '@ionic/react';

import './style/PagesStyle.css'

function Features() {
  return (
    <IonContent>
      <div className="feature-container">
        <h1 className='pageTitle'>Features</h1>

        {/* Forcasting */}
        <hr />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Forcasting<span className="text-body-secondary"></span></h2>
            <p className="lead">This is provide future weather datails, like temperature and a desription about the weather.</p>
          </div>
          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="../../../public/Images/ForcastingImage.png" width="500" height="500" alt="Forecasting Image" />
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Set an Alart */}
        <div className="row featurette">
          <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="../../../public/Images/SetAnAlert.png" width="500" height="500" alt="Forecasting Image" />
          </div>
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Set an Alart<span className="text-body-secondary"></span></h2>
            <p className="lead">This feature allows you to set an alarm with the desription to what do want to on that day.</p>
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Ask our AI */}
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Ask our AI<span className="text-body-secondary"></span></h2>
            <p className="lead">You can make a simple converstation about the weather.</p>
          </div>
          <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="../../../public/Images/AIChat.png" width="500" height="500" alt="Forecasting Image" />
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* World wide clock */}
        <div className="row featurette">
          <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="../../../public/Images/WorlWideClock.png" width="500" height="500" alt="Forecasting Image" />
          </div>
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">World wide clock<span className="text-body-secondary"></span></h2>
            <p className="lead">This clock is going to show the exact time in your desired town along with weather datas.</p>
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Your location on a Map */}
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Your location on a Map<span className="text-body-secondary"></span></h2>
            <p className="lead">The map will show the city which you searched for.</p>
          </div>
          <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="../../../public/Images/Map.png" width="500" height="500" alt="Forecasting Image" />
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Set a Theme */}
        <div className="row featurette">
          <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="../../../public/Images/Theme.png" width="500" height="500" alt="Forecasting Image" />
          </div>
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Set a Theme<span className="text-body-secondary"></span></h2>
            <p className="lead">This is a basic function on every web page. This basically allows you to change the color of the page.</p>
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Responsive design */}
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Responsive design<span className="text-body-secondary"></span></h2>
            <p className="lead">This is a basic function too. If you set the page width lower or higher the responsibility will adjust the components in the right position.</p>
          </div>
          <div className="col-md-5">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="../../../public/Images/Responsive.png" width="500" height="500" alt="Forecasting Image" />
          </div>
        </div>

        <br />
        <br />

      </div>
      <FooterSection />
    </IonContent>
  )
}

export default Features;