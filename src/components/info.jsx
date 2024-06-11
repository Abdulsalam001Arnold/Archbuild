import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useMediaQuery } from 'react-responsive';
import {motion} from 'framer-motion'

export default function About() {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: false, // Whether animation should happen only once
        });
      }, []);
    
      // Define media query hooks
      const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });



    return(
        <div className="w-full bg-[rgb(28,28,28)] h-screen flex justify-center items-center px-16">
        <div className="mt-[5rem]">
            <h1 className="text-white text-5xl font-light mb-6 tracking-[2px] caveat-heading" 
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}
            >
                We are creating a better world <br/> through the power of design.
            </h1>
            <p className="text-white mb-6 play-regular text-xs md:text-sm lg:text-sm"
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}
            >
                <p className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</p> is a global architecture, design, and planning firm with 53 locations across Asia, Europe, Australia, the Middle East, and the Americas. Every day we impact millions of people’s lives with the spaces we create, which is why people are at the center of everything we do. Designing for the human experience is what allows us to tackle the toughest challenges facing cities and shape a more resilient and equitable future for everyone.
            </p>
            <button className="button">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text"><Link to='/aboutpage'>LEARN MORE ABOUT <p className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</p></Link></span>
                </span>
            </button>
        </div>
    </div>
    
    )
};
