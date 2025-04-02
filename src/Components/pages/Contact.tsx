import { IonContent } from '@ionic/react';
import React from 'react'

import FooterSection from '../Footer/FooterSection';
import './style/PagesStyle.css'
import './style/ContactStyle.css'


function Contact() {
    return (
        <IonContent>
            <div className="feature-container">
                <h1 className="pageTitle">Contact</h1>
                <hr />

                {/* Török Dávid */}
                <div className="peronalInfo">
                    <h2 style={{color: "#151414"}}>Török Dávid</h2>
                    <h3>Discription</h3>
                    <p className="discription">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    <ul>
                        <li>Tel: 69 69 6969 6969</li>
                        <li>Email: mocking_data@gmail.com</li>
                    </ul>
                </div>
                <hr />

                {/* Bathó István Bence */}
                <div className="peronalInfo">
                    <h2 style={{color: "#151414"}}>Bathó István Bence</h2>
                    <h3>Discription</h3>
                    <p className="discription">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    <ul>
                        <li>Tel: 69 69 6969 6969</li>
                        <li>Email: mocking_data2@gmail.com</li>
                    </ul>
                </div>
                <hr />

                {/* Pócs Zsombor */}
                <div className="peronalInfo">
                    <h2 style={{color: "#151414"}}>Pócs Zsombor</h2>
                    <h3>Discription</h3>
                    <p className="discription">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    <ul>
                        <li>Tel: 69 69 6969 6969</li>
                        <li>Email: mocking_data3@gmail.com</li>
                    </ul>
                </div>
                <br />
            </div>

            <FooterSection />
        </IonContent>
    )
}

export default Contact