import React, { useEffect, useReducer, useRef, useState } from 'react';

import './Styles/AppBar.css';

//Import Frontend Components
import Infos from '../UserDate/UserDate'
import { makeToWorkTheClok } from '../Clock/MakeWorkTheClock';
import { SetClokcToNull } from '../Clock/Logic/The-Actudal-Clcok-Of-The-Town';

import { useTheme, useAppBar } from './Logic/AppBarCodeBehindMenagger';

const AppBar: React.FC = () => {

    //Search input manager

    const searchButtomRef = useRef<HTMLButtonElement>(null);    //No type
    const searchInputRef = useRef<HTMLInputElement>(null);  //No type

    const {handleClick} = useAppBar(searchButtomRef, searchInputRef);

    //Theme switcher

    const { themeText, handleThemeChange } = useTheme();

    //Set Clock to Zero If new town is enterd

    useEffect(() => {
        SetClokcToNull();
    }, [searchInputRef])

    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li className='textFontSizeOfHader'><a href="#" className="nav-link px-3 text-secondary">Home</a></li>
                        <li className='textFontSizeOfHader'><a href="#" className="nav-link px-3 text-white">Features</a></li>
                        <li className='textFontSizeOfHader'><a href="#" className="nav-link px-3 text-white">Pricing</a></li>
                        <li className='textFontSizeOfHader'><a href="#" className="nav-link px-3 text-white">Contact</a></li>
                    </ul>

                    <form id="search-form" className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex gap-2" role="search">
                        <input ref={searchInputRef} type="search" className="form-control form-control-dark text-bg-white" placeholder="Search" aria-label="Search" />
                        <button ref={searchButtomRef} onClick={handleClick} type="button" className="btn btn-outline-light">Search</button>
                    </form>


                    <div className="text-end d-flex gap-2">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning  me-2">Sign-up</button>
                        <label htmlFor="themeMode" className='textFontSizeOfHader'>
                            <input type="checkbox" id="themeMode" onChange={handleThemeChange} /> {themeText}
                        </label>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppBar;
