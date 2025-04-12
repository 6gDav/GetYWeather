import { MouseEvent, useState } from 'react';
import { IonContent, IonRouterLink } from '@ionic/react';
import sendEmail from '../../EmailSend';
import store from '../../storage';

import '../style/SingUpStyle.css';
import '../style/LoginStyle.css';

function SingUp() {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordagain, setPasswordAgain] = useState<string>('');

    const SenButtomMangger = async (event: MouseEvent) => {
        event.preventDefault();

        if (username && email && password && passwordagain) 
        {
            const users = (await store.get('users')) || [];
            const exists = users.some((u: any) => u.username === username || u.email === email);

            if (password !== passwordagain)
            {
                alert("The passwolrds are not matching.");
                location.reload();
                return;
            }
            
            if (exists) 
            {
                alert("That email or username is already registered.");
                location.reload();
                return;
            }
            else
            {
                console.log('Not exist')
                users.push({username, email, password});
                await store.set('users', users);

                sendEmail("Dear, " + username, "We hope you will enjoy our services. Here is your registration confirmation.", email, email);
            }
            setUsername("");
            setEmail("");
            setPassword("");
            setPasswordAgain("");
            
        }
        else 
        {
            alert("Please give a username, email address, passwolrd.");
        }
    };

    return (
        <IonContent>
            <form className="login-container">
                <h1 className="pagetitle">Sign Up</h1>

                {/* User name */}
                <div className="mb-3">
                    <label>User name</label>
                    <input type="text" className="form-control" placeholder="User name" onChange={(e) => setUsername(e.target.value)} required />
                </div>

                {/* Email address */}
                <div className="mb-3">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
                </div>

                {/* Passworld */}
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)} />
                </div>

                {/* Passworld again */}
                <div className="mb-3">
                    <label>Password again</label>
                    <input type="password" className="form-control" placeholder="Enter password again" required onChange={(e) => setPasswordAgain(e.target.value)} />
                </div>
                <br />

                {/* Sing up button managew */}
                <div className="d-grid gap-3 justify-content-center mb-5">
                    <button type="submit" className="btn btn-warning" onClick={SenButtomMangger}>Sign Up</button>
                    <IonRouterLink href="/login" className="btn btn-outline-light me-2">
                        Login
                    </IonRouterLink>
                    <a href="../../../../public/GUP.pdf" className="anchorStyle" target="_blank" rel="noopener noreferrer">GUP documentation.</a>
                </div>
                <br />
            </form>
        </IonContent>
    )
}

export default SingUp;