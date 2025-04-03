import { MouseEvent } from 'react';
import { IonContent } from '@ionic/react';

import '../style/LoginStyle.css'

function ForgotPassword() {
    const SenButtomMangger = (event: MouseEvent) => {
        alert("Enter an Email adress.");
        event.preventDefault();
    };

    return (
        <IonContent>
            <div className="login-container">
                <h1 className="pagetitle">Forgot Password</h1>
                <form>
                    <div data-mdb-input-init className="form-outline mb-3">
                        <input type="email" id="form2Example1" className="form-control" required/>
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                    </div>

                    <div className="d-grid gap-3 justify-content-center">
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-block mb-5" onClick={SenButtomMangger}>Send</button>
                    </div>
                </form>
            </div>
        </IonContent>
    )
}

export default ForgotPassword;