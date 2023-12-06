import React from "react";
import { PrevBtnIcon } from "./icons/PrevBtnIcon";
import { NextBtnIcon } from "./icons/NextBtnIcon";
import { Swiper, SwiperSlide } from 'swiper/react';
import { SofortIcon } from "./icons/SofortIcon";
import { UnionPayIcon } from "./icons/UnionPayIcon";
import { VisaIcon } from "./icons/VisaIcon";
import { GooglePayIcon } from "./icons/GooglePayIcon";
import { Navigation } from 'swiper/modules';
import { useSwiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

export const MastercardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="84" height="56" viewBox="0 0 84 56" fill="none">
    <g clipPath="url(#clip0_5743_739)">
        <path d="M85.2923 0H-0.861572V56H85.2923V0Z" fill="#272622" />
        <path d="M52.7687 11.4153C43.5072 11.4153 35.9688 18.7384 35.9688 27.9999C35.9688 37.2614 43.5072 44.5845 52.5534 44.5845C61.5995 44.5845 69.138 37.0461 69.138 27.9999C69.3534 18.7384 61.8149 11.4153 52.7687 11.4153Z" fill="#F79E1B" />
        <path d="M32.0919 11.4153C23.0458 11.4153 15.5073 18.7384 15.5073 27.9999C15.5073 37.2614 23.0458 44.5845 32.0919 44.5845C41.1381 44.5845 48.8919 37.2614 48.8919 27.9999C48.8919 18.7384 41.3535 11.4153 32.0919 11.4153Z" fill="#EB001B" />
        <path d="M48.892 27.9998C48.892 22.8306 46.5228 18.0921 42.4305 14.8613C35.1074 20.4613 34.0304 31.0152 39.6305 38.1229C40.492 39.1998 41.3535 40.0613 42.4305 40.9229C46.5228 37.9075 48.892 33.169 48.892 27.9998Z" fill="#FF5F00" />
    </g>
    <defs>
        <clipPath id="clip0_5743_739">
            <rect width="84" height="56" rx="8" fill="white" />
        </clipPath>
    </defs>
</svg>

export const AmericanExpressIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="84" height="56" viewBox="0 0 84 56" fill="none">
    <g clipPath="url(#clip0_5743_747)">
        <path d="M84 0H0V56H84V0Z" fill="#006CD3" />
        <mask id="mask0_5743_747" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="16" y="30" width="69" height="15">
            <path d="M84.6833 34.7537H80.3125C79.9027 34.7537 79.5613 34.7537 79.3564 34.9586C79.0832 35.0952 79.0149 35.3684 79.0149 35.7098C78.9977 36.0576 79.2252 36.3703 79.5613 36.4611C79.85 36.545 80.1485 36.5909 80.4491 36.5977H81.7467C82.7264 36.5317 83.6968 36.8228 84.4784 37.4172C84.5628 37.495 84.6322 37.5876 84.6833 37.6904V34.7537ZM84.6833 41.3782C83.8806 42.3377 82.6471 42.826 81.4052 42.6758H76.7612V40.4904H81.4052C81.7481 40.5372 82.0949 40.4381 82.3613 40.2172C82.5444 40.0381 82.6435 39.7902 82.6345 39.5343C82.6293 39.281 82.5322 39.0383 82.3613 38.8513C82.1182 38.6946 81.8301 38.6226 81.5418 38.6465C79.2881 38.5782 76.4881 38.7148 76.4881 35.505C76.4858 34.6336 76.8597 33.8037 77.5139 33.228C78.168 32.6524 79.0387 32.3871 79.9027 32.5001H84.6833V30.5196H80.2442C79.1815 30.4718 78.1306 30.7584 77.2393 31.3391V30.5196H70.6831C69.6639 30.4779 68.6582 30.7652 67.8148 31.3391V30.5196H56.0684V31.3391C55.0924 30.7804 53.983 30.4971 52.8586 30.5196H45.0732V31.3391C44.0475 30.7185 42.8542 30.4321 41.6585 30.5196H33.0536L31.073 32.7733L29.2291 30.6562H16.2534V44.6564H28.956L31.0048 42.471L32.917 44.6564H40.7707V41.3783H41.5219C42.6583 41.4503 43.7974 41.2876 44.8683 40.9002V44.6564H51.3562V41.0368H51.6976C52.1074 41.0368 52.1074 41.0368 52.1074 41.4466V44.6564H71.7076C72.8631 44.683 74.0015 44.3747 74.9856 43.7686V44.6564H81.2003C82.4121 44.6756 83.6167 44.4671 84.7516 44.0417V41.3782H84.6833ZM75.054 37.3489C75.5954 37.9149 75.8688 38.6854 75.8052 39.466C75.8052 41.6514 74.4394 42.6075 72.0491 42.6075H67.3368V40.4904H71.9807C72.3236 40.5372 72.6705 40.4381 72.9368 40.2172C73.1199 40.0381 73.2191 39.7902 73.21 39.5343C73.2049 39.281 73.1078 39.0383 72.9368 38.8513C72.6718 38.6866 72.3595 38.6145 72.049 38.6465C69.7953 38.5782 66.9953 38.7148 66.9953 35.505C66.9807 34.6296 67.3511 33.7919 68.0083 33.2135C68.6656 32.6351 69.5436 32.3743 70.41 32.5001H75.1904V34.6171H70.8197C70.3417 34.6171 70.0685 34.6171 69.8636 34.822C69.5905 34.9586 69.5222 35.2318 69.5222 35.5733C69.5049 35.921 69.7324 36.2337 70.0685 36.3245C70.3795 36.4132 70.7012 36.4592 71.0246 36.4611H72.3223C73.3079 36.4336 74.2728 36.7472 75.0539 37.3489H75.054ZM53.4051 36.7343C53.0438 36.9065 52.6425 36.9773 52.2442 36.9391H49.3074V34.6855H52.2441C52.6427 34.6409 53.0457 34.712 53.405 34.8903C53.7379 35.0535 53.93 35.4104 53.883 35.7782C53.945 36.1664 53.7527 36.5509 53.405 36.7343H53.4051ZM54.9075 37.9636C55.3614 38.1269 55.7626 38.4101 56.0684 38.7831C56.4105 39.3333 56.5551 39.9837 56.4782 40.627V42.6075H54.0878V41.3782C54.0878 40.7636 54.1561 39.8758 53.6781 39.3977C53.1728 39.0096 52.5343 38.8377 51.9025 38.9197H49.3074V42.6076H46.9172V32.6367H52.449C53.43 32.5528 54.4164 32.7172 55.3173 33.1147C56.1277 33.5657 56.6062 34.4428 56.5466 35.3684C56.6036 36.4929 55.9474 37.5318 54.9074 37.9635L54.9075 37.9636ZM57.9124 32.6367H65.9027V34.7538H60.3026V36.5977H65.766V38.6465H60.3026V40.627H65.9026V42.7441H57.9123L57.9124 32.6367ZM41.7269 37.2806H38.5853V34.7537H41.7268C42.6146 34.7537 43.161 35.0952 43.161 35.9831C43.2293 36.8025 42.6146 37.2806 41.7268 37.2806L41.7269 37.2806ZM36.1952 41.788L32.5072 37.6904L36.1952 33.7294V41.788ZM26.7024 40.5587H20.8291V38.5782H26.0876V36.5294H20.8291V34.6855H26.8388L29.434 37.6222L26.7024 40.5587ZM45.7562 35.9148C45.7562 38.7148 43.7074 39.2611 41.5903 39.2611H38.5853V42.6075H33.9414L31.0048 39.2611L27.9316 42.6075L18.4388 42.6075V32.6367H28.068L31.0047 35.9147L34.0778 32.6367H41.7267C43.639 32.6367 45.7561 33.183 45.7561 35.9147L45.7562 35.9148Z" fill="white" />
        </mask>
        <g mask="url(#mask0_5743_747)">
            <path d="M12.8386 27.2415H88.0978V48.0709H12.8386V27.2415Z" fill="#FFFFFE" />
        </g>
        <path d="M3.68848 21.1174H6.96593L5.32613 17.0874L3.68848 21.1174Z" fill="#FFFFFE" />
        <path d="M74.0294 15.1066L73.0733 13.4676H66.244V15.1066L65.3561 13.4676H56.1366C54.7456 13.3931 53.3586 13.6752 52.1072 14.2871V13.4676H45.756V14.2871C44.9788 13.684 44.005 13.3919 43.0243 13.4676H19.7363L18.1655 17.0871L16.5948 13.4676H9.21898V15.1066L8.39951 13.4676H2.11656L-0.751709 20.092V27.4677H3.34587L4.302 25.214H6.3508L7.23859 27.4677H15.3655V25.7603L16.1168 27.4677H20.2826L20.9655 25.7603V27.4677H41.0438V23.7799H41.4536C41.7267 23.7799 41.795 23.8483 41.795 24.2579V27.4677H52.1756V26.5798C53.3519 27.2021 54.6698 27.508 56 27.4676H60.3708L61.3268 25.214H63.3756L64.2634 27.4677H72.6635V25.3506L73.961 27.4677H80.7221V13.4676H74.0294V15.1066ZM25.1314 25.4873H22.7412V17.6335L19.2582 25.4873H17.1411L13.6582 17.6335V25.4873H8.80935L7.85325 23.2335H2.86779L1.91175 25.4873H-0.683466L3.61901 15.4481H7.17027L11.2679 24.9409V15.4481H15.1606L18.3021 22.2774L21.1704 15.4481H25.1314V25.4873ZM34.9656 17.5653H29.3656V19.3408H34.8291V21.3896H29.3656V23.37H34.9656V25.4873H26.9753V15.4481H34.9656V17.5653ZM45.756 21.5946C46.0981 22.1448 46.2426 22.7952 46.1657 23.4385V25.4189H43.7755V24.1213C43.7755 23.5067 43.844 22.6189 43.3658 22.1409C43.0243 21.7994 42.478 21.7311 41.5902 21.7311H38.995V25.3506H36.6048V15.4481H42.1365C43.1395 15.3714 44.1462 15.5353 45.0731 15.9261C45.8797 16.3466 46.3619 17.2038 46.3024 18.1115C46.3342 19.2657 45.6571 20.322 44.5951 20.775C45.049 20.9382 45.4502 21.2214 45.756 21.5945V21.5946ZM50.1268 25.4873H47.6682V15.4481H50.1268V25.4873ZM76.1466 15.4481H78.6052V25.4873H75.1221L70.5465 17.975V25.4873H65.6293L64.6731 23.2336H59.7559L58.8683 25.4873H56.0683C54.8133 25.557 53.5756 25.1687 52.5853 24.3946C51.6508 23.3493 51.1823 21.9683 51.2878 20.5701C51.1691 19.1496 51.6381 17.7426 52.5853 16.6774C53.5758 15.8002 54.889 15.379 56.2048 15.5165H58.5268V17.6336H56.2732C55.5972 17.5491 54.9193 17.7751 54.4293 18.2483C53.9305 18.889 53.6871 19.6921 53.7463 20.5019C53.6689 21.3559 53.9124 22.208 54.4293 22.8922C54.8769 23.2925 55.47 23.4902 56.0683 23.4385H57.161L60.5756 15.5164H64.1952L68.2244 25.0092V15.4481H71.9123L76.1466 22.414V15.4481Z" fill="#FFFFFE" />
        <path d="M43.1608 17.702C42.8015 17.5236 42.3985 17.4525 41.9999 17.4971H39.0632V19.7508H41.9999C42.3983 19.789 42.7996 19.7181 43.1608 19.5459C43.4877 19.3428 43.6726 18.9731 43.6389 18.5898C43.6859 18.222 43.4937 17.8651 43.1608 17.702Z" fill="#FFFFFE" />
        <path d="M60.7136 21.1174H63.9911L62.3513 17.0874L60.7136 21.1174Z" fill="#FFFFFE" />
    </g>
    <defs>
        <clipPath id="clip0_5743_747">
            <rect width="84" height="56" rx="8" fill="white" />
        </clipPath>
    </defs>
</svg>

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

