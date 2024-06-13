import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import LazyLoad from 'react-lazyload';
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y  } from "swiper/modules";
import {motion} from 'framer-motion'



export default function Carousel() {
    const[itemList, setItemlist] = useState([])
    const [loading, setLoading] = useState(true);
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
    

    function getSlidesPerView() {
      return window.innerWidth < 768 ? 1 : 3;
  }

  useEffect(() => { // Set loading state to true before fetching data
    const fetchData = async () => {
        const url = 'https://archbuild-api.vercel.app/api/itemList';

        try {
            setLoading(true); // Set loading state to true before fetching data
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Fetched data:', data);

            if (Array.isArray(data.data)) {
              setItemlist(data.data);
            } else {
                console.error('Fetched data is not an array:', data.data);
                setItemlist([]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Set loading state to false after fetching data
        }
    };

    fetchData();

    AOS.init({
        duration: 1000, // Animation duration
        once: false, // Whether animation should happen only once
      });
      const handleResize = () => {
        setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener('resize', handleResize);
}, []);





    return(
        <div className='w-[100%] mb-[2rem] md:mb-[4rem] lg:mb-[6rem]'
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation={true}
      pagination={true}
      slidesPerView={slidesPerView}
      slides-per-view={1}
       spaceBetween={30}

    >
  
      {itemList.length > 0 ? (itemList.map((item, index) => (
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
      ))) : (
                    !loading && <div>No data available</div>
                )
        
      }
      

    </Swiper>
    
        </div>
    )
}