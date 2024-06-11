import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";



export default function Structure(){
   


    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should happen only once
          });
    }, [])


    return(
        <div className='w-full mt-[7rem] mb-[4rem]'>
            <motion.div className="w-full items-start pl-[1.45rem] md:pl-[2.2rem] lg:pl-[3rem] py-[1rem] bg-[rgb(238,238,238)] md:bg-transparent lg:bg-transparent"
            initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}>
            <Link to='/aboutpage'>
            <span className="w-full flex items-center text-[rgb(136,136,136)]">
            <h1 className="uppercase text-sm md:text-lg lg:text-xl josefin-sans-p">
                About
            </h1>

            <MdChevronRight className="text-sm md:text-lg lg:text-xl"/>
            </span>
            </Link>

            <h1 className="uppercase mt-[1rem] font-[12px] md:font-[12px] lg:font-[12px] text-xl md:text-3xl lg:text-[3rem]">
            Corporate Structure
            </h1>
            </motion.div>

            <motion.div className='w-full mt-[4rem] flex flex-col items-center justify-center'
            initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}>
                <img src='https://www.nikken.co.jp/en/about/p4iusj0000001dl6-img/en_About_CorporateStructure.png' alt='structure' className='sm:w-full md:w-[45rem] lg:w-[50rem]'/>
            </motion.div>
        </div>
    )
}