import { MouseEvent, useState } from 'react';
import sendEmail from '../EmailSend';

import './Style/FooterSection.css'

function FooterSection() {
    const [emailAddres, setemailAddress] = useState<string>();

    const SenButtomMangger = (event: MouseEvent) => {
        event.preventDefault();
        if (emailAddres) {
            sendEmail("Thanks for the subscribe", "Thanks for the subscription it is very kind of you if you want to cancel the subscription jusr make contact with us.", emailAddres, emailAddres)
        }
        else {
            alert("Enter an email address.");
        }
    };

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-cta pt-5 pb-5">

                    {/* Accesability */}
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>We don't have location.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>We don't have phone number.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>We don't have email number.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-2 col-lg-4 mb-50">
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>

                                {/* Links */}
                                <ul>
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="/features">Features</a></li>
                                    <li><a href="/pricing">Pricing</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">

                            {/* Subscribe container */}
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" onChange={(e) => setemailAddress(e.target.value)} />
                                        <button><i className="fab fa-telegram-plane" onClick={SenButtomMangger}>Send</i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection;