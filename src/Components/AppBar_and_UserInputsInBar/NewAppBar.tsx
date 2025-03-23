import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { useTheme, useAppBar } from './Logic/AppBarCodeBehindMenagger';
import { SetClokcToNull } from '../Clock/Logic/The-Actudal-Clcok-Of-The-Town';

import './Styles/AppBar.css';

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
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    {/* Logo */}
                    <Link to="/" className="navbar-brand text-white">
                        My App
                    </Link>

                    {/* Nav Links */}
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link text-white">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/feature" className="nav-link text-white">Feature</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricing" className="nav-link text-white">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-white">Contact</Link>
                        </li>
                    </ul>

                    {/* Search Bar */}
                    <form className="d-flex">
                        <input ref={searchInputRef} type="search" className="form-control me-2" placeholder="Search" />
                        <button ref={searchButtonRef} onClick={handleClick} type="button" className="btn btn-outline-light">
                            Search
                        </button>
                    </form>

                    {/* User Actions */}
                    <div className="d-flex gap-2">
                        <button type="button" className="btn btn-outline-light">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                        <label htmlFor="themeMode" className="ms-2">
                            <input type="checkbox" id="themeMode" onChange={handleThemeChange} className="me-1" />
                            {themeText}
                        </label>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppBar;
