import { AmericanExpressIcon } from "./icons/AmericanExpressIcon";
import { MastercardIcon } from "./icons/MastercardIcon";
import { GooglePayIcon } from "./icons/GooglePayIcon";
import { SofortIcon } from "./icons/SofortIcon";
import { UnionPayIcon } from "./icons/UnionPayIcon";
import { VisaIcon } from "./icons/VisaIcon";
import { NextBtnIcon } from "./icons/NextBtnIcon";
import { PrevBtnIcon } from "./icons/PrevBtnIcon";

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';


function PrevSlideBtn() {
    const swiper = useSwiper();
    return (
        <button className="prev-slide-btn button" type="button" onClick={() => swiper.slidePrev()}><PrevBtnIcon /></button>
    );
}

function NextSlideBtn() {
    const swiper = useSwiper();
    return (
        <button className="next-slide-btn button" type="button" onClick={() => swiper.slideNext()}><NextBtnIcon /></button>
    );
}


export function PaymentMethods() {

    return (
        <section className="payment-methods">
            <h2 className="payment-methods__title title">Payment methods</h2>
            <div className="payment-container">
                <Swiper
                    className="swiper-methods"
                    spaceBetween={104}
                    slidesPerView={6}
                    navigation={{
                        prevEl: "prev-slide-btn button",
                        nextEl: "next-slide-btn button"
                    }}
                    modules={[Navigation]}
                >
                    <SwiperSlide className="method-slide">
                        <GooglePayIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <SofortIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <UnionPayIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <VisaIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <MastercardIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <AmericanExpressIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <GooglePayIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <SofortIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <UnionPayIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <VisaIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <MastercardIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <AmericanExpressIcon />
                    </SwiperSlide>
                    <PrevSlideBtn />
                    <NextSlideBtn />
                </Swiper>
            </div>

            <div className="payment-container-mobile">
                <Swiper
                    className="swiper-methods-mobile"
                    spaceBetween={64}
                    slidesPerView={3}
                >
                    <SwiperSlide className="method-slide">
                        <GooglePayIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <SofortIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <UnionPayIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <VisaIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <MastercardIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <AmericanExpressIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <GooglePayIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <SofortIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <UnionPayIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <VisaIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <MastercardIcon />
                    </SwiperSlide>

                    <SwiperSlide className="method-slide">
                        <AmericanExpressIcon />
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}

