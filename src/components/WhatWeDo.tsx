import React from "react";
import { Button } from "./Button";
import { CalculationIcon } from "./icons/CalculationIcon";
import { PaperworkIcon } from "./icons/PaperworkIcon";
import { ConvenientPaymentIcon } from "./icons/ConvenientPayIcon";
import { ArrowCircleIcon } from "./icons/ArrowCircleIcon";

export function WhatWeDo() {

    return (
        <section className="what-we-do">
            <h2 className="what-we-do__title title">What we do</h2>
            <p className="what-we-do__text">Express courier service in the city. We are a reliable logistics partner for delivery services for online stores and restaurants!</p>
            <div className="what-we-do__items-container">
                <div className="what-we-do__item">
                    <div className="icon-container"><CalculationIcon /></div>
                    <h4 className="what-we-do__item-title">Online <a className="calculation-link" href="#">calculation</a></h4>
                    <p className="what-we-do__item-text">Instant calculation of the cost in the order form, the price is updated in the process of filling out the form</p>
                </div>
                <div className="what-we-do__item">
                    <div className="icon-container"><PaperworkIcon /></div>
                    <h4 className="what-we-do__item-title">Minimum paperwork</h4>
                    <p className="what-we-do__item-text">You can place an order for courier or freight delivery without registration and contract.</p>
                </div>
                <div className="what-we-do__item">
                    <div className="icon-container"><ConvenientPaymentIcon /></div>
                    <h4 className="what-we-do__item-title">Convenient payment</h4>
                    <p className="what-we-do__item-text">You can pay for delivery by card or in cash at any of the order addresses. For legal entities non-cash is available. <ArrowCircleIcon /></p>
                </div>
            </div>
            <img className="what-we-do__img" src="/images/Intersect.png" alt="" />
            <Button className="btn-component what-we-do__btn button" backgroundColor="#FFDD2D" text="Get started!" />
        </section>
    )
}