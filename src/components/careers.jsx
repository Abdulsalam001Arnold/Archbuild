import { Navigation, Pagination, Scrollbar, A11y  } from "swiper/modules";
import NumberCounter from "./count";
import { Swiper, SwiperSlide } from "swiper/react";
import { DiAtom } from "react-icons/di";
import { Link } from "react-router-dom";
import { FcCollaboration } from "react-icons/fc";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { GiPiggyBank } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";
import { FaGlobeAfrica } from "react-icons/fa";
import { SlEvent } from "react-icons/sl";
import { GrCertificate } from "react-icons/gr";
import { FaHeartPulse } from "react-icons/fa6";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import 'aos/dist/aos.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Career(){

    const [activeSection, setActiveSection] = useState('');
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    function getSlidesPerView() {
      return window.innerWidth < 768 ? 1 : 3;
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
    };
    AOS.init({
        duration: 1000, // Animation duration
        once: false, // Whether animation should happen only once
      });

    const observer = new IntersectionObserver(callback, options);
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;
    const section4 = section4Ref.current;
    const section5 = section5Ref.current;


    if (section1) observer.observe(section1);
    if (section2) observer.observe(section2);
    if (section3) observer.observe(section3);
    if (section4) observer.observe(section4);
    if (section5) observer.observe(section5);
    const handleResize = () => {
        setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener('resize', handleResize);

    // Combine both cleanup functions into one return statement
    return () => {
        if (section1) observer.unobserve(section1);
        if (section2) observer.unobserve(section2);
        if (section3) observer.unobserve(section3);
        if (section4) observer.unobserve(section4);
        if (section5) observer.unobserve(section5);
        window.removeEventListener('resize', handleResize);
    };
}, []);

      
    return(
        <div className='w-full mt-[6rem]'>
        <div className='w-full relative h-screen md:h-[100vh]'>
      <video loop={true} autoPlay={true} className='w-full h-full object-cover'>
        <source src='https://data.openasset.com/3f741c2e/c354cd58dee2a25ca18b2476d99ae9cb/F_220601_4K_careers_web_comp_220601_mp4/F_220601_4K_careers_web_comp_220601_videolarge.mp4' type='video/mp4'></source>
    </video>

    <div className='absolute vid-contain flex flex-col justify-center items-center'>

    <div className='w-full flex flex-col items-center md:items-center lg:items-start justify-center pl-0 md:pl-0 lg:pl-[5rem]'>
        <div className='px-3 content h-[16rem] flex flex-col items-center justify-center w-[20rem] py-3'>
            <h1 className='w-[80%] mb-[1rem] dancing-script-head text-sm md:text-[12px] lg:text-lg'> 
            DESIGN YOUR CAREER WITH&nbsp;US
            </h1>

            <p className='w-[80%] poetsen-one-regular text-xs md:text-sm lg:text-sm'>
            We strive to hire the best people and give them the tools they need to thrive.
            </p>

            <button className="button mt-[1rem]">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">Search for jobs</span>
                </span>
            </button>
        </div>
        </div>
    </div>
      </div>


      <div className='w-full mt-[5rem]'>
        <div className='flex flex-col md:flex-col lg:flex-row items-start justify-center gap-[1rem]'>
            <div className='flex flex-col items-start sm:w-full md:w-full lg:w-[30rem]'>
                <h1 className='josefin-sans-p text-xl md:text-2xl lg:text-2xl'>
                Join us on our mission to create a better world through design.
                </h1>

                <p className='text-xs md:text-sm lg:text-[14px] mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                Archbuild is in search of bright and dynamic professionals who can leverage their unique talent and diverse perspectives to reimagine the future with us. If you are a recent graduate or a seasoned designer who believes in the power of design, we invite you to search for opportunities with our growing firm — and explore how you can make an impact within our global network of team members, clients, and communities.
                </p>

                <p className='text-xs md:text-sm lg:text-[14px] mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                In 2024, Forbes recognized Archbuild on its list of America’s Best Large Employers and Fast Company honored Archbuild on its list of the World’s Most Innovative Companies. In 2023, Interior Design recognized Archbuild as the #1 Most Admired Firm in the world.
                </p>
            </div>


            <ul className='flex flex-col justify-center items-start gap-6'>

            <a href='#section1'>
                <motion.li className='poetsen-one-regular career-links' 
                whileHover={{scale: 1.1}} 
                transition={{ease: 'easeIn'}}
                style={{cursor: activeSection === 'section1' ? 'pointer' : 'normal' }}>
                    How to apply
                </motion.li>
                </a>
                
                <a href='#section2'>
                <motion.li className='poetsen-one-regular career-links'
                whileHover={{scale: 1.1}} 
                transition={{ease: 'easeIn'}}>
                Our People
                </motion.li>
                </a>

                <a href='#section3'>
                <motion.li className='poetsen-one-regular career-links'
                whileHover={{scale: 1.1}} 
                transition={{ease: 'easeIn'}}>
                Diversity & Inclusion
                </motion.li>
                </a>

                <a href='#section4'>
                <motion.li className='poetsen-one-regular career-links'
                whileHover={{scale: 1.1}} 
                transition={{ease: 'easeIn'}}>
                Students & Early Career
                </motion.li>
                </a>


                <a href='#section5'>
                <motion.li className='poetsen-one-regular career-links'
                whileHover={{scale: 1.1}} 
                transition={{ease: 'easeIn'}}>
                Benefits
                </motion.li>
                </a>
            </ul>
        </div>
      </div>


      <div className="bg-[rgb(238,238,238)] w-full py-3 md:py-6 lg:py-9 mt-[2rem] md:mt-[4rem] lg:mt-[6rem] pl-[1rem] md:pl-[2rem] lg:pl-[3rem]">

      <h1 className='caveat-heading w-[80%] text-2xl md:text-3xl lg:text-6xl'>
      Archbuild offers career opportunities at every level, across a broad array of disciplines.
      </h1>

      </div>

    <div className="w-[100%]">
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation={true}
      pagination={true}
      slidesPerView={slidesPerView}
       spaceBetween={25}
      className=""
      >
        <SwiperSlide className="w-full">
            <motion.img src="https://static2.gensler.com/uploads/image/42970/filename/carousel-at-whiteboard-1024x576_1649202361.jpg" alt="carousel" className="w-full"
                initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
            />
        </SwiperSlide>

        <SwiperSlide className="w-full">
        <motion.img src="https://static2.gensler.com/uploads/image/42973/filename/carousel-costa-deck-1024x576_1649202362.jpg" alt="carousel"
            initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
        />
        </SwiperSlide>

        <SwiperSlide className="w-full">
        <motion.img src="https://static2.gensler.com/uploads/image/42573/filename/carousel-houston-1024x576_1646355910.jpg" alt="carousel"
            initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
        />
        </SwiperSlide>

        <SwiperSlide className="w-full">
        <motion.img src="https://static2.gensler.com/uploads/image/42977/filename/carousel-hallwalker-space-mix-1024x576_1649202362.jpg" alt="carousel"
            initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
        />
        </SwiperSlide>

        <SwiperSlide className="w-full">
        <motion.img src="https://static2.gensler.com/uploads/image/42979/filename/carousel-library-1024x576_1649202736.jpg" alt="carousel"
            initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
        />
        </SwiperSlide>

        <SwiperSlide className="w-full">
        <motion.img src="https://static1.gensler.com/uploads/image/42975/filename/carousel-multi-work-styles-1024x576_1649202362.jpg" alt="carousel"
            initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
        />
        </SwiperSlide>

        <SwiperSlide className="w-full">
        <motion.img src="https://static1.gensler.com/uploads/image/42969/filename/carousel-2-materials-1024x576_1649202360.jpg" alt="carousel"
            initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
        />
        </SwiperSlide>

        <SwiperSlide className="w-full">
        <motion.img src="https://static2.gensler.com/uploads/image/75241/carousel-dubai-01-1024x576_1651084609.jpg" alt="carousel"
            initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
        />
        </SwiperSlide>

        <SwiperSlide className="w-full">
        <motion.img src="https://static1.gensler.com/uploads/image/42972/filename/carousel-folding-wall-1024x576_1649202361.jpg" alt="carousel"
            initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
        />
        </SwiperSlide>

        <SwiperSlide className="w-full">
        <motion.img src="https://static1.gensler.com/uploads/image/42976/filename/carousel-we-are-1024x576_1649202362.jpg" alt="carousel"
            initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
        />
        </SwiperSlide>

        <SwiperSlide className="w-full">
        <motion.img src="https://static2.gensler.com/uploads/image/42578/filename/carousel-tampa-1024x576_1646355926.jpg" alt="carousel"
            initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
        />
        </SwiperSlide>

        <SwiperSlide className="w-full">
        <motion.img src="https://static2.gensler.com/uploads/image/75226/carousel-nyc-1024x576_1651006679.jpg" alt="carousel"
            initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
        />
        </SwiperSlide>

        <SwiperSlide className="w-full">
        <motion.img src="https://static1.gensler.com/uploads/image/75215/carousel-london-02-1024x576_1650998647.jpg" alt="carousel"
            initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
        />
        </SwiperSlide>
      </Swiper>
</div>

    <div className="w-full flex flex-col justify-center items-start md:items-start lg:items-center mt-[2rem] md:mt-[4rem] lg:mt-[7rem] px-2 md:px-2 lg:px-0" id='section1'>

    
        <div className="flex flex-col" 
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}
            >
            <h1 className="font-semibold tracking-[1px] text-xl">
            How to Apply
            </h1>
            <div className="flex flex-col md:flex-col lg:flex-row items-start md:items-start lg:items-center justify-center mt-[2rem] gap-5">
                <div className="flex flex-col items-start justify-center">
                    <h1 className="josefin-sans-p">
                    New Applicants
                    </h1>
                    <button className="button">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text uppercase text-black">Search for jobs</span>
                </span>
            </button>
                </div>

                <div className="flex flex-col items-start justify-center">
                    <h1 className="josefin-sans-p">
                    Returning Applicants
                    </h1>
                    <button className="button">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text uppercase text-black">Login to your canditate profile</span>
                </span>
            </button>
                </div>

                <div className="flex flex-col items-start justify-center">
                    <h1 className="josefin-sans-p">
                    Questions?
                    </h1>
                    <button className="button">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text uppercase text-black">application process faq</span>
                </span>
            </button>
                </div>
            </div>
        </div>
    </div>


    <div id='section2' className="w-full flex flex-col items-start md:items-start lg:items-center mt-[2rem] md:mt-[4rem] lg:mt-[7rem] px-4 md:px-4 lg:px-10 bg-[rgb(238,238,238)] py-[3rem]">
    
        <div className="flex flex-col"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
        <h1 className="font-semibold tracking-[1px] text-lg md:text-xl lg:text-2xl">
        We believe in growing our firm by investing in our people.
            </h1>

            <h1 className="font-bold text-[11px] poetsen-one-regular mt-[4rem]">
            MEET SOME OF OUR ARCHBUILD VOICES
            </h1>


            <div className="w-full flex flex-col md:flex-col lg:flex-row justify-center items-center gap-5 overflow-hidden mt-[4rem]">
            <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[20rem]'
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                <img src='https://static1.gensler.com/uploads/image/82787/Gensler Voices Blog_Joan Ng_1024_576_1681151148.jpg' alt='map' className='w-[20rem] h-auto flex-shrink-0 img-hero' />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold duration-75 dancing-script-big sub-title">Archbuild Voices: Joan Megan Ng on the Beauty of Design</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We sat down with Joan Megan Ng, from our Archbuild Singapore office, to explore what it’s like to be a project accountant at Archbuild.
                 ​</p>

                
                </div>
                </div>

                <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[20rem]'
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
                <img src='https://static2.gensler.com/uploads/image/82781/Gensler Voices Blog_Argelia Barcena_1024_576_1681150942.png' alt='map' className='w-[20rem] h-auto flex-shrink-0 img-hero' />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold duration-75 dancing-script-big sub-title">Archbuild Voices: Argelia Bárcena on Serendipitous Moments with Lasting Impact</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We sat down with Argelia Bárcena, from our Archbuild San Francisco office, to discuss what&#039;s ahead for architecture and design and the power of pivoting in your career.
                 ​</p>

                
                </div>
                </div>

                <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[20rem]'
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
                <img src='https://static1.gensler.com/uploads/image/82778/Gensler Voices Blog_Jacob Simons_1024_576_1681150750.jpg' alt='Jacob Simons wearing glasses.' className='w-[20rem] h-auto flex-shrink-0 img-hero' />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold duration-75 dancing-script-big sub-title">Archbuild Voices: Jacob Simons on the Power of Community </h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We sat down with Jacob Simons, Northwest Regional Strategy Practice Leader in our Archbuild Seattle office, to discuss the power in leaving a legacy of positivity. 
                 ​</p>

                
                </div>
                </div>


            </div>

            <div className="flex flex-col items-center justify-center mt-[4rem]">
                <p className="sm:w-[80%] md:w-[80%] lg:w-[60%] josefin-sans-p text-lg md:text-xl lg:text-xl">
                We are a constellation of stars invigorated by our incredible diversity and global reach. Our team of 6,000+ talented design professionals, strategists, innovators, and leaders is driven by a shared purpose to improve how people experience the places we build.
                </p>

                <div className="flex flex-col md:flex-col lg:flex-row gap-4 justify-center items-start md:items-start lg:items-center mt-[3rem]">
                <Link to='/people'>
                <button className="button">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text uppercase text-black">meet more Archbuild voices</span>
                </span>
            </button>
            </Link>

            <Link to='/aboutpage'>
            <button className="button">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text uppercase text-black">learn more about out firm</span>
                </span>
            </button>
            </Link>
                </div>
            </div>
        </div>
    </div>

    <div id='section3' className="w-full mt-[2rem] md:mt-[4rem] lg:mt-[7rem] px-4 md:px-4 lg:px-10 py-[3rem] flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-xl lg:text-2xl sm:w-full md:w-[80%] lg:w-[70%] font-bold"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
        We’re focused on making incredible progress towards a more diverse, equitable, and inclusive future.
        </h1>

        <h3 className="josefin-sans-p text-xl mt-[4rem]">
        ARCHBUILD’S GLOBAL WORKFORCE
        </h3>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-8 mt-[3rem]"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
            <div className="flex flex-col items-center justify-center">
            <NumberCounter targetNumber={87} duration={2000} />
            <p className='text-xs uppercase'>
            COUNTRIES OF ORIGIN
            </p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <NumberCounter targetNumber={101} duration={2000} />
            <p className='text-xs uppercase'>
            LANGUAGES SPOKEN
            </p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <NumberCounter targetNumber={1000} duration={8000} />
            <p className='text-xs uppercase'>
            UNIVERSITIES ATTENDED
            </p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <NumberCounter targetNumber={55} duration={1000} />
            <p className='text-xs uppercase'>
            offices
            </p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <NumberCounter targetNumber={10} duration={500} />
            <p className='text-xs uppercase'>
            regions
            </p>
            </div>
        </div>


        <div className="grid grid-cols-3 items-center justify-center gap-[1rem] md:gap-[3rem] lg:gap-[5rem] mt-[3rem]"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
            <div className="flex flex-col items-center justify-center">
                <h1 className='font-semibold text-2xl md:text-4xl lg:text-6xl'>
                54.9%
                </h1>

                <p className='text-xs uppercase'>
            female
            </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className='font-semibold text-2xl md:text-4xl lg:text-6xl'>
                .2%
                </h1>

                <p className='text-xs uppercase'>
            non-binary
            </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className='font-semibold text-2xl md:text-4xl lg:text-6xl'>
                44.9%
                </h1>

                <p className='text-xs uppercase'>
            male
            </p>
            </div>
        </div>

        <div className="flex w-[23rem] md:w-[30rem] lg:w-[43rem]"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
            <div className="w-[70%] bg-black h-[1rem]"></div>

            <div className="w-[30%] bg-[rgb(232,32,17)] h-[1rem]"></div>
        </div>


        <div className='flex flex-col justify-center items-start md:items-center lg:items-center [mt-3rem] md:mt-[4rem] lg:mt-[4rem] gap-5'
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
        <p className='sm:w-full md:w-[80%] lg:w-[60%] poetsen-one-regular'>
        In order to create equitable and inclusive places and spaces, we first strive to build a firm from top to bottom with people that are representative of the diversity, authenticity, and local culture of the cities we help reimagine.
        </p>

        <p className="sm:w-full md:w-[80%] lg:w-[60%] josefin-sans-p">
        Since establishing its Strategies to Fight Racism in 2020, the firm has created a Global Race and Diversity Committee, launched a student design charrette with seven Historically Black Colleges and Universities, introduced Black Lives and Design research grants, and recruited and hired more Black professionals. These ongoing initiatives build upon our inclusive people-first philosophy and reinforce our unique firm culture.
        </p>
        <Link to='/aboutpage'>
        <button className="button mt-[1rem]">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text text-black">learn about our diversity initiatives</span>
                </span>
            </button>
            </Link>

        </div>
    </div>

    <div id='section4' className="w-full flex flex-col items-start justify-center md:items-center lg:items-center mt-[2rem] md:mt-[4rem] lg:mt-[7rem] px-4 md:px-4 lg:px-10 bg-[rgb(238,238,238)]">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-[12px] mt-[2rem] tracking-[1px]">
        Archbuild is committed to the education of emerging design talent through internships, scholarships and other programs.
        </h1>

        <div className="grid grid-cols-1 mt-[4rem] gap-4 md:gap-5 lg:gap-10 items-center justify-center">
        <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full'
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/42590/filename/l-r-vr-boards-1000x600_1646684406.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero'
                initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, ease: 'easeOut'}} />
                </div>
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold dancing-script-big">Internships</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Each year, Archbuild’s intern class represents the best emerging talent from schools around the world. Internships in each of Archbuild's offices provide unique hands-on experience in real projects, working alongside our design teams and clients.
                 ​</p>

                 <button className="button mt-[1rem]">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text text-black">learn more</span>
                </span>
            </button>
                </div>
                </div>

                <div className='flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full'
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/42591/filename/l-r-conference-table-1000x600_1646689095.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                    initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, ease: 'easeOut'}}
                />
                </div>
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold dancing-script-big">Scholarships</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Archbuild is committed to the education of emerging design talent and currently offers several U.S. scholarship programs annually for architecture and interior design students and one U.K. Bursary.
                 ​</p>

                 <button className="button mt-[1rem]">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text text-black">learn more</span>
                </span>
            </button>
                </div>
                </div>



                <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full'
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/42592/filename/l-r-standing-table-1000x600_1646690619.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                    initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, ease: 'easeOut'}}
                />
                </div>
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold dancing-script-big">Design Strategist Development Program</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Archbuild’s Design Strategist Development (DSD) Program is an 18-month, in-office, professional training program geared towards high performers considering a future career in design strategy.
                 ​</p>

                 <button className="button mt-[1rem]">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text text-black">learn more</span>
                </span>
            </button>
                </div>
                </div>

        </div>
    </div>

    <div id='section5' className="w-full flex flex-col items-start md:items-start lg:items-center mt-[2rem] md:mt-[4rem] lg:mt-[7rem] px-4 md:px-4 lg:px-10"
    data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
    data-aos-offset={isBigScreen ? '10' : '2'}>
        <h1>
        Our approach to benefits and compensation echoes a commitment to collaboration and shared success.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center mt-[4rem]">
        <div className='items-start flex flex-col gap-3 lg:gap-5'>

<div className='top-border w-full md:[w-14rem] lg:w-[20rem]'></div>
<DiAtom className="text-6xl" />

    <p className='font-semibold text-black text-xs md:text-sm lg:text-sm josefin-sans-p'>
    Join a global firm where your work drives meaningful change.
    </p>

    

</div>


<div className='items-start flex flex-col gap-1 lg:gap-2'>

<div className='top-border w-full md:[w-14rem] lg:w-[20rem]'></div>
<FcCollaboration className="text-6xl" />

    <p className='font-semibold text-black text-xs md:text-sm lg:text-sm josefin-sans-p'>
    Enjoy flexibility, balance, and borderless collaboration.
    </p>
</div>


<div className='items-start flex flex-col gap-3 lg:gap-5'>

<div className='top-border w-full md:[w-14rem] lg:w-[20rem]'></div>
<MdOutlineDeveloperBoard className="text-5xl" />

    <p className='font-semibold text-black text-xs md:text-sm lg:text-sm josefin-sans-p'>
    Pursue your passions and career goals through professional development.
    </p>
</div>

<div className='items-start flex flex-col gap-3 lg:gap-5'>

<div className='top-border w-full md:[w-14rem] lg:w-[20rem]'></div>
<GiPiggyBank className="text-6xl" />

    <p className='font-semibold text-black text-xs md:text-sm lg:text-sm josefin-sans-p'>
    Be part of an employee-owned firm with generous compensation and opportunity for bonuses twice a year.
    </p>
</div>


<div className='items-start flex flex-col gap-3 lg:gap-5'>

<div className='top-border w-full md:[w-14rem] lg:w-[20rem]'></div>
<FcIdea className="text-6xl" />

    <p className='font-semibold text-black text-xs md:text-sm lg:text-sm josefin-sans-p'>
    Be part of an employee-owned firm with generous compensation and opportunity for bonuses twice a year.
    </p>
</div>


<div className='items-start flex flex-col gap-3 lg:gap-5'>

<div className='top-border w-full md:[w-14rem] lg:w-[20rem]'></div>
<FaGlobeAfrica className="text-6xl" />

    <p className='font-semibold text-black text-xs md:text-sm lg:text-sm josefin-sans-p'>
    Build relationships across our network of 53 offices around the globe.
    </p>
</div>

<div className='items-start flex flex-col gap-3 lg:gap-5'>

<div className='top-border w-full md:[w-14rem] lg:w-[20rem]'></div>
<SlEvent className="text-6xl" />

    <p className='font-semibold text-black text-xs md:text-sm lg:text-sm josefin-sans-p'>
    Tap into unprecedented access to design industry leaders, events, and resources.
    </p>
</div>


<div className='items-start flex flex-col gap-3 lg:gap-5'>

<div className='top-border w-full md:[w-14rem] lg:w-[20rem]'></div>
<GrCertificate className="text-6xl" />

    <p className='font-semibold text-black text-xs md:text-sm lg:text-sm josefin-sans-p'>
    Advance your path toward licensure and certification.
    </p>
</div>

<div className='items-start flex flex-col gap-3 lg:gap-5'>

<div className='top-border w-full md:[w-14rem] lg:w-[20rem]'></div>
<FaHeartPulse className="text-6xl" />

    <p className='font-semibold text-black text-xs md:text-sm lg:text-sm josefin-sans-p'>
    Take advantage of comprehensive physical, emotional, and financial benefits.
    </p>
</div>

        </div>
    </div>
        </div>
    )
}