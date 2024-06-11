import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useMediaQuery } from 'react-responsive';



export default function Display() {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false,
        });
      }, []);
    
      // Define media query hooks
      const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  
    
    return (
        <div className="relative h-screen md:h-[100vh]">
            <video loop={true} autoPlay={true} className="w-full h-full object-cover">
        <source src='https://data.openasset.com/3f741c2e/1a70c898c400fcc6e0d91761c82ee3bd/F_230801_mp4/F_230801_videomedium.mp4' type='video/mp4'></source>
    </video>
    <div className='absolute content-display flex flex-col px-11 pt-[1.75rem] lg:pt-[6rem]'>
        <h3 className='text-black font-bold text-xl mb-[1.56rem] lg:mb-[2.78rem] dancing-script-head'>SPOTLIGHT</h3>
        <div>
            <h1 className='text-black font-[2rem] text-5xl leading-[3rem] lg:leading-[4rem] dancing-script-big'>
            New Experiences Shaping <br/> Multiuse Districts
            </h1>
            <p className="text-black text-lg josefin-sans-p">
            As entertainment districts gain in popularity, today’s most vibrant cities are <br/> doubling down on experience-driven mixed-use neighborhoods.
            </p>

            <ul className="mt-[2rem] flex flex-col lg:flex-row">
                <li className="bordered-text mb-6 lg:mr-[6rem] lg:w-[16%] font-bold hover:cursor-pointer hover:underline josefin-sans-p"
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '5' : '0.12'}
                >
                    Design is an Experience Multiplier
                </li>

                <li className="bordered-text mb-6 lg:mr-[6rem] font-bold hover:cursor-pointer hover:underline josefin-sans-p"
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '6' : '0.32'}
                >
                Why Quality of Place Matters
                </li>

                <li className="bordered-text mb-6 lg:mr-[6rem] font-bold hover:cursor-pointer hover:underline josefin-sans-p"
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '7' : '0.65'}>
                The Future of Sports Venues
                </li>

                <li className="bordered-text mb-6 lg:mr-[6rem] lg:w-[16%] font-bold hover:cursor-pointer hover:underline josefin-sans-p" data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '8' : '1'}
                >
                Entertainment in the Built&nbsp;Environment
                </li>
            </ul>
        </div>
    </div>
        </div>
    )
}