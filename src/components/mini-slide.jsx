import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import 'swiper/css/navigation';
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import { http } from "../components/axios";
import LazyLoad from 'react-lazyload';
// Import Swiper styles
import 'swiper/css';
import {motion} from 'framer-motion'



export default function Carousel() {
    const[itemList, setItemlist] = useState(null)
    const [swiper, setSwiper] = useState(null);
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
    

    function getSlidesPerView() {
      return window.innerWidth < 768 ? 1 : 3;
  }

    useEffect(() => { // Set loading state to true before fetching data
      http.get('/itemList') // Assuming '/projectList' is the correct endpoint
          .then(res => {
            setItemlist(res.data);
          });

      const handleResize = () => {
        setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, [])
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




    return(
        <div className='w-[100%] mb-[2rem] md:mb-[4rem] lg:mb-[6rem]'>
          <Swiper
          modules={[Navigation]}
          navigation={false}
      spaceBetween={30}
      slidesPerView={slidesPerView}
      onSwiper={setSwiper}

    >
  
      {itemList && itemList.map((item, index) => (
        <SwiperSlide key={index} className='w-[100%]'>
        <LazyLoad once={true} offset={100} height={100}>
        <Link key={index} to={`/blog`} className='hover:no-underline'>
        <div className='w-full flex flex-col items-center justify-center'>
        <motion.img src={item.imgUrl} alt='grass' className='w-full h-auto flex-shrink-0 img-hero' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, ease: 'easeOut'}} />
        <div>
          <motion.h3 className='mt-[1rem] dancing-script-head' whileHover={{scale: 1.1}}>
            {item.title}
          </motion.h3>
          <motion.h1 className='title text-xl font-bold play-regular' whileHover={{scale: 1.05}}>
            {item.text}
          </motion.h1>
          <p className='josefin-sans-p'>
          {item.info}
          </p>
        </div>
        </div>
        </Link>
</LazyLoad>
        </SwiperSlide>
      ))
        
      }
      

    </Swiper>
    <div className='flex justify-center'>
                <button onClick={handlePrev} className='mr-4'><GrFormPreviousLink className='text-4xl' /></button>
                <button onClick={handleNext}><GrFormNextLink className='text-4xl' /></button>
            </div>
        </div>
    )
}