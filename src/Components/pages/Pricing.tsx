import { IonContent } from '@ionic/react';
import FooterSection from '../Footer/FooterSection';

import './style/PagesStyle.css'

function Pricing() {
    return (
        <IonContent>
            <div className="feature-container">
                <h1 className='pageTitle'>Pricing</h1>
                <hr />
                <br />
                <div className="container py-3">
                    <main>
                        <div className="d-flex flex-column mb-3 text-center">
                            <div className="col">
                                <div className="card mb-4 rounded-3 shadow-sm">
                                    <div className="card-header py-3 text-bg-dark border-primary">
                                        <h4 className="my-0 fw-normal">Free</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">Free<small className="text-body-secondary fw-light"></small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li className='fs-5'>Forcast</li>
                                            <li className='fs-5'>Email and SMS noticifation</li>
                                            <li className='fs-5'>World wide clokc</li>
                                            <li className='fs-5'>Map</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card mb-4 rounded-3 shadow-sm">
                                    <div className="card-header py-3 text-bg-warning border-primary">
                                        <h4 className="my-0 fw-normal">Pro</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">Free<small className="text-body-secondary fw-light"></small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li className='fs-5'>Forcast</li>
                                            <li className='fs-5'>Email and SMS noticifation</li>
                                            <li className='fs-5'>World wide clokc</li>
                                            <li className='fs-5'>Map</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card mb-4 rounded-3 shadow-sm border-primary">
                                    <div className="card-header py-3 text-bg-primary border-primary">
                                        <h4 className="my-0 fw-normal">Enterprise</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">Free<small className="text-body-secondary fw-light"></small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li className='fs-5'>Forcast</li>
                                            <li className='fs-5'>Email and SMS noticifation</li>
                                            <li className='fs-5'>World wide clokc</li>
                                            <li className='fs-5'>Map</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <FooterSection />
        </IonContent>
    )
}

export default Pricing;