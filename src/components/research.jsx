
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from 'react-router-dom'
import Dialogue from "./dialogue";
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useMediaQuery } from 'react-responsive';


export default function Research() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);

  // Define media query hooks
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });
    return(
        <div className='w-full mt-[6rem]'>
            <div className='w-full relative h-screen md:h-[100vh]'>
      <video loop={true} autoPlay={true} className='w-full h-full object-cover'>
        <source src='https://data.openasset.com/3f741c2e/05e51d96c94bf73cf1ff6be5d8c89454/F_240514_N4_mp4/F_240514_N4_videolarge.mp4' type='video/mp4'></source>
    </video>

    <div className='absolute vid-contain flex flex-col justify-center items-center'>

    <div className='w-full flex flex-col items-center md:items-center lg:items-start justify-center pl-0 md:pl-0 lg:pl-[5rem]'>
        <div className='px-3 content h-[16rem] flex flex-col items-center justify-center w-[20rem] py-3'>
            <h1 className='w-[80%] mb-[1rem] dancing-script-head text-sm md:text-[12px] lg:text-lg'> 
            Global Workplace Survey 2024
            </h1>

            <p className='w-[80%] poetsen-one-regular text-xs md:text-sm lg:text-sm'>
            Our Survey Data Reveals the Top Factors Driving a High-Performance Workplace
            </p>

        </div>
        </div>
    </div>
      </div>


      <div className='w-full bg-black text-white px-3'>
        <motion.div className='flex flex-col justify-center items-center gap-6'
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}>
            <span>
                <h1 className='inline caveat-logo text-xl md:text-xl lg:text-2xl'>The Archbuild Research Institute</h1>
                <p className='text-xl inline'>plays a vital role in unlocking innovative design solutions needed to navigate a changing world.</p>
            </span>

            <p className='sm:w-full md:w-[90%] lg:w-[80%] font-[13px] text-lg'>
            Our network of researchers and thought leaders create the insights our designers and clients need to address their toughest problems. The Institute is organized into six pillars of research expertise with a focus on Workplace, Cities, Health, Lifestyle, Equity, and Resilience. We fund over 50 global research grants annually.

            </p>

            <button className="button mt-[1rem]">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">Learn more</span>
                </span>
            </button>
        </motion.div>
      </div>

      <div className='w-full mt-[3rem] flex flex-col items-center justify-center'>
      <div className="grid grid-cols-1 mt-[4rem] gap-4 md:gap-5 lg:gap-10 items-center justify-center">
        <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full'
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
          data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/91403/City Pulse 1024x576_1714158349.jpg' alt='return of the city' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">

                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big"> The Return of the City</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p"> We examined how global perceptions have shifted from 2021 to 2023 across 15 global cities to understand the obstacles and opportunities facing cities today.
                 ​</p>
                </div>
                </div>

                <div className='flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full'
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/84379/EXI_HospitalitySurvey2023_1024x576_1684242939.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">Hospitality Experience Survey 2024</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">As travel ramps up, our survey explores the growing blend of business and leisure travel, new definitions of luxury hospitality experiences, and heightened guest expectations. 
                 ​</p>

                 
                </div>
                </div>



                <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full'
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/90047/240131_PostPandemicLearning_1024x576_1706738496.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">Fostering Lifelong Learning at Universities in Latin America</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We conducted research at five universities in Latin America to understand how learning landscapes can support different modes of learning. 
                 ​</p>

                 
                </div>
                </div>


                <div className='flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/89796/240104_Education_Bipoc Experience_1024x576_1704923141.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">Education and the BIPOC Student Experience</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We conducted research with a diverse group of New York City school students to understand how to create inclusive school buildings that feel welcoming and supportive for all.
                 ​</p>

                 
                </div>
                </div>

                <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/85429/Global-WPS-Survey2023_1024x576_1686244161.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">Global Workplace Survey Comparison 2023</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We surveyed office workers around the globe to understand how the workplace should evolve to meet their needs. 
                 ​</p>

                 
                </div>
                </div>

                <div className='flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/83630/GERMANY_WorkplaceSurveySpring2023_1024x576_1682704278.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">Germany Workplace Survey 2023</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We surveyed office workers in Germany to understand how they are using the office now and their ideal workplace of the future. We found that office workers value the office for social interaction and connection with their team. 
                 ​</p>

                 
                </div>
                </div>


                <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/83300/MIDDLE-EAST_WorkplaceSurveySpring2023_1024x576_1682102548.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">Middle East Workplace Survey 2024</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We surveyed office workers around the globe to understand how the workplace should evolve to meet their needs. 
                 ​</p>

                 
                </div>
                </div>


                <div className='flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/83023/230414_BLD_Adjusting for Bias_1024x576__1681505025.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">Adjusting for Bias in the Workplace</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We sought to understand how to address the impact of bias in the workplace and developed a process for engaging in conversations around equity and inclusion.
                 ​</p>

                 
                </div>
                </div>

                <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static2.gensler.com/uploads/image/80887/MX_WorkplaceSurvey2023_1024x576_1676487389.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}} />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">Mexico Workplace Survey 2022</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We surveyed office workers in Mexico to understand how they are using the office now and their ideal workplace of the future. As they return, employees want scheduled, purposeful interactions.  
                 ​</p>

                 
                </div>
                </div>


                <div className='flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static2.gensler.com/uploads/image/80734/McCann_N15_1675895087.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}} />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">3 Surprises Impacting the Return to the Office</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Our workplace research uncovered three surprising truths impacting the new role of the office, and what might bring workers back. 
                 ​</p>

                 
                </div>
                </div>


                <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static2.gensler.com/uploads/image/80600/WPS_blog4_hero_1024_1675451012.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}} />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Blog</h4>
                  <h3 className="text-lg font-bold dancing-script-big">10 Spaces That Are No Longer Optional to Create a Great Workplace Experience</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">What amenities can bring people back to the office? Here are 10 spaces that have the greatest impact on workplace effectiveness and experience.   
                 ​</p>

                </div>
                </div>


                <div className='flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static2.gensler.com/uploads/image/80149/CA_WorkplaceSurveyFall2022_1024x576_1674071093.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}} />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">Canada Workplace Survey 2022</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We surveyed Canadian office workers to understand their preferred mix of experiences in the office to get work done.
                 ​</p>

                 
                </div>
                </div>

                <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/79337/post--CPS_Fall22_Blog2--1024_1670976321.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Blog</h4>
                  <h3 className="text-lg font-bold dancing-script-big"> What the Rise of Micromobility Means for the Future of Cities</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">One trend that emerged from Archbuild’s survey of 15,000 residents in 30 cities may change how we navigate urban life: micromobility is more popular than ever before.    
                 ​</p>

                </div>
                </div>


                <div className='flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/79199/linkedin-1024x576_1670451073.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">U.S. Workplace Survey 2022</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">The future of the office is about creating the right experiences. Beyond collaboration, employees want the office to be a great place to get work done. 
                 ​</p>
                </div>
                </div>


                <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static2.gensler.com/uploads/image/78842/landing-1024x576_1668544056.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Sustainability</h4>
                  <h3 className="text-lg font-bold dancing-script-big">Climate Action Through Design </h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p"> Our Climate Action Through Design Report presents solutions for transforming the built environment to achieve a net zero carbon impact across our portfolio and the broader design industry.    
                 ​</p>

                </div>
                </div>


                <div className='flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static2.gensler.com/uploads/image/77886/project_Intel_1024x576_04_1504300248_1024x576_1663263512.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">The Culture of Innovation Diagnostic</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Archbuild’s Culture Strategy team developed a diagnostic framework that uncovers the key factors to activate an intentional culture of innovation.
                 ​</p>
                </div>
                </div>

                <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' 
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static2.gensler.com/uploads/image/76086/GRI_ListeningMode2.0_1024x576_1656003296.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">Models for Co-Creation and Partnership with the Black Community</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p"> We investigated how Archbuild can empower and engage Black communities with inclusive design models of partnership.    
                 ​</p>

                </div>
                </div>


                <div className='flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static2.gensler.com/uploads/image/76714/GRI_SportsExperienceSurvey2022_1024x576_1658502739.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}} />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">Sports Experience Survey 2022 </h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">With live sports at a turning point, it’s more important now than ever to understand what people value in a live sports experience, and how venues can adapt and deliver.
                 ​</p>
                </div>
                </div>

                <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full' data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static2.gensler.com/uploads/image/75628/GRI_CPS_Spring2022_1024x576_1653330820.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}} />
                </div>
                <div className="mt-[0.5rem]">
                <h4 className='text-xs'>Research</h4>
                  <h3 className="text-lg font-bold dancing-script-big">City Pulse Survey Spring 2022</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Our City Pulse Survey Spring 2022 surveyed city residents in 25 cities across the world to understand how residents are feeling about their cities through the lenses of affordability, work, and safety.     
                 ​</p>

                </div>
                </div>
        </div>
      </div>

      <div className='w-full bg-[rgb(238,238,237)] flex flex-col justify-center items-center py-8 px-2'>
      <div className='mb-[4rem]'>
        <h1 className='text-xl font-bold caveat-heading'>
        FEATURED TOPICS
        </h1>
      </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5'>

        <div
          className="relative animated-item"
          data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}
        >
          <div className="image-containers">
            <motion.img
              src="https://static2.gensler.com/uploads/image/82291/work-02-508x508_1680136914.jpg"
              alt="tree"
              className='img-hero w-[27rem]'
              initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
            />
            <div className="overlay">
              <div className="pt-[2.56rem] px-3 relative h-[100%]">
                <h2 className='text-xl font-bold w-[90%] poetsen-one-regular'> Work &amp; The Workplace </h2>
                <p className='mt-[1rem] play-regular'> Through our global research on effective workplace experiences, we unlock new solutions and strategies that define the future of work.</p>
                <p  className='absolute bottom-0 right-0 text-5xl text-customBlue'>
                <MdOutlineDoubleArrow className='color' />
                </p>
              </div>
            </div>
          </div>
        </div>


        <div
          className="relative animated-item"
          data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}
        >
          <div className="image-containers">
            <motion.img
              src="https://static2.gensler.com/uploads/image/82074/cities-508x508_1679678015.jpg"
              alt="tree"
              className='img-hero w-[27rem]'
              initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
            />
            <div className="overlay">
              <div className="pt-[2.56rem] px-3 relative h-[100%]">
                <h2 className='text-xl font-bold w-[90%] poetsen-one-regular'> Future of Cities</h2>
                <p className='mt-[1rem] play-regular'>  Through our global research on urban experiences, we are redefining the future of cities as ecosystems of multiuse, multi-generational, 20-minute neighborhoods. </p>
                <p  className='absolute bottom-0 right-0 text-5xl text-customBlue'>
                <MdOutlineDoubleArrow className='color' />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative animated-item"
          data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}
        >
          <div className="image-containers">
            <img
              src="https://static2.gensler.com/uploads/image/82078/resillience-508x508_1679680366.jpg"
              alt="tree"
              className='img-hero w-[27rem]'
            />
            <div className="overlay">
              <div className="pt-[2.56rem] px-3 relative h-[100%]">
                <h2 className='text-xl font-bold w-[90%] poetsen-one-regular'>Sustainability &amp; Resilience</h2>
                <p className='mt-[1rem] play-regular'>  Our sustainability research reveals practical design solutions and strategies for reducing our carbon impact and leading the building industry toward net zero energy.  </p>
                <p  className='absolute bottom-0 right-0 text-5xl text-customBlue'>
                <MdOutlineDoubleArrow className='color' />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative animated-item"
          data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}
        >
          <div className="image-containers">
            <img
              src="https://static1.gensler.com/uploads/image/91829/future-of-healthcare-hospital-of-the-future-508x508_1715896388.jpg"
              alt="tree"
              className='img-hero w-[27rem]'
            />
            <div className="overlay">
              <div className="pt-[2.56rem] px-3 relative h-[100%]">
                <h2 className='text-xl font-bold w-[90%] poetsen-one-regular'>Future of Healthcare </h2>
                <p className='mt-[1rem] play-regular'> Our research on the future of healthcare investigates how healthcare design is shaping patient and worker experiences and benefiting communities.  </p>
                <p  className='absolute bottom-0 right-0 text-5xl text-customBlue'>
                <MdOutlineDoubleArrow className='color' />
                </p>
              </div>
            </div>
          </div>
        </div>



        <div
          className="relative animated-item"
          data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}
        >
          <div className="image-containers">
            <img
              src="https://static1.gensler.com/uploads/image/82087/equity-508x508_1679685570.jpg"
              alt="A group of people walking around a park with buildings in the background."
              className='img-hero w-[27rem]'
            />
            <div className="overlay">
              <div className="pt-[2.56rem] px-3 relative h-[100%]">
                <h2 className='text-xl font-bold w-[90%] poetsen-one-regular'>Design for Equity </h2>
                <p className='mt-[1rem] play-regular'>  Our research explores equitable and inclusive design solutions to create diverse spaces for our clients and communities around the world.  </p>
                <p  className='absolute bottom-0 right-0 text-5xl text-customBlue'>
                <MdOutlineDoubleArrow className='color' />
                </p>
              </div>
            </div>
          </div>
        </div>


        <div
          className="relative animated-item"
          data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}
        >
          <div className="image-containers">
            <img
              src="https://static1.gensler.com/uploads/image/82091/lifestyle-508x508_1679685896.jpg"
              alt="A couple of men looking at a large sculpture."
              className='img-hero w-[27rem]'
            />
            <div className="overlay">
              <div className="pt-[2.56rem] px-3 relative h-[100%]">
                <h2 className='text-xl font-bold w-[90%] poetsen-one-regular'> Lifestyle Experiences</h2>
                <p className='mt-[1rem] play-regular'>Our research uncovers the design thinking that defines vibrant, mixed-use lifestyle districts, attainable housing, retail, and hospitality experiences.</p>
                <p  className='absolute bottom-0 right-0 text-5xl text-customBlue'>
                <MdOutlineDoubleArrow className='color' />
                </p>
              </div>
            </div>
          </div>
        </div>


        </div>
      </div>


      <div className='w-full bg-black px-2'>

      <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-3">
        <motion.img src="https://static1.gensler.com/uploads/image/89130/df24-banner-confidential-client-2000x1425_1701194645.jpg" alt='A group of people standing in a room with a stage and lights.' className="sm:w-[25rem] md:w-[30rem] lg:w-[40rem]"
          initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
        />

        <div className="flex flex-col items-start justify-center gap-5 text-white"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
          <h1 className="play-regular font-bold tracking-[1.6px]">
          DESIGN FORECAST 2024
          </h1>

          <p className='poetsen-one-regular sm:w-full md:w-[80%] lg:w-[90%]'>
          Design Forecast identifies the trends and design strategies that are shaping the future of the human experience and the built environment. We provide strategic advice, research, and projects from all 33 of Archbuild’s practices to help clients prepare for transformational times.
          </p>


        <Link to='/blog'>
          <button className="button mt-[1rem]">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">Learn more</span>
                </span>
            </button>
            </Link>
        </div>
      </div>

      </div>

      
      <div className="w-full bg-[rgb(238,235,237)] py-8 px-2 flex flex-col items-center justify-center">
        <h1 className="poetsen-one-regular text-xl md:text-2xl lg:text-3xl">
        RECENT RESEARCH
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-2 md:gap-6 lg:gap-8 mt-[2rem] md:mt-[4rem] lg:mt-[4rem]">

        <div className="flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden sm:w-full md:w-[25rem] lg:w-[25rem]" data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                <img src='https://static1.gensler.com/uploads/image/92279/240531_FutureOfGasStations_1024x576_1717516966.jpg' alt='A group of people sitting outside.' className='sm:w-full md:w-[25rem] lg:w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold sub-title dancing-script-big">The Future of Gas Stations</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We created an interactive tool to help architects and clients map underutilized gas station sites and aid decision-making to repurpose these stranded assets.
                 ​</p>
                </div>
                </div>

                <div className="flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden sm:w-full md:w-[25rem] lg:w-[25rem]" data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                <img src='https://static1.gensler.com/uploads/image/91022/1024x576_1712077777.jpg' alt='A group of people in a room.' className='sm:w-full md:w-[25rem] lg:w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold sub-title dancing-script-big"> Global Workplace Survey 2024</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Archbuild’s workplace survey reveals what matters most to design high-performing workplaces and proposes a new precedent for measuring workplace performance.
                 ​</p>
                </div>
                </div>

                <div className="flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden sm:w-full md:w-[25rem] lg:w-[25rem]" data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                <img src="https://static1.gensler.com/uploads/image/91403/City Pulse 1024x576_1714158349.jpg" alt='People sitting at tables outside.' className='sm:w-full md:w-[25rem] lg:w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold sub-title dancing-script-big"> The Return of the City </h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We examined how global perceptions have shifted from 2021 to 2023 across 15 global cities to understand the obstacles and opportunities facing cities today. 
                 ​</p>
                </div>
                </div>

        </div>

        <div className="flex justify-center">
        <Link to='/projects'>
        <button className="button mt-[1rem]">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text text-black capitalize">View projects</span>
                </span>
            </button>
            </Link>
        </div>
      </div>


      <div className="w-full py-8 px-2 flex flex-col items-center justify-center">
        <h1 className="poetsen-one-regular text-xl md:text-2xl lg:text-3xl">
        DIALOGUE BLOG
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-2 md:gap-6 lg:gap-8 mt-[2rem] md:mt-[4rem] lg:mt-[4rem]">

        <div className="flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden sm:w-full md:w-[25rem] lg:w-[25rem]" data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                <img src='https://static1.gensler.com/uploads/image/91999/post-mexico-city-water-crisis-hero_1024_1716578141.jpg' alt='People riding bikes near a water fountain.' className='sm:w-full md:w-[25rem] lg:w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold sub-title dancing-script-big">An Innovative Solution to Confront Mexico City’s “Day Zero”</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">A visionary project seeks to redefine Mexico City’s relationship with water, offering a beacon of hope in the face of scarcity.
                 ​</p>
                </div>
                </div>

                <div className="flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden sm:w-full md:w-[25rem] lg:w-[25rem]" data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                <img src='https://static1.gensler.com/uploads/image/92162/MassTimberSupplyChain-JacksonAirport-1024px_1717111768.jpg' alt='A building with mountains in the background.' className='sm:w-full md:w-[25rem] lg:w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold sub-title dancing-script-big"> From Mill Towns to Cities: How the Mass Timber Revolution is Impacting People and the Planet </h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">What if there was something the design industry could do to revitalize rural communities with access to abundant, renewable forest resources? 
                 ​</p>
                </div>
                </div>

                <div className="flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden sm:w-full md:w-[25rem] lg:w-[25rem]" data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                <img src="https://static1.gensler.com/uploads/image/92148/TOD_OpportunityIndex_Image4_1024_1717105073.jpg" alt='Map.' className='sm:w-full md:w-[25rem] lg:w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold sub-title dancing-script-big">Introducing the Archbuild Transit-Oriented Development Opportunity Index </h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">The Archbuild Transit-Oriented Development (TOD) Opportunity Index<sup>TM</sup> is a tool for unlocking the unrealized value of existing transit stations and facilities. 
                 ​</p>
                </div>
                </div>

        </div>

        <div className="flex justify-center">
        <Link to='/blog'>
        <button className="button mt-[1rem]">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text text-black capitalize">View full blog</span>
                </span>
            </button>
            </Link>
        </div>
      </div>

      <Dialogue/>

        </div>
    )
}