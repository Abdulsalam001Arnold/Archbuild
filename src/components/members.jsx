import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";


export default function Memebers(){

    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should happen only once
          });
    }, [])


    return(
        <div className='w-full mt-[6rem]'>
            <motion.div className="w-full items-start pl-[1.45rem] md:pl-[2.2rem] lg:pl-[3rem] py-[1rem] bg-[rgb(238,238,238)] md:bg-transparent lg:bg-transparent"
            initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}>
            <Link to='/aboutpage'>
            <span className="w-full flex items-center text-[rgb(136,136,136)]">
            <h1 className="uppercase text-sm md:text-lg lg:text-xl">
                About
            </h1>

            <MdChevronRight className="text-sm md:text-lg lg:text-xl"/>
            </span>
            </Link>

            <h1 className="uppercase mt-[1rem] font-[12px] md:font-[12px] lg:font-[12px] text-xl md:text-3xl lg:text-[3rem]">
                board members
            </h1>

            </motion.div>


            <div className='w-full mt-[2rem] md:mt-[3rem] lg:mt-[6rem] flex flex-col items-center justify-center'
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                <div>
                    <h1 className='font-[12px] text-lg md:text-xl lg:text-3xl'>
                    Chairman, Vice Chairman, President and CEO, and Vice Presidents
                    </h1>
                </div>

                <div className='w-full mt-[3rem] flex flex-col gap-4 md:lg-8 lg:gap-9'>

                <div className='flex flex-col md:flex-col lg:flex-row justify-center gap-4 md:gap-7 lg:gap-[13rem]'>
                    <div className='items-start flex flex-col gap-1 lg:gap-2'>
                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg'>
                        Tadao Kamei
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] font-xs md:text-sm lg:text-sm'>
                        Chairman of the Board of Directors
                        </p>
                    </div>

                    <div className='items-start flex flex-col gap-1 lg:gap-2'>
                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg'>
                        Atsushi Omatsu
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] font-xs md:text-sm lg:text-sm'>
                        President and CEO
                        </p>
                    </div>
                </div>



                <div className='flex flex-col md:flex-col lg:flex-row justify-center gap-4 md:gap-7 lg:gap-[13rem]'>
                    <div className='items-start flex flex-col gap-1 lg:gap-2'>
                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg'>
                        Hiroshi Nishimura
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] font-xs md:text-sm lg:text-sm'>
                        Executive Vice President
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] font-xs md:text-sm lg:text-sm'>
                        Representative Member of the Board
                        </p>
                    </div>

                    <div className='items-start flex flex-col gap-1 lg:gap-2'>
                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg'>
                        Ken Kodama
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] font-xs md:text-sm lg:text-sm'>
                        Executive Vice President
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] font-xs md:text-sm lg:text-sm'>
                        Representative Member of the Board
                        </p>
                    </div>
                </div>

                </div>
            </div>

<div className='w-full mt-[2rem] md:mt-[3rem] lg:mt-[6rem] flex flex-col items-center justify-center mb-[2rem] md:mb-[3rem] lg:mb-[6rem]'
data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
data-aos-offset={isBigScreen ? '10' : '2'}>
            <div className='mt-[2rem]'>
                    <h1 className='font-[12px] text-lg md:text-xl lg:text-3xl'>
                    Board Members
                    </h1>
                </div>

                <div className='w-full mt-[3rem] flex flex-col gap-4 justify-center md:lg-8 lg:gap-9'>
                    
                    <div className='flex flex-col md:flex-col lg:flex-row justify-center gap-4 md:gap-7 lg:gap-[13rem] w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center gap-[2rem]'>
                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg'>
                        Kiyoyoshi Okumori
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] font-xs md:text-sm lg:text-sm'>
                        Member of the Board
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] font-xs md:text-sm lg:text-sm'>
                        Senior Executive Officer 
                        </p>
                    </div>



                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg'>
                        Kenji Senoo
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] font-xs md:text-sm lg:text-sm'>
                        Member of the Board
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] font-xs md:text-sm lg:text-sm'>
                        Senior Executive Officer  
                        </p>
                    </div>


                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg'>
                        Takeshi Saraoka
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] font-xs md:text-sm lg:text-sm'>
                        Member of the Board (Board of Auditors) 
                        </p>

                        
                    </div>


                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg'>
                        Shoichi Kanno
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] font-xs md:text-sm lg:text-sm'>
                        Member of the Board (Board of Auditors) 
                        </p>

                        
                    </div>


                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg'>
                        Kenichi Nagataki
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] font-xs md:text-sm lg:text-sm'>
                        Member of the Board (Board of Auditors) 
                        </p>

                        
                    </div>



                    </div>




                    </div>
                    </div>

                </div>



        </div>
    )
}