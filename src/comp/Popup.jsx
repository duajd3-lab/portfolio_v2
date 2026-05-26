import '../styles/popup.scss';

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//import CloseIcon from '@mui/icons-material/Close';
function Popup({ setOpen, item }) {

    const modal = useRef();
    const container = useRef();

    useEffect(() => {
        modal.current.addEventListener('wheel', function (e) {
            e.preventDefault();
        })
        container.current.addEventListener('wheel', function (e) {
            e.stopPropagation();
        })
    }, [])
    return (
        <div className='modal' ref={modal} onClick={() => { setOpen(false) }} >

            <div className='container' ref={container} onClick={(e) => e.stopPropagation()} >

                <div
                    className='closeBtn'
                    onClick={() => setOpen(false)}
                >
                    ✕
                </div>

                <span>{item.title}</span>


                <>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >

                        {item.images.map((img, index) => {
                            return (
                                <SwiperSlide key={index} >
                                    <img src={img} className='screen' />
                                </SwiperSlide>

                            )

                        })}
                    </Swiper>
                </>





                <section className='sec-1'>
                    <div className='tt2'>
                        <div>
                            <span>개발 기간</span>
                        </div>
                        <div className='tt-text'>

                            <div >{item.period}</div>

                        </div>
                    </div>

                </section>

                <div className="details">
                    <section className='sec-1'>
                        <div className='tt'>
                            <span>SKILLS</span>
                        </div>
                        <div className="p-skills">
                            {
                                item.skills.map((skill, index) => {
                                    return <div key={index}>{skill}</div>
                                })
                            }

                        </div>
                    </section>

                    <section className='sec-1'>
                        <div className='tt2'>
                            <div>
                                <span>링크</span>
                            </div>

                            <div className='linkBox'>
                                {item.links?.site && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            window.open(item.links.site, "_blank", "noopener,noreferrer");
                                        }}
                                    >
                                        <img src="/svg/link.svg" alt="" />
                                        SITE
                                    </button>
                                )}

                                {item.links?.github && (
                                    <button
                                        onClick={() =>
                                            window.open(item.links.github.trim(), "_blank")
                                        }
                                    >
                                        <img src="/svg/git-white.svg" alt="" />
                                        GITHUB
                                    </button>
                                )}

                            </div>
                        </div>
                    </section>


                    <section className='sec-1'>
                        <div className='tt2'>
                            <div>
                                <span>개발인원</span>
                            </div>
                            <div className='tt-text'>

                                <div >{item.team}</div>

                            </div>
                        </div>

                    </section>

                    <section className='sec-2'>
                        <div className='tt2'>
                            <span>역할</span>
                        </div>

                        <div className='tt-text'>
                            {item.work.map((work, index) => (
                                <div key={index}>{work}</div>
                            ))}
                        </div>
                    </section>


                    <section className='sec-1'>
                        <div className='tt3'>
                            <div>
                                <span>상세 기능</span>
                            </div>
                            <ul>
                                {item.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className='sec-1 troubleshooting'>
                        <div className='tt'>
                            <span>트러블 슈팅</span>

                            <ul>
                                {item.troubleshooting.map((t, index) => (
                                    <li key={index}>
                                        <strong>[문제 상황]</strong>
                                        <p>{t.problem}</p>

                                        {t.cause && (
                                            <>
                                                <strong>[원인]</strong>
                                                <p>{t.cause}</p>
                                            </>
                                        )}

                                        <strong>[해결 방법]</strong>
                                        <p>{t.solution}</p>

                                        <strong>[성과]</strong>
                                        <p>{t.result}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>


            </div>
        </div>
    )
}

export default Popup