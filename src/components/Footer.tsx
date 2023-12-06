import React from "react";
import { PyroByteIconBlue } from "./icons/PyroByteIconBlue";
import { PyroByteIconRed } from "./icons/PyroByteIconRed";
import { AboutIcon } from "./icons/AboutIcon";
import { LocationIcon } from "./icons/LocationIcon";
import { FacebookIcon } from "./icons/FacebookIcon";
import { VkIcon } from "./icons/VkIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { PrivacyIcon } from "./icons/PrivacyIcon";

export function Footer() {

    return (
        <footer className="footer">

            <div className="footer-top">

                <div className="footer__about">

                    <h5 className="about__title">ABOUT WHOOSH</h5>
                    <div className="about__text-container">
                        <AboutIcon />
                        <p className="about__text">Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases and other goods</p>
                    </div>
                </div>

                <div className="footer__menu">
                    <h5 className="menu__title">MENU</h5>
                    <div className="menu__line"></div>
                    <nav className="menu__nav">
                        <ul className="nav__list">
                            <li className="nav__list-item"><a href="#">About company</a></li>
                            <li className="nav__list-item"><a href="#">Contact</a></li>
                            <li className="nav__list-item"><a href="#">Rules</a></li>
                            <li className="nav__list-item"><a href="#">FAQ</a></li>
                            <li className="nav__list-item"><a href="#">Reviews</a></li>
                            <li className="nav__list-item"><a href="#">Cargo transportation</a></li>
                            <li className="nav__list-item"><a href="#">Tariffs</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="footer__services">
                    <h5 className="services__title">SERVICES</h5>
                    <div className="services__line"></div>
                    <nav className="services__nav">
                        <ul className="nav__list">
                            <li className="nav__list-item"><a href="#">Online stores</a></li>
                            <li className="nav__list-item"><a href="#">Legal entity</a></li>
                            <li className="nav__list-item"><a href="#">API Integration</a></li>
                            <li className="nav__list-item"><a href="#">Contract</a></li>
                            <li className="nav__list-item"><a href="#">Jobs</a></li>
                            <li className="nav__list-item"><a href="#">Courier job</a></li>
                            <li className="nav__list-item"><a href="#">The blog</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="footer__contacts">
                    <h5 className="contacts__title">CONTACT US</h5>
                    <div className="contacts__line"></div>
                    <p className="contacts__phone-number">8 800 934 5959</p>
                    <div className="address-container">
                        <LocationIcon />
                        <p className="contacts__address">2545 W. Diversey Ave.
                            3rd Floor Chicago, IL 60647</p>
                    </div>
                    <div className="contacts__socials-links">
                        <a href="#"><FacebookIcon /></a>
                        <a href="#"><VkIcon /></a>
                        <a href="#"><YoutubeIcon /></a>
                        <a href="#"><InstagramIcon /></a>
                    </div>
                </div>
            </div>



            <div className="footer-bottom">

                <div className="split-line">
                    <div className="split-line__left"></div>
                    <div className="made-by">Made by</div>
                    <div className="split-line__right"></div>
                </div>

                <p className="rights">© 2022. All rights reserved.</p>
                <a className="pyrobyte-link" href="https://pyrobyte.ru/"><PyroByteIconBlue /><PyroByteIconRed /></a>
                <div className="privacy-container"><PrivacyIcon /><a className="privacy__link" href="">Privacy policy</a></div>
            </div>
            
        </footer>
    );
}