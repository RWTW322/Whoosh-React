import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PlayBtnIcon } from "./icons/PlayBtnIcon";

export function VideoSliderMobile() {

    return (
        <div className="main-content__video-mobile">
            <h4 className="mobile-video__title">How it works</h4>

            <Swiper pagination={{clickable: true}} modules={[Pagination]} spaceBetween={16} className="video-swiper">
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