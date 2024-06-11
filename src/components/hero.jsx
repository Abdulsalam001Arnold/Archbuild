import { motion } from 'framer-motion'


export default function Hero(){
    return (
        <div className="w-full flex flex-col items-center mt-[2rem] md:mt-[4rem] lg:mt-[8rem] mb-[2rem] md:mb-[4rem] lg:mb-[8rem] justify-center">

        <div className='w-full flex flex-col lg:flex-row justify-center gap-4 mb-[1rem] md:mb-[10px] lg:mb-[2rem]'>
            <div className=''>
                <motion.img src="https://static2.gensler.com/uploads/image/88612/df24-designing-for-impact-1024x576_1698867226.jpg" alt="company" className="sm:w-full md:w-[23rem] lg:w-[27rem]" 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}/>
            </div>

            <div className="">
            <h3 className="poetsen-one-regular">TRENDS</h3>
            <h1 className="text-3xl font-extrabold title caveat-heading">The 8 Trends Shaping Design <br/> in 2024</h1>
            <p className="play-regular sm:text-xs md:text-sm lg:text-sm">Here are the most important signals and key <br/> opportunities we see in the building industry today. </p>
            </div>
        </div>


        <div className=' w-full flex flex-col md:flex-col lg:flex-row-reverse justify-center gap-4 mt-3'>
            <div className=''>
                <motion.img src="https://static1.gensler.com/uploads/image/90696/Fleet-Street-area-of-opportunity_1024_1710365311.jpg" alt="company" className="sm:w-full md:w-[23rem] lg:w-[27rem]"
                    initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
            </div>

            <div className="">
            <h3 className='poetsen-one-regular'>Blog</h3>
            <h1 className="text-3xl font-extrabold title caveat-heading"> Trends to Watch Reshaping the <br/> Future of Cities and Urban Living  </h1>
            <p className="play-regular text-xs md:text-sm lg:text-sm"><p className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</p>’s Cities &amp; Urban Design leaders discuss what’s <br/> next for the future of cities.     </p>
            </div>
        </div>
        </div>
    )
}