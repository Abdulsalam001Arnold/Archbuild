import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import {motion} from 'framer-motion'
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';

export default function GetSlide() {
    const { slideId } = useParams(); // Get the project ID from the URL
    const [slide, setSlide] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });



    useEffect(() => {
        if (slideId) {
            fetch(`https://archbuild-api.vercel.app/api/itemList/${slideId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    setSlide(data.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                });
        }

        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should happen only once
          });
    }, [slideId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="w-full mt-[5rem] px-2">
            {slide ? (
                <div className=""
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
                    <div className="w-full flex-none lg:flex lg:justify-center">
                    <div className="relative">
                        <motion.img src={slide.imgUrl} alt={slide.title}className="sm:w-full md:w-full lg:w-[40rem]" 
                            initial={{opacity: 0}}   
                         animate={{opacity: 1}}
                         transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
                        />
                        <h1 className="absolute z-20 bottom-[5rem] left-[6px] text-white text-lg lg:text-2xl font-bold">
                            {slide.title}
                        </h1>

                        <h3 className="absolute z-20 bottom-[0.56rem] left-[6px] text-white font-extralight text-sm space-design caveat-heading">
                            {slide.info}
                        </h3>
                        </div>
                    </div>

                    <div className="text-left lg:text-center md:text-left mt-[2rem] px-2">
                        <h1 className="text-xl lg:text-3xl font-bold space-design dancing-script-head">
                            {slide.title}
                        </h1>

                        <p className="font-light mt-[1rem] josefin-sans-p">
                            {slide.text} <p className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</p> delivered a concept design containing 250 individual ‘tiny houses,’ two hotels, restaurants, retail, and coworking spaces, a selection of kite surfing schools, and a marina. A variety of different housing aesthetics avoids uniformity and monotony, and instead promotes a playful, cosy, and community-oriented atmosphere. This is reflected in the choice of materials, colours, and finishes that represent local Lithuanian history, as if the town evolved over time. The predominantly car-free site has been reforested, with an abundance of green space for activities and a sense of neighborliness. The project is currently under construction and will be finalised in 2029.
                        </p>
                        
                    </div>

                    

                    

                    
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}