import { IonContent } from '@ionic/react';
import React from 'react'

import '../style/SingUpStyle.css';

function SingUp() {
    return (
        <IonContent>
            <div className='login-container'>
                <h1 className='pagetitle'>Sing-Up</h1>
                <form action="">

                    <div data-mdb-input-init className="form-outline mb-4 emailAdressDiv">
                        <label htmlFor="" className='emailInput'>
                            <p>Emai address:</p> 
                            <input type="email" id="form2Example1" className="form-control" />
                        </label>
                    </div>
                </form>
            </div>
        </IonContent>
    )
}

export default SingUp;