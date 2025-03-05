import React, { useEffect, useRef, useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

import './Styles/AppBar.css';

import "./Styles/AppBarMobil.css"
import Infos from '../UserDate/UserDate';
import { makeToWorkTheClok } from '../Clock/MakeWorkTheClock';
import { SetClokcToNull } from '../Clock/Logic/The-Actudal-Clcok-Of-The-Town';

import { useTheme, useAppBar } from './Logic/AppBarCodeBehindMenagger';

export default function App() {
  const [showAnimated2, setShowAnimated2] = useState(false);

  //Search input manager

  const searchButtomRef = useRef<HTMLButtonElement>(null);    //No type
  const searchInputRef = useRef<HTMLInputElement>(null);  //No type

  const { handleClick } = useAppBar(searchButtomRef, searchInputRef);

  //Theme switcher

  const { themeText, handleThemeChange } = useTheme();

  //Set Clock to Zero If new town is enterd

  useEffect(() => {
    SetClokcToNull();
  }, [searchInputRef])


  return (
    <>
      <section className='mb-3'>
        <MDBNavbar dark bgColor='dark'>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type='button'
              className='second-button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowAnimated2(!showAnimated2)}
            >
              <div className={`animated-icon2 ${showAnimated2 && 'open'}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse open={showAnimated2}>
          <div className='bg-dark shadow-3 p-4'>
            <MDBBtn block className='border-bottom m-0' color='link'>
              <p className='textFontSizeOfHader'>Home</p>
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              <p className='textFontSizeOfHader'>Features</p>
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              <p className='textFontSizeOfHader'>Pricing</p>
            </MDBBtn>
            <MDBBtn block className='border-bottom m-0' color='link'>
              <p className='textFontSizeOfHader'>Contact</p>
            </MDBBtn>
            <input ref={searchInputRef} type="search" className="form-control form-control-dark text-bg-white" placeholder="Search" aria-label="Search" />
            <button ref={searchButtomRef} onClick={handleClick} type="button" className="btn btn-outline-light">Search</button>
            <button type="button" className="btn btn-outline-light me-2">Login</button>
            <button type="button" className="btn btn-warning  me-2">Sign-up</button>
            <label htmlFor="themeMode" className='textFontSizeOfHader' style={{ color: 'white' }}>
              <input type="checkbox" id="themeMode" onChange={handleThemeChange} /> {themeText}
            </label>
          </div>
        </MDBCollapse>
      </section>
    </>
  );
}