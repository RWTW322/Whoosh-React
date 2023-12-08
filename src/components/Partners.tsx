import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Alva } from './icons/Alva';
import { CollaborateIcon } from './icons/CollaborateIcon';
import { Fagor } from './icons/Fagor';
import { GuitarCenter } from './icons/GuitarCenter';
import { RadioShack } from './icons/RadioShack';
import { Tendo } from './icons/Tendo';


export function Partners() {

    return (
        <section className="partners">
            <h2 className="partners__title title">Our Partners</h2>
            <div className="partners__collaborate-btn">
                <CollaborateIcon />
                <a className="collaborate__link" href="">Let's collaborate</a>
            </div>

            <div className="partners__container">
                <Swiper
                    className="swiper-partners"
                    spaceBetween={80}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <Alva />
                        <Tendo />
                        <Fagor />
                        <RadioShack />
                        <GuitarCenter />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Alva />
                        <Tendo />
                        <Fagor />
                        <RadioShack />
                        <GuitarCenter />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Alva />
                        <Tendo />
                        <Fagor />
                        <RadioShack />
                        <GuitarCenter />
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className="partners__container-mobile">
                <Swiper
                    className="swiper-partners-mobile"
                    spaceBetween={16}
                    slidesPerView={2}
                >
                    <SwiperSlide className="swiper-partners__slide">
                        <Alva />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-partners__slide">
                        <Tendo />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-partners__slide">
                        <Fagor />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-partners__slide">
                        <RadioShack />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-partners__slide">
                        <GuitarCenter />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-partners__slide">
                        <Alva />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-partners__slide">
                        <Tendo />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-partners__slide">
                        <Fagor />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-partners__slide">
                        <RadioShack />
                    </SwiperSlide>

                    <SwiperSlide className="swiper-partners__slide">
                        <GuitarCenter />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}