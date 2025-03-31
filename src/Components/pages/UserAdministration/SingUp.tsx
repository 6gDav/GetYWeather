import { IonContent, IonRouterLink } from '@ionic/react';
import React from 'react'

import '../style/SingUpStyle.css';
import '../style/LoginStyle.css';

function SingUp() {
    return (
        <IonContent>
            <form className='login-container'>
                <h1 className='pagetitle'>Sign Up</h1>
                <div className="mb-3">
                    <label>User name</label>
                    <input type="text" className="form-control" placeholder="User name" />
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="mb-3">
                    <label>Password again</label>
                    <input type="password" className="form-control" placeholder="Enter password again" />
                </div>
                <br />
                <div className="d-grid gap-3 justify-content-center mb-5">
                    <button type="submit" className="btn btn-warning">
                        Sign Up
                    </button>
                    <IonRouterLink href="/login" className="btn btn-outline-light me-2">
                        Login
                    </IonRouterLink>
                    <a href="./GUP.pdf" className='anchorStyle'>GUP documentaion.</a>
                </div>
                <br />
            </form>
        </IonContent>
    )
}

export default SingUp;