import React, { EventHandler, useState } from "react";
import { PlayBtnIcon } from "./MainContent";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';

export function VideoSliderMobile() {

    return (
        <div className="main-content__video-mobile">
            <h4 className="mobile-video__title">How it works</h4>

            <Swiper pagination={{clickable: true}} modules={[Pagination]} className="video-swiper">
                <SwiperSlide>
                    <div className="mobile-video-container">
                        <button className="video__play-btn button" type="button"><PlayBtnIcon /></button>
                        <video className="mobile-video" src=""></video>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mobile-video-container">
                        <button className="video__play-btn button" type="button"><PlayBtnIcon /></button>
                        <video className="mobile-video" src=""></video>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mobile-video-container">
                        <button className="video__play-btn button" type="button"><PlayBtnIcon /></button>
                        <video className="mobile-video" src=""></video>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mobile-video-container">
                        <button className="video__play-btn button" type="button"><PlayBtnIcon /></button>
                        <video className="mobile-video" src=""></video>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>

    )
}