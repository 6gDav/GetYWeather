import React, { useEffect, useRef } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useTheme, useAppBar } from './Logic/AppBarCodeBehindMenagger';
import { SetClokcToNull } from '../Clock/Logic/The-Actudal-Clcok-Of-The-Town';

import './Styles/AppBar.css';
import { IonRouterLink } from '@ionic/react';

const AppBar: React.FC = () => {
    // Search input manager
    const searchButtonRef = useRef<HTMLButtonElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const { handleClick } = useAppBar(searchButtonRef, searchInputRef);

    // Theme switcher
    const { themeText, handleThemeChange } = useTheme();

    // Set Clock to Zero If new town is entered
    useEffect(() => {
        SetClokcToNull();
    }, [searchInputRef]);

    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    {/* Logo
                    <Link to="/" className="navbar-brand text-white">
                        My App
                    </Link> */}

                    {/* Nav Links */}
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li className="nav-item textFontSizeOfHader">
                            <Link to="/home" className="nav-link px-3 text-white">Home</Link>
                        </li>
                        <li className="nav-item textFontSizeOfHader">
                            <Link to="/feature" className="nav-link px-3 text-white">Feature</Link>
                        </li>
                        <li className="nav-item textFontSizeOfHader">
                            <Link to="/pricing" className="nav-link px-3 text-white">Pricing</Link>
                        </li>
                        <li className="nav-item textFontSizeOfHader">
                            <Link to="/contact" className="nav-link px-3 text-white">Contact</Link>
                        </li>
                    </ul>

                    {/* Search Bar */}
                    <form id="search-form" className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex gap-2" role="search">
                        <input ref={searchInputRef} type="search" className="form-control form-control-dark text-bg-white" placeholder="Search" />
                        <button ref={searchButtonRef} onClick={handleClick} type="button" className="btn btn-outline-light">
                            Search
                        </button>
                    </form>

                    {/* User Actions */}
                    <div className="text-end d-flex gap-2">
                        <IonRouterLink href="/login" className="btn btn-outline-light me-2">
                            Login
                        </IonRouterLink>
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
