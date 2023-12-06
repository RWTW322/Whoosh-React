import React, { use, useState } from "react";
import { ShowBtnIcon } from "./icons/ShowBtnIcon";


export function ExpressDelivery() {

    const [isShow, setIsShow] = useState(false);

    function handleClickShow() {
        setIsShow(!isShow);
    }

    return (
        <section className="express-delivery">
            <div className="express-delivery__container">
                {isShow ? (
                    <>
                        <p className="express-delivery__content">
                            Since 2019, LibertyWalk has successfully provided express courier delivery services in the city for both individuals and legal entities, and is also a reliable logistics partner for delivery services for online stores and restaurants! Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases, flowers, food, gifts and goods up to 1.5 tons - the most frequent orders in our company.
                            <br />
                            <br />But at the same time, we do not limit the range of courier services and without problems we can buy and bring goods and products from the online store, arrange delivery for the online store, cafe, supermarket, restaurant or any other business. Around the clock on our website you can call a courier in just a minute and arrange an express courier delivery without unnecessary bureaucracy, negotiations and calls to the call center.
                        </p>
                        <p className="express-delivery__content">
                            Since 2019, LibertyWalk has successfully provided express courier delivery services in the city for both individuals and legal entities, and is also a reliable logistics partner for delivery services for online stores and restaurants! Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases, flowers, food, gifts and goods up to 1.5 tons - the most frequent orders in our company.
                            <br />
                            <br />But at the same time, we do not limit the range of courier services and without problems we can buy and bring goods and products from the online store, arrange delivery for the online store, cafe, supermarket, restaurant or any other business. Around the clock on our website you can call a courier in just a minute and arrange an express courier delivery without unnecessary bureaucracy, negotiations and calls to the call center.
                        </p>
                        <p className="express-delivery__content">
                            Since 2019, LibertyWalk has successfully provided express courier delivery services in the city for both individuals and legal entities, and is also a reliable logistics partner for delivery services for online stores and restaurants! Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases, flowers, food, gifts and goods up to 1.5 tons - the most frequent orders in our company.
                            <br />
                            <br />But at the same time, we do not limit the range of courier services and without problems we can buy and bring goods and products from the online store, arrange delivery for the online store, cafe, supermarket, restaurant or any other business. Around the clock on our website you can call a courier in just a minute and arrange an express courier delivery without unnecessary bureaucracy, negotiations and calls to the call center.
                        </p>
                        <p className="express-delivery__content">
                            Since 2019, LibertyWalk has successfully provided express courier delivery services in the city for both individuals and legal entities, and is also a reliable logistics partner for delivery services for online stores and restaurants! Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases, flowers, food, gifts and goods up to 1.5 tons - the most frequent orders in our company.
                            <br />
                            <br />But at the same time, we do not limit the range of courier services and without problems we can buy and bring goods and products from the online store, arrange delivery for the online store, cafe, supermarket, restaurant or any other business. Around the clock on our website you can call a courier in just a minute and arrange an express courier delivery without unnecessary bureaucracy, negotiations and calls to the call center.

                            <button className="express-delivery__show-btn button" onClick={handleClickShow}><ShowBtnIcon /></button>
                        </p>
                    </>
                ) : <p className="express-delivery__content">
                    Since 2019, LibertyWalk has successfully provided express courier delivery services in the city for both individuals and legal entities, and is also a reliable logistics partner for delivery services for online stores and restaurants! Express delivery of documents and parcels for organizations, express delivery of correspondence, purchases, flowers, food, gifts and goods up to 1.5 tons - the most frequent orders in our company.
                    <br />
                    <br />But at the same time, we do not limit the range of courier services and without problems we can buy and bring goods and products from the online store, arrange delivery for the online store, cafe, supermarket, restaurant or any other business. Around the clock on our website you can call a courier in just a minute and arrange an express courier delivery without unnecessary bureaucracy, negotiations and calls to the call center.

                    <button className="express-delivery__show-btn button" onClick={handleClickShow}><ShowBtnIcon /></button>
                </p>}
            </div>
        </section>
    )
}