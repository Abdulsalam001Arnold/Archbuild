import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import {motion} from 'framer-motion'
export default function Report() {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: false, // Whether animation should happen only once
        });
      }, []);
    
      // Define media query hooks
      const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });


    return(
        <div className="w-[100%] py-[2rem] md:py-[4rem] lg:py-[8rem] px-[5px]">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
                <div className="w-full"
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}
                initial={{opacity: 0}} 
                animate={{opacity: 1}}
                 transition={{delay: 1.5, ease: 'easeOut'}}
                >
                    <h2 className="text-[rgb(135,197,101)] font-bold text-3xl josefin-sans-p">
                    Environmental
                    </h2>
                    <h3 className="font-bold text-2xl">
                    leadership is in our DNA.
                    </h3>
                    <p className="font-light">
                    We have a unique obligation and opportunity to take action against the climate crisis.
                    </p>
                </div>

                <div className="w-full"
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '20' : '2'}
                >
                    <h2 className="text-[rgb(251,199,24)] font-semibold text-3xl josefin-sans-p">
                    Social
                    </h2>
                    <h3 className="font-bold text-2xl">
                    equity is good design.
                    </h3>
                    <p className="font-light">
                    Our goal is to be the example for a more diverse and inclusive world.
                    </p>
                </div>

                <div className="w-full"
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '25' : '2'}
                >
                    <h2 className="text-[rgb(16,182,221)] font-semibold text-3xl josefin-sans-p">
                    Governance
                    </h2>
                    <h3 className="font-bold text-2xl">
                    reinforces our values.
                    </h3>
                    <p className="font-light">
                    We are led by a set of guiding principles and people-first values.
                    </p>
                </div>
            </div>

            <div className="flex justify-center">
            <motion.button className="button" whileHover={{scale:[1,1.1,1,1.1,1]}} transition={{ ease: 'easeIn', duration: 1.3}}>
    <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text text-black"><Link to='/aboutpage'>Know more about us</Link></span>
    </span>
</motion.button>
            </div>
        </div>
    )
}