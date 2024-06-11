import React, { useEffect } from 'react';

import { MdOutlineDoubleArrow } from "react-icons/md";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import 'aos/dist/aos.css'; 


export default function Card() {



  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once
    });
  }, [])
  return (
    <div className="w-[100%] justify-center px-8 bg-[rgb(238,238,238)] py-8">
      <div className='mb-[4rem]'>
        <h1 className='text-xl font-bold caveat-heading'>
          FEATURED PROJECTS
        </h1>
      </div>

      <div className='flex flex-col md:flex-col lg:flex-row items-center justify-evenly gap-4'>
      <div
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '10' : '2'}
    >
      <div className="image-containers">
        <motion.img
          src="https://static1.gensler.com/uploads/image/79095/case-study-guangzhou-substation-concept-proposal-02-508x508_1669937159.jpg"
          alt="tree"
          className='img-hero w-[27rem]'
          initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
        />
        <div className="overlay">
          <div className="pt-[2.56rem] px-3 relative h-[100%]">
            <h2 className='text-xl font-bold w-[90%] poetsen-one-regular'>
              Guangzhou Substation Concept Proposal
            </h2>
            <p className='mt-[1rem] play-regular'>
              A non-typical approach to urban infrastructure creates community and supports local ecologies in the development of a new electrical substation.
            </p>
            <MdOutlineDoubleArrow className='absolute bottom-0 right-0 text-5xl text-customBlue' />
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
              src="https://static1.gensler.com/uploads/image/78707/thumb-508x508_1668037414.jpg"
              alt="tree"
              className='img-hero w-[27rem]'
              initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
            />
            <div className="overlay">
              <div className="pt-[2.56rem] px-3 relative h-[100%]">
                <h2 className='text-xl font-bold poetsen-one-regular'>Harvey B. Milk Terminal 1 Renovation</h2>
                <p className='mt-[12px] play-regular'> Reductions in energy, carbon, and waste impacts makes SFO’s Harvey B. Milk Terminal a sustainable benchmark for future airports by setting new standards through its Triple Zero Challenge. </p>
                <MdOutlineDoubleArrow className='absolute bottom-0 right-0 text-5xl text-customBlue' />
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
              src="https://static1.gensler.com/uploads/image/79209/case-study-torre-judicial-508x508_1670460157.jpg"
              alt="tree"
              className='img-hero w-[27rem]'
              initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
            />
            <div className="overlay">
              <div className="pt-[2.56rem] px-3 relative h-[100%]">
                <h2 className='text-xl font-bold poetsen-one-regular'>Torre Judicial</h2>
                <p className='mt-[12px] play-regular'> This new government workplace building is designed to maximize energy efficiency, performance, and occupant well-being while enhancing community health. </p>
                <MdOutlineDoubleArrow className='absolute bottom-0 right-0 text-5xl text-customBlue' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
