import React, { useState } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from "./Button";
import { City } from "./City";
import { Graphic } from "./Graphic";
import { VideoSliderMobile } from "./VideoSliderMobile";
import { ArrowIcon } from "./icons/ArrowIcon";
import { CarIcon } from "./icons/CarIcon";
import { ClearIcon } from "./icons/ClearIcon";
import { DottedLine } from "./icons/DottedLine";
import { DropIcon } from "./icons/DropIcon";
import { FootIcon } from "./icons/FootIcon";
import { InfoIcon } from "./icons/InfoIcon";
import { PickupIcon } from "./icons/PickupIcon";
import { PlayBtnIcon } from "./icons/PlayBtnIcon";
import { SearchTrackIcon } from "./icons/SearchTrackIcon";
import { TruckIcon } from "./icons/TruckIcon";

export function MainContent() {

    const [location, setLocation] = useState({ pickupLocation: "", dropLocation: "" });
    const [leftIsActive, setLeftIsActive] = useState(false);
    const [middleIsActive, setMiddleIsActive] = useState(false);
    const [rightIsActive, setRightIsActive] = useState(false);

    function handleButtonClick(btnNumber: number) {
        switch (btnNumber) {
            case 1:
                setLeftIsActive(!leftIsActive);
                setMiddleIsActive(false);
                setRightIsActive(false);
                break;

            case 2:
                setLeftIsActive(false);
                setMiddleIsActive(!middleIsActive);
                setRightIsActive(false);
                break;

            case 3:
                setLeftIsActive(false);
                setMiddleIsActive(false);
                setRightIsActive(!rightIsActive);
                break;

            default:
                break;
        };
    }

    function handleAddPickupLocation(e: React.ChangeEvent<HTMLInputElement>) {
        setLocation({ ...location, pickupLocation: e.target.value });
    }

    function handleAddDropLocation(e: React.ChangeEvent<HTMLInputElement>) {
        setLocation({ ...location, dropLocation: e.target.value });
    }

    function handleClear() {
        setLocation({ ...location, pickupLocation: "", dropLocation: "" });
        setLeftIsActive(false);
        setRightIsActive(false);
        setMiddleIsActive(false);
    }

    return (
        <section className="main-content">

            <div className="main-content__info">
                <h2 className="main-content__title title">Our service started <br />
                    work in New York</h2>
                <p className="main-content__text">We make delivery exactly at the time you need - we can start to fulfill the order a few minutes after it arrives, or we can deliver on a specific day and hour.</p>
                <a className="main-content__link" href="">Read more <ArrowIcon /></a>
            </div>

            <div className="main-content__video">
                <h4 className="video__title">How it works</h4>

                <div className="video-container">
                    <button className="video__play-btn button" type="button"><PlayBtnIcon /></button>
                    <video className="video" src=""></video>
                </div>
            </div>

            <VideoSliderMobile />

            <Graphic />

            <div className="main-content__send-parcel">
                <div className="send-parcel__title-container">
                    <h4 className="send-parcel__title">Send a Parcel</h4>
                    <div className="info-icon__container"><InfoIcon /></div>
                    <div className="comission-info">A commission is a piece of work<br />that someone is asked to do and <br />is paid for.</div>
                </div>

                <div className="send-buttons__container">
                    <button className={`left-send-btn send-btn button ${leftIsActive ? "send-btn--active" : ""}`} onClick={() => handleButtonClick(1)}><FootIcon /><span className="send-btn__text">up to 10lb</span></button>
                    <button className={`middle-send-btn send-btn button ${middleIsActive ? "send-btn--active" : ""}`} onClick={() => handleButtonClick(2)}><CarIcon /><span className="send-btn__text">up to 130lb</span></button>
                    <button className={`right-send-btn send-btn button ${rightIsActive ? "send-btn--active" : ""}`} onClick={() => handleButtonClick(3)}><TruckIcon /><span className="send-btn__text">over 130lb</span></button>
                </div>

                <form className="location">
                    <fieldset className="pickup-location">
                        <PickupIcon />
                        <div className="location__input-container">
                            <legend className="location__title">PICKUP LOCATION</legend>
                            <input className="location__input"
                                type="text"
                                placeholder="location"
                                onChange={handleAddPickupLocation}
                                value={location.pickupLocation} />
                        </div>
                    </fieldset>

                    <fieldset className="drop-location">
                        <DropIcon />
                        <div className="location__input-container">
                            <legend className="location__title">DROP LOCATION</legend>
                            <input className="location__input"
                                type="text"
                                placeholder="location"
                                onChange={handleAddDropLocation}
                                value={location.dropLocation} />
                        </div>
                    </fieldset>

                    <DottedLine />
                </form>

                <Button className="btn-component order-btn button" backgroundColor="#2B6BF3" text="Order" />
                <button className="clear-btn button" onClick={handleClear}><ClearIcon />Clear all</button>
            </div>

            <form className="main-content__track-package">
                <h4 className="track__title">Track a package</h4>
                <div className="track-package__container">
                    <input className="track-package__input" type="text" placeholder="Enter code" />
                    <button className="track-package__input button" type="submit"><SearchTrackIcon /></button>
                </div>
            </form>

            <City />
        </section>
    );
}