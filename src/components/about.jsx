import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import 'aos/dist/aos.css'; 
import React, { useEffect } from "react";

export default function AboutMain() {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: false
          });
    }, [])
    return(
        <div className="w-full">
            <div className="w-full mt-[5rem]">
                <motion.img src="https://www.nikken.co.jp/en/about/p4iusj0000000tgf-img/img_about.jpg" alt='about-page'
                    initial={{opacity: 0}}   
                    animate={{opacity: 1}}
                    transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
                />

            </div>

            <div className="w-full px-9 sm:mt-[5rem] lg-mt-[7rem] py-[1rem] text-start">
                <div className="sm:mb-[2rem] lg:mb-[5rem] gap-2">
                <h1 className='sm:text-xl lg:text-2xl font-bold inline'>About</h1> 
                <h1 className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</h1>
                </div>

                <p className="sm:w-[70%] lg:w-[60%] text-lg">
                At <h1 className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</h1>,<span className='josefin-sans-p'> we take an integrated approach to our projects as a professional service firm. Across all in-house disciplines of architectural design: urban design, research, planning and consulting -- our teams work collaboratively to deliver better solutions for clients.
                </span>
                </p>
            </div>

            <div className="flex justify-center w-full sm:mt-[1.23rem] md:mt-[1.23rem] lg:mt-[2rem]">
                <ul className="w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to='/about/ceo-message'>
                    <li className='flex items-center hover:text-blue-400 duration-100 border-b-[1px] mb-[0.45rem] lg:mb-[1rem]'>
                    
                    <MdChevronRight />
                    <span className="poetsen-one-regular">
                    CEO Message
                    </span>
                    
                    </li>
                    </Link>
                    <Link to='/about/Corporate-data'>
                    <li className='flex items-center hover:text-blue-400 duration-100 border-b-[1px] mb-[0.45rem] sm:mb-[0.45rem] lg:mb-[1rem]'>
                    <MdChevronRight />
                    <span className='poetsen-one-regular'>
                    Corporate Data
                    </span>
                    </li>
                    </Link>

                    
                    <Link to='/about/Corporate-Structure'>
                    <li className='flex items-center hover:text-blue-400 duration-100 border-b-[1px] mb-[0.45rem] sm:mb-[0.45rem] lg:mb-[1rem]'>
                    <MdChevronRight />
                    <span className='poetsen-one-regular'>
                    Corporate Structure
                    </span>
                    </li>
                    </Link>

                    <Link to='/about/firm-profile'>
                    <li className='flex items-center hover:text-blue-400 duration-100 border-b-[1px] mb-[0.45rem] sm:mb-[0.45rem] lg:mb-[1rem]'>
                    <MdChevronRight />
                    <span className='poetsen-one-regular'>
                    Firm Profile
                    </span>
                    </li>
                    </Link>

                    <Link to='/projects'>
                    <li className='flex items-center hover:text-blue-400 duration-100 border-b-[1px] mb-[0.45rem] sm:mb-[0.45rem] lg:mb-[1rem]'>
                    
                    <MdChevronRight />
                    <span className='poetsen-one-regular'>
                    Our projects
                    </span>
                    
                    </li>
                    </Link>

                    <Link to='/about/Board-members'>
                    <li className='flex items-center hover:text-blue-400 duration-100 border-b-[1px] mb-[0.45rem] sm:mb-[0.45rem] lg:mb-[1rem]'>
                    <MdChevronRight />
                    <span className='poetsen-one-regular'>
                    Board Members
                    </span>
                    </li>
                    </Link>


                    


                <Link to='/about/projects_history'>
                    <li className='flex items-center hover:text-blue-400 duration-100 border-b-[1px] mb-[0.45rem] sm:mb-[0.45rem] lg:mb-[1rem]'>
                    <MdChevronRight />
                    <span className='poetsen-one-regular'>
                    Projects History
                    </span>
                    </li>
                    </Link>

                    

                    <Link to='/about/social_responsibility'>
                    <li className='flex items-center hover:text-blue-400 duration-100 border-b-[1px] mb-[0.45rem] sm:mb-[0.45rem] lg:mb-[1rem]'>
                    <MdChevronRight />
                    <span className='poetsen-one-regular'>
                    Social Responsibility
                    </span>
                    </li>
                    </Link>


                   
                </ul>
            </div>


            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 w-full sm:mt-[1.54rem] lg:mt-[3rem] sm:mb-[1.5rem] lg:mb-[3rem] px-[1rem]">
                <motion.div className='bg-[rgb(241,241,241)] text-center w-full px-[1.32rem] col-span-2 sm:py-[2rem] md:py-[2rem] lg:py-[3rem] box'
                initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
                
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>

                <h1 className="mt-[4rem] font-[1rem] text-xl tracking-[2px] dancing-script-big">
                BRAND VISION
                </h1>

                <p className="sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem] text-center text-lg play-regular">
                We are experts who integrate the skills, knowledge and experience needed to bring our clients' ideas to life.
                </p>

                <p className="mt-[1rem] lg:mt-[2rem] text-center text-lg play-regular">
                We are eager to listen to their voices, to share their vision, and together, to shape spaces, environments, cities and society.
                </p>

                <p className="mt-[1rem] lg:mt-[2rem] text-center text-lg play-regular">
                We invent new possibilities by bringing together the right mix of experience, creativity and passion to deliver that exceeds expectations.
                </p>

                <p className="mt-[1rem] lg:mt-[2rem] text-center text-lg play-regular">
                For 100 years, we have worked hand-in-hand with clients, designing solutions and environments that create truly meaningful experience for all.
                </p>

                </motion.div>

                <div className="flex flex-col gap-3 w-full col-span-1">
                    <motion.div className='bg-[rgb(241,241,241)] text-center w-full py-[4rem] box'
                    initial={{opacity: 0}}   
                    animate={{opacity: 1}}
                    transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
                    data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                    data-aos-offset={isBigScreen ? '10' : '2'}>
                        <h2 className="mt-[4rem] font-[1rem] text-xl tracking-[2px] dancing-script-big">
                        BRAND TAGLINE
                        </h2>

                        <h1 className="text-2xl lg:text-2xl font-[12px] mt-[1rem] tracking-[5px] caveat-heading">
                        EXPERIENCE, INTEGRATED
                        </h1>

                        <p className="mt-[1rem] text-sm tracting-[3px] caveat-heading">
                        Integrating accumulated proficiency to deliver rich experiences.
                        </p>
                    </motion.div>

                    <motion.div className='bg-[rgb(241,241,241)] text-center w-full py-[4rem] box'
                    initial={{opacity: 0}}   
                    animate={{opacity: 1}}
                    transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
                    data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                    data-aos-offset={isBigScreen ? '10' : '2'}>
                        <h1 className="mt-[4rem] font-[1rem] text-xl tracking-[2px] mb-[1rem] lg:mb-[2rem] dancing-script-big">
                        MOTTO
                        </h1>

                        <h4 className='font-[12px] text-3xl caveat-heading'>
                        more than creative
                        </h4>

                        <h4 className='font-[12px] text-3xl caveat-heading'>
                        Immutability
                        </h4>

                        <h4 className='font-[12px] text-3xl caveat-heading'>
                        Fair and neutral manner
                        </h4>
                    </motion.div>
                </div>
            </div>


        </div>
    )
}