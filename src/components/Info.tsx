import React from "react";
import { CourierIcon } from "./icons/CourierIcon";
import { RouteIcon } from "./icons/RouteIcon";
import { SupportIcon } from "./icons/SupportIcon";
import { AffiliateIcon } from "./icons/AffiliateIcon";

export function Info() {

    return (
        <section className="info">
            <h2 className="info__title title">Express delivery market revolution</h2>
            <p className="info__text">Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!</p>
            <div className="info__items-container">
                <div className="info__item">
                    <a className="item-link" href="">
                        <h4 className="info__item-title">Become a Courier</h4>
                        <div className="courier-icons">
                            <div className="icon-container"><CourierIcon /></div>
                            <RouteIcon />
                        </div>
                        <p className="info__item-text">You choose a schedule. You decide how much and when to earn. Earnings from day one</p>
                    </a>
                </div>
                <div className="info__item">
                    <a className="item-link" href="">
                        <h4 className="info__item-title">Help & Support</h4>
                        <div className="icon-container"><SupportIcon /></div>
                        <p className="info__item-text">Door-to-door delivery <br />in 90 minutes or at your convenience</p>
                    </a>
                </div>
                <div className="info__item">
                    <a className="item-link" href="">
                        <h4 className="info__item-title">Affiliate Program</h4>
                        <div className="icon-container"><AffiliateIcon /></div>
                        <p className="info__item-text">Use our service and feel <br />new quality of this traditional service!</p>
                    </a>
                </div>
            </div>
        </section>
    );
}