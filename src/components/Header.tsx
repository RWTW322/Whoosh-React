import React from "react";
import { Button } from "./Button";
import { useState } from "react";
import { WhooshLogo } from "./icons/WhooshLogo";
import { LoginIcon } from "./icons/LoginIcon";
import { CityIcon } from "./icons/CityIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { MenuBtnIcon } from "./icons/MenuBtnIcon";
import { AccountIcon } from "./icons/AccountIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { SearchTrackIcon } from "./icons/SearchTrackIcon";


export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    if (isOpen) {
        return (
            <header className="header">

                <button className="header__account-btn button" type="button"><AccountIcon /></button>
                <div className="header__logo-container">
                    <WhooshLogo />

                    <div className="header__city-container">
                        <CityIcon />
                        <p className="header__city">NY, Manhattan</p>
                    </div>
                </div>

                <form className="header__search-container">
                    <input className="header__search-input" type="text" placeholder="Track a Package" />
                    <button className="header__search-btn" type="button"><SearchIcon /></button>
                </form>

                <nav className="header__nav">
                    <a className="nav-link" href="#">Send a Parcel</a>
                    <a className="nav-link" href="#">Become a Courier</a>
                    <button className="login-btn button" type="button">
                        <LoginIcon />
                    </button>
                </nav>

                <button className="header__menu-btn button" onClick={() => setIsOpen(!isOpen)}><MenuBtnIcon /></button>

                <div className="header__menu">

                    <div className="menu__city-container">
                        <CityIcon />
                        <p className="menu__city">NY, Manhattan</p>
                    </div>

                    <button className="menu__menu-close-btn button" type="button" onClick={() => setIsOpen(false)}><CloseIcon /></button>

                    <form className="menu__search-container">
                        <input className="menu__search-input" type="text" placeholder="Track a Package" />
                        <button className="menu__search-btn button" type="button"><SearchTrackIcon /></button>
                    </form>

                    <nav className="menu__nav">
                        <a className="menu__link" href="#">Send a Parcel</a>
                        <a className="menu__link" href="#">Become a Courier</a>
                        <a className="menu__link" href="#">Affiliate Program</a>
                        <a className="menu__link" href="#">Help & Support</a>
                    </nav>

                    <Button className="complex-order-btn btn-component button" text="Take a comlex order" backgroundColor="#2B6BF3" />

                </div>
            </header>
        )
    }
    return (
        <header className="header">

            <button className="header__account-btn button" type="button"><AccountIcon /></button>
            <div className="header__logo-container">
                <WhooshLogo />

                <div className="header__city-container">
                    <CityIcon />
                    <p className="header__city">NY, Manhattan</p>
                </div>
            </div>

            <form className="header__search-container">
                <input className="header__search-input" type="text" placeholder="Track a Package" />
                <button className="header__search-btn" type="button"><SearchIcon /></button>
            </form>

            <nav className="header__nav">
                <a className="nav-link" href="#">Send a Parcel</a>
                <a className="nav-link" href="#">Become a Courier</a>
                <button className="login-btn button" type="button">
                    <LoginIcon />
                </button>
            </nav>

            <button className="header__menu-btn button" onClick={() => setIsOpen(!isOpen)}><MenuBtnIcon /></button>
        </header>
    );
}