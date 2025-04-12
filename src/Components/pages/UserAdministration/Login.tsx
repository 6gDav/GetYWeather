import { useState } from 'react';
import { MouseEvent } from 'react';
import { IonContent } from '@ionic/react';
import sendEmail from '../../EmailSend';
import store from '../../storage';

import '../style/LoginStyle.css'

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const SendButtomMangger = async (event: MouseEvent) => {
    event.preventDefault();

    if (email && password) {
      console.log("email => " + email + " passworld => " + password);

      const users = (await store.get('users')) || [];
      const userLoginStatus = users.find((u: any) => u.email === email && u.password === password);

      if (userLoginStatus) {
        alert("Hello youar logind")

        //!TODO: email notification
        sendEmail("Login registered", "If you haven't logged in, please contact us.", email, email);
      }
      else {
        alert("Wrong email address or passworld.")
      }
    }
    else {
      alert("Please give a email and a passworld to login.");
    }
  };

  return (
    <IonContent>
      <div className="login-container">
        <div>
          <h1 className="pagetitle">Login</h1>
          <form>

            {/* Email address */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
              <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>

            {/* Passworld */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="form2Example2" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
              <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>

            {/* Remember me buttom */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input className="form-check-input form-check-input" type="checkbox" id="form2Example31" defaultChecked />
                  <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                </div>
              </div>

              {/* Forgot passwold */}
              <div className="col">
                <a className="anchorStyle" href="/forgotpassword">Forgot password?</a>
              </div>
            </div>

            {/* Login buttom */}
            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-block mb-5" onClick={SendButtomMangger}>Login</button>

            {/* Register */}
            <div className="text-center">
              <p>Not a member? <br /> <a className="anchorStyle" href="/singup">Register</a></p>
            </div>
          </form>
          <br />
        </div>
      </div>
    </IonContent>
  )
}

export default Login;