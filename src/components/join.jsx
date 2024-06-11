
import { Link } from "react-router-dom"

import { motion } from "framer-motion"
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";



export default function Join() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should happen only once
          });
    }, [])
    




    return(
        <div className="w-[100%] bg-black text-white">
            <motion.div className="flex flex-col lg:flex-row items-center justify-center gap-7" 
            initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}>
                <div>
                    <motion.img src="https://static1.gensler.com/uploads/image/85346/gensler-la-1280x900_1686179621.jpg" alt="walking"
                        initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
                    />
                </div>
                <div 
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
                    <h1 className="text-2xl font-semibold mb-4 caveat-heading">
                    Design Your Career With&nbsp;Us
                    </h1>
                    <p className="w-[80%] text-[19px] josefin-sans-p">
                    We grow our firm by growing our people — if you are a recent graduate or a seasoned designer who believes in the power of design, we invite you to search for opportunities and explore how you can reimagine the future with&nbsp;us.
                    </p>

                    <Link to='/careers'>
                    <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">JOIN OUR TEAM</span>
    </span>
</button>
</Link>
                </div>
            </motion.div>
        </div>
    )
}