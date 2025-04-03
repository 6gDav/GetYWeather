import { MouseEvent } from 'react';
import { IonContent } from '@ionic/react';

import '../style/LoginStyle.css'

function Login() {
  const SenButtomMangger = (event: MouseEvent) => {
    alert("Enter an Email adress.");
    event.preventDefault();
  };

  return (
    <IonContent>
      <div className="login-container">
        <div>
          <h1 className="pagetitle">Login</h1>
          <form>
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" required/>
              <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="form2Example2" className="form-control" required/>
              <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input className="form-check-input form-check-input" type="checkbox" id="form2Example31" defaultChecked />
                  <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                </div>
              </div>

              <div className="col">
                <a className="anchorStyle" href="/forgotpassword">Forgot password?</a>
              </div>
            </div>

            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-block mb-5" onClick={SenButtomMangger}>Login</button>

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