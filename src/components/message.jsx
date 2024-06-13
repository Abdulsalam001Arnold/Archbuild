import React from "react"
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";


export default function Message() {
    return(
        <div className="w-full mt-[7rem] mb-[4rem]">
            <div className="w-full items-start pl-[1.45rem] md:pl-[2.2rem] lg:pl-[3rem] py-[1rem] bg-[rgb(238,238,238)] md:bg-transparent lg:bg-transparent">
            <Link to='/aboutpage'>
            <span className="w-full flex items-center text-[rgb(136,136,136)]">
            <h1 className="uppercase text-sm md:text-lg lg:text-xl josefin-sans-p">
                About
            </h1>

            <MdChevronRight className="text-sm md:text-lg lg:text-xl"/>
            </span>
            </Link>

            <h1 className="uppercase mt-[1rem] font-[12px] md:font-[12px] lg:font-[12px] text-xl md:text-3xl lg:text-[3rem]">
                ceo message
            </h1>

            </div>

            <div className='w-full mt-[1rem] md:mt-[1.45rem] lg:mt-[2rem] px-2'>
                <div className='w-full flex flex-col md:flex-col lg:flex-row items-start justify-center mb-[1rem] md:mb-[1.45rem] lg:mb-[2rem] gap-4'>
                    <motion.img src='https://www.nikken.co.jp/en/about/p4iusj0000000yx0-img/ceo_profile.jpg' alt='ceo' className='sm:w-full md:w-full lg:w-[30rem]'
                        initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
                    />
                <div className='w-fit md:w-fit lg:w-[40rem]'>
                <p className='mb-[1rem] md:mb-[1.45rem] lg:mb-[2rem] text-xs md:text-sm lg:text-lg'>
                At  <h1 className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</h1>, we take an integrated approach to our projects as a professional service firm. Our teams across all in-house disciplines of architectural design: urban design, research, planning and consulting, work collaboratively to deliver better solutions for clients.
                </p>

                <p className='mb-[1rem] md:mb-[1.45rem] lg:mb-[2rem] text-xs md:text-sm lg:text-lg'>
                With our brand tagline, “EXPERIENCE, INTEGRATED” that expresses <h1 className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</h1>’s ethos, we are determined to set trends in social and environmental design in response to changing needs and aspirations.
                </p>

                <p className='mb-[1rem] md:mb-[1.45rem] lg:mb-[2rem] text-xs md:text-sm lg:text-lg'>
                We combine the desires and experiences of our clients with our diverse mix of specialized expertise and extensive track record to bring rewarding experiences to people worldwide.
                </p>

                <p className='mb-[1rem] md:mb-[1.45rem] lg:mb-[2rem] text-xs md:text-sm lg:text-lg'>
                Today the struggle to contain the COVID-19 pandemic is driving demand for new modes of living. As the issues surrounding architecture, urban planning and social environments grow increasingly complex, we at <h1 className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</h1> recognize that the roles and responsibilities we are expected to fulfill are becoming more momentous than ever.
                </p>

                <p className='text-xs md:text-sm lg:text-lg'>
                At <h1 className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</h1>, we are redoubling our efforts to earn society’s trust by meeting and exceeding the expectations of clients and communities. We look forward to your continued support and encouragement in this endeavor.
                </p>

                <div className='items-start text-start mt-[1rem] md:mt-[1.76rem] lg:mt-[2rem]'>
                    <h1 className='text-sm md:text-lg font-bold lg:text-xl'>
                    Atsushi Omatsu
                    </h1>

                    <h3 className='text-[rgb(136,136,136)] text-[10px] md:text-[12px] lg:text-xs'>
                    President and CEO
                    </h3>

                    <h1 className='caveat-logo text-[rgb(136,136,136)] text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</h1>
                </div>

                </div>
                
                </div>

            </div>
        </div>
    )
};
