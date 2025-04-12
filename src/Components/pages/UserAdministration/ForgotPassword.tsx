import { MouseEvent, useState } from 'react';
import { IonContent } from '@ionic/react';
import sendEmail from '../../EmailSend';

import '../style/LoginStyle.css'

function ForgotPassword() {
    const [emailAddres, setemailAddress] = useState<string>();

    const SenButtomMangger = (event: MouseEvent) => {
        event.preventDefault();
        
        if (emailAddres) {
            sendEmail("Forgot passworld", "If you forgot your passworld please make contact with us", emailAddres, emailAddres)
        }
        else
        {
            alert("Enter an email address.");
        }
    };

    return (
        <IonContent>
            <div className="login-container">
                <h1 className="pagetitle">Forgot Password</h1>

                {/* email address */}
                <form>
                    <div data-mdb-input-init className="form-outline mb-3">
                        <input type="email" id="form2Example1" className="form-control" required onChange={(e) => setemailAddress(e.target.value)} />
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                    </div>

                    {/* Send buttom */}
                    <div className="d-grid gap-3 justify-content-center">
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-block mb-5" onClick={SenButtomMangger}>Send</button>
                    </div>
                </form>
            </div>
        </IonContent>
    )
}

export default ForgotPassword;