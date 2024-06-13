import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function ProjectDetail() {
    const { projectId } = useParams(); // Get the project ID from the URL
    const [project, setProject] = useState(null);
    const [swiper, setSwiper] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    useEffect(() => {
        console.log("Fetching project with ID:", projectId); // Log the project ID
        if (projectId) {
            fetch(`https://archbuild-api.vercel.app/api/projectList/${projectId}`)
                .then(response => {
                    console.log("API Response:", response); // Log the API response
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Project data received:", data); // Log the received data
                    setProject(data.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Fetching error:", error); // Log any errors
                    setError(error.message);
                    setLoading(false);
                });
        }

        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should happen only once
          });
    }, [projectId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const handleNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    console.log("Project state:", project); // Log the project state before rendering

    return (
        <div className="w-full mt-[5rem]">
            {project ? (
                <div className="mt-[1rem]">
                    <div className="w-full flex-none lg:flex lg:justify-center">
                        <div className="relative">
                            <motion.img
                                src={project.img}
                                alt={project.heading}
                                className="sm:w-full md:w-[35rem] lg:w-[40rem]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2, ease: 'easeOut', stiffness: 300 }}
                            />
                            <h1 className="absolute z-20 bottom-[2rem] left-[6px] text-white text-lg lg:text-2xl font-bold dancing-script-big">
                                {project.heading}
                            </h1>

                            <h3 className="absolute z-20 bottom-[0.56rem] left-[6px] text-white font-extralight text-sm space-design play-regular">
                                {project.location}
                            </h3>
                        </div>
                    </div>

                    <div className="text-left lg:text-center md:text-left mt-[2rem]"
                    data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                    data-aos-offset={isBigScreen ? '10' : '2'}>
                        <h1 className="text-xl lg:text-3xl font-bold space-design">
                            {project.heading}
                        </h1>

                        <p className="font-light mt-[1rem] josefin-sans-p">
                            {project.paragraph} <span className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</span> delivered a concept design containing 250 individual ‘tiny houses,’ two hotels, restaurants, retail, and coworking spaces, a selection of kite surfing schools, and a marina. A variety of different housing aesthetics avoids uniformity and monotony, and instead promotes a playful, cosy, and community-oriented atmosphere. This is reflected in the choice of materials, colours, and finishes that represent local Lithuanian history, as if the town evolved over time. The predominantly car-free site has been reforested, with an abundance of green space for activities and a sense of neighborliness. The project is currently under construction and will be finalised in 2029.
                        </p>
                    </div>

                    <div className="flex flex-col items-start lg:items-center mt-[2rem] lg:mt-[3rem]"
                    data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                    data-aos-offset={isBigScreen ? '10' : '2'}>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                            <h1 className="text-xl font-bold space-design">
                                Client:
                            </h1>
                            <p className="text-sm font-bold josefin-sans-p">
                                Mitsui Fudosan Co., Ltd
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                            <h1 className="text-xl font-bold space-design">
                                Location:
                            </h1>
                            <p className="text-sm font-bold josefin-sans-p">
                                {project.location}
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                            <h1 className="text-xl font-bold space-design">
                                TOTAL FLOOR AREA:
                            </h1>
                            <p className="text-sm font-bold josefin-sans-p">
                                About 17,700 m²
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                            <h1 className="text-xl font-bold space-design">
                                COMPLETION:
                            </h1>
                            <p className="text-sm font-bold josefin-sans-p">
                                2023
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                            <h1 className="text-xl font-bold space-design">
                                INFO:
                            </h1>
                            <p className="text-sm font-bold josefin-sans-p">
                                Architectural Design: <span className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</span>
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex justify-center relative mt-[2rem] mb-[2rem]"
                    data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                    data-aos-offset={isBigScreen ? '10' : '2'}>
                        <Swiper
                            modules={[Navigation]}
                            navigation={false}
                            spaceBetween={30}
                            onSwiper={setSwiper}
                            autoplay={{ delay: 2000 }}
                            className="flex justify-center items-center"
                        >
                            <SwiperSlide className="">
                                <img
                                    src={project.img}
                                    alt={project.heading}
                                    className="w-[37rem] h-auto"
                                    style={{ margin: '0 auto' }}
                                />
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <img
                                    src='https://www.nikken.co.jp/en/projects/tg1is20000004y3q-img/pj0312_07.jpg'
                                    alt={project.heading}
                                    className="w-[37rem] h-auto"
                                    style={{ margin: '0 auto' }}
                                />
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <img
                                    src='https://www.nikken.co.jp/en/projects/tg1is20000004y3q-img/pj0312_03.jpg'
                                    alt={project.heading}
                                    className="w-[37rem] h-auto"
                                    style={{ margin: '0 auto' }}
                                />
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <img
                                    src='https://www.nikken.co.jp/en/projects/tg1is20000004y3q-img/pj0312_05.jpg'
                                    alt={project.heading}
                                    className="w-[37rem] h-auto"
                                    style={{ margin: '0 auto' }}
                                />
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <img
                                    src='https://www.nikken.co.jp/en/projects/tg1is20000004y3q-img/pj0312_06.jpg'
                                    alt={project.heading}
                                    className="w-[37rem] h-auto"
                                    style={{ margin: '0 auto' }}
                                />
                            </SwiperSlide>

                            <SwiperSlide className="">
                                <img
                                    src='https://www.nikken.co.jp/en/projects/tg1is20000004y3q-img/pj0312_02.jpg'
                                    alt={project.heading}
                                    className="w-[37rem] h-auto"
                                    style={{ margin: '0 auto' }}
                                />
                            </SwiperSlide>
                        </Swiper>
                        <div className="absolute z-10 bottom-[0.54rem]">
                            <button onClick={handlePrev} className='mr-4'><GrFormPreviousLink className='text-4xl' /></button>
                            <button onClick={handleNext}><GrFormNextLink className='text-4xl' /></button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Project not found.</p>
            )}
        </div>
    );
}
