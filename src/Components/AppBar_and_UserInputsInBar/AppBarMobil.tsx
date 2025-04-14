import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { MDBContainer, MDBCollapse, MDBNavbar, MDBNavbarToggler, MDBBtn } from 'mdb-react-ui-kit';
import { IonRouterLink } from '@ionic/react';

import { useTheme, useAppBar } from './Logic/AppBarCodeBehindMenagger';
import { SetClokcToNull } from '../Clock/Logic/The-Actudal-Clcok-Of-The-Town';

import './Styles/AppBar.css';
import './Styles/AppBarMobil.css'

export default function App() {
  const [showAnimated2, setShowAnimated2] = useState(false);

  //Search input manager
  const searchButtomRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { handleClick } = useAppBar(searchButtomRef, searchInputRef);

  //Theme switcher
  const { themeText, handleThemeChange } = useTheme();

  //Set Clock to Zero If new town is enterd
  useEffect(() => {
    SetClokcToNull();
  }, [searchInputRef])


  return (
    <div className="safe-area-top">
      <section className="mb-3">
        <MDBNavbar dark bgColor="dark">
          <MDBContainer fluid>
            <MDBNavbarToggler
              type="button"
              className="second-button"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowAnimated2(!showAnimated2)}
            >
              <div className={`animated-icon2 ${showAnimated2 && "open"}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>
        <MDBCollapse open={showAnimated2}>
          <div className="bg-dark shadow-3 p-4">

            {/* Nav links */}
            <MDBBtn block className='border-bottom m-0' color='link'>
              <Link to="/home" className="nav-link px-3 text-white">Home</Link>
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              <Link to="/feature" className="nav-link px-3 text-white">Feature</Link>
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              <Link to="/pricing" className="nav-link px-3 text-white">Pricing</Link>
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              <Link to="/contact" className="nav-link px-3 text-white">Contact</Link>
            </MDBBtn>

            {/* Search Bar */}
            <input ref={searchInputRef} type="search" className="form-control form-control-dark text-bg-white" placeholder="Search" aria-label="Search" />
            <br />
            <button ref={searchButtomRef} onClick={handleClick} type="button" className="btn btn-outline-light">Search</button>

            {/* User Actions */}
            <IonRouterLink href="/login" className="btn btn-outline-light me-2">
              Login
            </IonRouterLink>
            <IonRouterLink href="/singup" className="btn btn-warning me-2">
              Sign-up
            </IonRouterLink>

            {/* Theme Switcher */}
            <label htmlFor="themeMode" className='textFontSizeOfHader' style={{ color: "white" }}>
              <input type="checkbox" id="themeMode" onChange={handleThemeChange} /> {themeText}
            </label>
          </div>
        </MDBCollapse>
      </section>
    </div>
  );
}