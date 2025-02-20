import React, { useReducer, useRef } from 'react';

import './Styles/AppBar.css'

//Import Frontend Components
import Infos from '../UserDate/UserDate'
import { makeToWorkTheClok } from '../Clock/MakeWorkTheClock';

const AppBar: React.FC = () => {
    
    const searchButtomRef = useRef<HTMLButtonElement>(null);    //No type
    const searchInputRef = useRef<HTMLInputElement>(null);  //No type

    const hanfleClick = () => {
        if (searchButtomRef.current) {
            Infos.TownName = searchInputRef.current?.value ?? '';
            console.log('Class ' + Infos.TownName); //Test Log
            makeToWorkTheClok();
        }
    };

    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-3 text-secondary textFonrSizeOfHader">Home</a></li>
                        <li><a href="#" className="nav-link px-3 text-white textFonrSizeOfHader">Features</a></li>
                        <li><a href="#" className="nav-link px-3 text-white textFonrSizeOfHader">Pricing</a></li>
                        <li><a href="#" className="nav-link px-3 text-white textFonrSizeOfHader">Contact</a></li>
                    </ul>

                    <form id="search-form" className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex" role="search">
                        <input ref={searchInputRef} type="search" className="form-control form-control-dark text-bg-white" placeholder="Search..." aria-label="Search" />
                        <button ref={searchButtomRef} onClick={hanfleClick} type="button" className="btn btn-outline-light">Search</button>
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppBar;
