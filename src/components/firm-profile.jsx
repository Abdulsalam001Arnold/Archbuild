import { Link } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useMediaQuery } from 'react-responsive';
import Dialogue from "./dialogue";

import NumberCounter from "./count";

export default function Profile(){

  const [activeSection, setActiveSection] = useState('');
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
    };
    AOS.init({
        duration: 1000, // Animation duration
        once: false, // Whether animation should happen only once
      });

    const observer = new IntersectionObserver(callback, options);
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;
    const section4 = section4Ref.current;
    const section5 = section5Ref.current;


    if (section1) observer.observe(section1);
    if (section2) observer.observe(section2);
    if (section3) observer.observe(section3);
    if (section4) observer.observe(section4);
    if (section5) observer.observe(section5);
 

    // Combine both cleanup functions into one return statement
    return () => {
        if (section1) observer.unobserve(section1);
        if (section2) observer.unobserve(section2);
        if (section3) observer.unobserve(section3);
        if (section4) observer.unobserve(section4);
        if (section5) observer.unobserve(section5);
    };
  }, []);

  // Define media query hooks
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });


    return(
        <div className='w-full mt-[4.5rem] mb-[2rem]'>
              <div className='w-full relative h-screen md:h-[100vh]'
              data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
              data-aos-offset={isBigScreen ? '10' : '2'}>

              <img src='https://static1.gensler.com//uploads//image//88148//gensler-london-2000x1125_1696442386.jpg' alt='Interior stair at Gensler&#039;s London office.' className='w-full h-full object-cover'/>

    <div className='absolute vid-contain flex flex-col justify-center items-center'>

    <div className='w-full flex flex-col items-center md:items-center lg:items-start justify-center pl-0 md:pl-0 lg:pl-[5rem]'>
        <div className='px-3 content h-[16rem] flex flex-col items-center justify-center w-[20rem] py-3'>
            <h1 className='w-[80%] mb-[1rem] josefin-sans-p text-[2rem] leading-[3rem] md:leading-[3rem] lg:leading-[3rem]'> 
            We Are a Powerful Catalyst for Positive Change
            </h1>
        </div>
        </div>
    </div>
      </div>


      <div className='w-full mt-[5rem]'>
        <div className='flex flex-col md:flex-col lg:flex-row items-start justify-center gap-[1rem]'
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
            <div className='flex flex-col items-start sm:w-full md:w-full lg:w-[30rem]'>
                <h1 className='josefin-sans-p text-xl md:text-2xl lg:text-2xl'>
                We Use Design to Create a Better World
                </h1>

                <p className='text-xs md:text-sm lg:text-[14px] mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                At Archbuild, the value of our work stems from its positive impact on the human experience. We are a dynamic and collaborative design firm uniting creativity, research, and innovation to solve complex problems for our clients. Our work challenges conventional ideas about architecture and the built environment. We aren’t just designing buildings — we are reimagining cities and places that make a difference in people’s lives. Founded in 1965, Archbuild has built a team of 6,000 professionals who partner with clients in over 100 countries each year. Everything we do is guided by our mission: to create a better world through the power of design. We are capturing the firm’s ethos and unique culture in the 2023 One‑Firm Firm publication, our inaugural digital-first annual report.
                </p>
            </div>


            <ul className='flex flex-col justify-center items-start gap-6'>

            <a href='#section1' style={{cursor: activeSection === 'section1' ? 'pointer' : 'normal' }}>
                <motion.li className='poetsen-one-regular career-links' 
                whileHover={{scale: 1.1}} 
                transition={{ease: 'easeIn'}}>
                    Our People
                </motion.li>
                </a>
                

                <a href='#section2' style={{cursor: activeSection === 'section1' ? 'pointer' : 'normal' }}>
                <motion.li className='poetsen-one-regular career-links'
                whileHover={{scale: 1.1}} 
                transition={{ease: 'easeIn'}}>
                Archbuild Research
                </motion.li>
                </a>

                <a href='#section3' style={{cursor: activeSection === 'section1' ? 'pointer' : 'normal' }}>
                <motion.li className='poetsen-one-regular career-links'
                whileHover={{scale: 1.1}} 
                transition={{ease: 'easeIn'}}>
                Sustainability
                </motion.li>
                </a>


                <a href='#section4' style={{cursor: activeSection === 'section1' ? 'pointer' : 'normal' }}>
                <motion.li className='poetsen-one-regular career-links'
                whileHover={{scale: 1.1}} 
                transition={{ease: 'easeIn'}}>
                Diversity, Equity & Inclusion
                </motion.li>
                </a>


                <a href='#section4' style={{cursor: activeSection === 'section1' ? 'pointer' : 'normal' }}>
                <motion.li className='poetsen-one-regular career-links'
                whileHover={{scale: 1.1}} 
                transition={{ease: 'easeIn'}}>
                Community Impact
                </motion.li>
                </a>
            </ul>
        </div>
      </div>


      <div className='w-full relative mt-[3rem] h-screen md:h-[100vh]'
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '10' : '2'}>

              <img src='https://static2.gensler.com//uploads//image//88153//gensler-atlanta-2000x1125_1696447658.jpg' alt='Interior stair at Gensler&#039;s London office.' className='w-full h-full object-cover'/>

    <div className='absolute vid-contain flex flex-col justify-center items-center'>

    <div className='w-full flex flex-col items-center md:items-center lg:items-start justify-center pl-0 md:pl-0 lg:pl-[5rem]'>
        <div className='px-3 content h-[19rem] flex flex-col items-center justify-center w-[20rem] py-3'>
            <h1 className='w-[80%] mb-[1rem] dancing-script-head text-sm md:text-[12px] lg:text-lg'> 
            The Source of Our Strength Is Our People
            </h1>

            <p className='w-[80%] poetsen-one-regular text-xs md:text-sm lg:text-sm'>
            By leveraging our diversity of ideas, our research and innovation, our shared values, and our One-Firm Firm culture, we are moving forward together into a new era defined by design. By empowering our people and working seamlessly as an interconnected firm, we’re able to make the greatest impact for our communities as we continue to tackle the world’s challenges.
            </p>
        </div>
        </div>
    </div>
      </div>


      <div id='section1' className="w-full flex flex-col items-start md:items-start lg:items-center mt-[2rem] md:mt-[4rem] lg:mt-[7rem] px-4 md:px-4 lg:px-10 bg-[rgb(238,238,238)] py-[3rem]">
      <div className="flex flex-col"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
        <h1 className="font-semibold tracking-[1px] text-lg md:text-xl lg:text-2xl">
        ARCHBUILD VOICES
            </h1>

           


            <div className="w-full flex flex-col md:flex-col lg:flex-row justify-center items-center gap-5 overflow-hidden mt-[4rem]">
            <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[20rem]'
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                <motion.img src='https://static1.gensler.com/uploads/image/87303/GPFW_GVV_Blog_1024x576_BH_1692718331.png' alt='map' className='w-[20rem] h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold duration-75 dancing-script-big sub-title">Archbuild Voices: Brian Hunt on How Sports Have Influenced His Design Career</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Brian Hunt, a designer for Archbuild Chicago, shares what’s influenced his design career and advice for those beginning their career.
                 ​</p>

                
                </div>
                </div>

                <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[20rem]'
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
                <motion.img src='https://static1.gensler.com/uploads/image/87307/GPFW_GVV_Blog_1024x576_GA_1692718560.png' alt='map' className='w-[20rem] h-auto flex-shrink-0 img-hero'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}} />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold duration-75 dancing-script-big sub-title">Archbuild Voices: Argelia Archbuild Voices: Courtney Albracht on Shaping the Future </h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Courtney Albracht a designer for Archbuild Minneapolis, shares how design can impact communities and practitioners alike. 
                 ​</p>

                
                </div>
                </div>

                <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[20rem]'
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
                <motion.img src='https://static2.gensler.com/uploads/image/87378/GPFW_GVV_Blog_1024x576_CA_1692987300.png' alt='Jacob Simons wearing glasses.' className='w-[20rem] h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold duration-75 dancing-script-big sub-title">Archbuild Voices: Jacob Simons on the Power of Community </h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We sat down with Jacob Simons, Northwest Regional Strategy Practice Leader in our Archbuild Seattle office, to discuss the power in leaving a legacy of positivity. 
                 ​</p>

                
                </div>
                </div>


            </div>

            <div className="flex flex-col items-center justify-center mt-[4rem]"
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                <p className="sm:w-[80%] md:w-[80%] lg:w-[60%] josefin-sans-p text-lg md:text-xl lg:text-xl">
                We are a constellation of stars invigorated by our incredible diversity and global reach. Our team of 6,000+ talented design professionals, strategists, innovators, and leaders is driven by a shared purpose to improve how people experience the places we build.
                </p>

                <div className="flex flex-col md:flex-col lg:flex-row gap-4 justify-center items-start md:items-start lg:items-center mt-[3rem]">
                <Link to='/people'>
                <button className="button">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text uppercase text-black">hear more from our people</span>
                </span>
            </button>
            </Link>

            <Link to='/about/Board-members'>
            <button className="button">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text uppercase text-black">meet our leaders</span>
                </span>
            </button>
            </Link>
                </div>
            </div>
        </div>
      </div>


      <div id='section2' className='w-full relative mt-[3rem] h-screen md:h-[100vh]'
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '10' : '2'}>

              <motion.img src='https://static2.gensler.com//uploads//image//78190//nvidia-exterior-2000x_1665529753.jpg' alt='Interior stair at Gensler&#039;s London office.' className='w-full h-full object-cover'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
              />

    <div className='absolute vid-contain flex flex-col justify-center items-center'>

    <div className='w-full flex flex-col items-center md:items-center lg:items-start justify-center pl-0 md:pl-0 lg:pl-[5rem]'>
        <div className='px-3 content h-[19rem] flex flex-col items-center justify-center w-[20rem] py-3'>
            <h1 className='w-[80%] mb-[1rem] dancing-script-head text-sm md:text-[12px] lg:text-lg'> 
            Our Research and Thought Leadership Spur Innovation
            </h1>

            <p className='w-[80%] poetsen-one-regular text-xs md:text-sm lg:text-sm'>
            From exploring the future of the workplace to the evolution of cities, we’re investing in research and thought leadership to deliver data-driven insights and strategies to help our clients navigate a changing world.
            </p>
        </div>
        </div>
    </div>
      </div>

      <div className='w-full mt-[3rem] flex flex-col items-center justify-center'
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '10' : '2'}>
          <h1 className='pl-[1rem] josefin-sans-p'>
          LATEST PUBLICATIONS
          </h1>


          <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 sm:w-full md:w-[45rem] lg:w-[50rem]'>
          <motion.img src='https://static1.gensler.com/uploads/image/90154/GPFW_DFARCW-Web-Thumbnails-15_1707418099.jpg' alt='book' className='sm:w-full md:w-[25rem] lg:w-[35rem] h-auto flex-shrink-0'
            initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
          />
            <div className='flex flex-col'>
              <h1 className='text-lg font-bold dancing-script-big'>
              Design for a Radically Changing World
              </h1>

              <p className="text-sm josefin-sans-p">
              Archbuild’s Global Co-Chairs Andy Cohen and Diane Hoskins share their unique perspectives in a new book, “Design for a Radically Changing World.” The publication focuses on the impact of design on our everyday lives and offers innovative ways that design can help address pressing issues affecting our global cities and communities.
              </p>
            </div>
          </div>
      </div>

      <div className="w-full flex flex-col md:flex-col lg:flex-row justify-center items-center gap-5 overflow-hidden mt-[3rem] px-2">
            <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden sm:w-full md:w-[20rem] lg:w-[20rem]'
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                <motion.img src='https://static1.gensler.com/uploads/image/92279/240531_FutureOfGasStations_1024x576_1717516966.jpg' alt='map' className='sm:w-full md:w-[20rem] lg:w-[20rem] h-auto flex-shrink-0 img-hero'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}} />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold duration-75 dancing-script-big sub-title"> The Future of Gas Station Sites </h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We created an interactive tool to help architects and clients map underutilized gas station sites and aid decision-making to repurpose these stranded assets.
                 ​</p>

                
                </div>
                </div>

                <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden sm:w-full md:w-[20rem] lg:w-[20rem]'
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
                <motion.img src='https://static1.gensler.com/uploads/image/91022/1024x576_1712077777.jpg' alt='map' className='sm:w-full md:w-[20rem] lg:w-[20rem] h-auto flex-shrink-0 img-hero'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}} />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold duration-75 dancing-script-big sub-title">Global Workplace Survey 2024</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Archbuild’s workplace survey reveals what matters most to design high-performing workplaces and proposes a new precedent for measuring workplace performance.
                 ​</p>

                
                </div>
                </div>

                <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden sm:w-full md:w-[20rem] lg:w-[20rem]'
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
                <motion.img src='https://static1.gensler.com/uploads/image/91403/City Pulse 1024x576_1714158349.jpg' alt='Jacob Simons wearing glasses.' className='sm:w-full md:w-[20rem] lg:w-[20rem] h-auto flex-shrink-0 img-hero'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}} />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold duration-75 dancing-script-big sub-title">The Return of the City</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">We examined how global perceptions have shifted from 2021 to 2023 across 15 global cities to understand the obstacles and opportunities facing cities today.
                 ​</p>

                
                </div>
                </div>


            </div>

            <div className='w-full flex flex-col items-center justify-center mt-[1.5rem] px-2'
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                <div className='text-[rgb(22,124,187)] flex flex-col md:flex-col lg:flex-row justify-center items-start md:items-center lg:items-center'>
                    <h1 className='text-[80px] md:text-[100px] lg:text-[177px] poetsen-one-regular font-[400] leading-[141.6px]'>
                      700k
                    </h1>

                    <p className='play-regular text-[18px] md:text-[20.5px] lg:text-[27.5px] font-[400] leading-[33px]'>
                    More than 700,000 employees have informed millions of key data points captured by the Archbuild Research Institute.
                    </p>

                    
                </div>

                <p className='sm:w-full md:w-[80%] lg:w-[60%] mt-[1.3rem]'>
                    The Archbuild Research Institute is a network of researchers committed to developing a deeper understanding of the connection between design, business, and the human experience. Supported by a combination of research grants and external partnerships, we capture insights to identify how design can address issues of global wellness, climate change, and social equity as we build a more resilient future together.
                    </p>
            </div>
            

            <div id='section3' className='w-full bg-[rgb(238,238,238)] flex flex-col justify-center items-center py-8 px-2'>
  <div className='w-full max-w-4xl flex flex-col md:flex-col lg:flex-row items-center justify-center gap-5'
  data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
  data-aos-offset={isBigScreen ? '10' : '2'}>
    <motion.img src='https://www.gensler.com/uploads/image/90755/fastco-mic-interior-design-sustainability-award-logos-03_1710783834.png' alt='book'
      initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
    />

    <div className="mt-[0.5rem] text-center lg:text-left">
      <h3 className="text-lg font-bold duration-75 poetsen-one-regular sub-title">GLOBAL RECOGNITION</h3>
      
      <p className="mt-[0.65rem] text-sm josefin-sans-p sm:w-full md:w-[80%] lg:w-[70%]">In 2024, Archbuild was recognized as one of the World’s Most Innovative Companies by Fast Company, earning the #6 overall ranking and #1 in the Urban Development and Real Estate category. Interior Design magazine called the firm the #1 Architectural Firm in the world in 2024, and Architectural Record and Building Design+Construction acknowledged Archbuild as the #1 Architecture Firm in the U.S.</p>
    </div>
  </div>
</div>

<div className='w-full relative h-screen md:h-[100vh]'
data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
data-aos-offset={isBigScreen ? '10' : '2'}>

              <motion.img src='https://static2.gensler.com//uploads//image//88157//the-lighthouse-2000x1125_1696448777.jpg' alt='Interior stair at Gensler&#039;s London office.' className='w-full h-full object-cover'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
              />

    <div className='absolute vid-contain flex flex-col justify-center items-center'>

    <div className='w-full flex flex-col items-center md:items-center lg:items-start justify-center pl-0 md:pl-0 lg:pl-[5rem]'
    data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
    data-aos-offset={isBigScreen ? '10' : '2'}>
        <div className='px-3 content h-fit flex flex-col items-center justify-center w-[18rem] py-3'>
            <h1 className='w-[90%] mb-[1rem] josefin-sans-p text-[2rem] leading-[2rem] md:leading-[3rem] lg:leading-[3rem]'> 
            We Are Transforming the Built Environment for a Net Zero Future
            </h1>

            <p className='w-[70%] text-xs'>
            We continue to sharpen our climate action focus with fresh research, new design capabilities, and updated priorities to meet our goal of achieving a net zero carbon portfolio by 2030. Through our Green Materials Initiative, we are also working to reshape the entire building materials supply chain to significantly reduce construction-related carbon emissions.
            </p>
        </div>
        </div>
    </div>
      </div>


      <div className='w-full flex flex-col justify-center items-center gap-5 mt-[3rem] px-2'>
      <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-3 sm:w-full md:w-[30rem] lg:w-[50rem]'
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
          <img src='https://static2.gensler.com/uploads/image/78842/landing-1024x576_1668544056.jpg' alt='633 Folsom building solar shades close-up' className='sm:w-full md:w-[20rem] lg:w-[30rem] h-auto flex-shrink-0 img-hero' />

          <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold sub-title josefin-sans-p">Climate Action Through Design</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Our Climate Action Through Design Report presents solutions for transforming the built environment to achieve a net zero carbon impact across our portfolio and the broader design industry. 
                 ​</p>

            
                
                </div>
      </div>


      <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-3 text-[rgb(99,164,55)]'
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '10' : '2'}>
      <h1 className='text-[80px] md:text-[100px] lg:text-[177px] poetsen-one-regular font-[400] leading-[141.6px]'>
                      300m
                    </h1>

                    <p className='text-[29px] font-[400] leading-[34.8px] sm:w-full md:w-[50%] lg:w-[30%]'>
                    By 2030, Archbuild will have saved 300m metric tons of CO2.
                    </p>
      </div>
      </div>


      <div id='section4' className='w-full relative h-screen md:h-[100vh] mt-[3rem]'
data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
data-aos-offset={isBigScreen ? '10' : '2'}>

              <motion.img src='https://static1.gensler.com//uploads//image//40420//filename//project-pipeline-2000x1125_1631739247.jpg' alt='A group of people posing for a photo.' className='w-full h-full object-cover'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
              />

    <div className='absolute vid-contain flex flex-col justify-center items-center'>

    <div className='w-full flex flex-col items-center md:items-center lg:items-start justify-center pl-0 md:pl-0 lg:pl-[5rem]'
    data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
    data-aos-offset={isBigScreen ? '10' : '2'}>
        <div className='px-3 content h-fit flex flex-col items-center justify-center w-[18rem] py-3'>
            <h1 className='w-[90%] mb-[1rem] josefin-sans-p text-[2rem] leading-[2rem] md:leading-[3rem] lg:leading-[3rem]'> 
            We Want to Be the Example for a More Diverse and Inclusive World
            </h1>

            <p className='w-[60%] text-xs'>
            Archbuild is committed to driving change across the design industry, our client relationships, and the cities where we live, work, and play. We are dedicated to leading this change by starting from within.
            </p>
        </div>
        </div>
    </div>
      </div>

      <div className='w-full flex flex-col items-center justify-start bg-[rgb(64,64,64)] text-white'>
      <h1 className=''>
      NOMA Project Pipeline, Chicago
      </h1>
          <p className='sm:w-full md:w-[60%] lg:w-[40%] text-sm'>
          Archbuild Chicago volunteer mentors participated in Project Pipeline’s summer camp — presenting architecture and design career opportunities to students in underserved communities.
          </p>

          <p className='text-sm'>
          Photography: Kai Brown
          </p>
      </div>

      <div className="w-full mt-[2rem] md:mt-[4rem] lg:mt-[7rem] px-4 md:px-4 lg:px-10 py-[3rem] flex flex-col items-center justify-center">

        <h3 className="josefin-sans-p text-xl mt-[4rem]"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
        ARCHBUILD’S GLOBAL WORKFORCE
        </h3>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-8 mt-[3rem]"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
            <div className="flex flex-col items-center justify-center">
            <NumberCounter targetNumber={87} duration={2000} />
            <p className='text-xs uppercase'>
            COUNTRIES OF ORIGIN
            </p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <NumberCounter targetNumber={101} duration={2000} />
            <p className='text-xs uppercase'>
            LANGUAGES SPOKEN
            </p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <NumberCounter targetNumber={1000} duration={8000} />
            <p className='text-xs uppercase'>
            UNIVERSITIES ATTENDED
            </p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <NumberCounter targetNumber={55} duration={1000} />
            <p className='text-xs uppercase'>
            offices
            </p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <NumberCounter targetNumber={10} duration={500} />
            <p className='text-xs uppercase'>
            regions
            </p>
            </div>
        </div>


        <div className="grid grid-cols-3 items-center justify-center gap-[1rem] md:gap-[3rem] lg:gap-[5rem] mt-[3rem]"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
            <div className="flex flex-col items-center justify-center">
                <h1 className='font-semibold text-2xl md:text-4xl lg:text-6xl'>
                54.9%
                </h1>

                <p className='text-xs uppercase'>
            female
            </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className='font-semibold text-2xl md:text-4xl lg:text-6xl'>
                .2%
                </h1>

                <p className='text-xs uppercase'>
            non-binary
            </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className='font-semibold text-2xl md:text-4xl lg:text-6xl'>
                44.9%
                </h1>

                <p className='text-xs uppercase'>
            male
            </p>
            </div>
        </div>

        <div className="flex w-[23rem] md:w-[30rem] lg:w-[43rem]"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
            <div className="w-[70%] bg-black h-[1rem]"></div>

            <div className="w-[30%] bg-[rgb(232,32,17)] h-[1rem]"></div>
        </div>


        <div className='flex flex-col justify-center items-start md:items-center lg:items-center [mt-3rem] md:mt-[4rem] lg:mt-[4rem] gap-5'
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
        <p className='sm:w-full md:w-[80%] lg:w-[60%] poetsen-one-regular'>
        Two years since we launched our Strategies to Fight Racism, we continue to evolve our diversity, equity, and inclusion efforts, taking on an ever more localized approach in each of our communities. From partnering with our clients in designing equitable spaces, to creating opportunities in our industry for diverse talent, we have made measurable progress on all fronts and continue to take action to create purposeful, inclusive, and resilient spaces for everyone.
        </p>

        <Link to='/aboutpage'>
        <button className="button mt-[1rem]">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text text-black">learn about our diversity initiatives</span>
                </span>
            </button>
            </Link>

        </div>
    </div>

    <div className='w-full mt-[3rem]'
data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
data-aos-offset={isBigScreen ? '10' : '2'}>


          <div className='w-full flex flex-col md:flex-col lg:flex-row items-center justify-center'>

          <div id='section5' className='flex flex-col items-center justify-center'
          data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '11' : '2'}>
          <motion.img src='https://static1.gensler.com/uploads/image/78186/about-community-community-of-hope-03-854x779_1665524106.jpg' alt='A group of people posing for a photo.' className='w-full h-full object-cover'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
              />

              <div className='bg-[rgb(64,64,64)] w-full text-white'>
                  <h1 className='text-[16px] font-[700] leading-[21.3344px]'>
                  Community of Hope Family Health and Birth Center
                  </h1>

                  <p>
                  Washington, D.C.
                  </p>
              </div>
              </div>

              <div className='flex flex-col items-center justify-center'
              data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
data-aos-offset={isBigScreen ? '11' : '2'}>

<motion.img src='https://static1.gensler.com/uploads/image/78187/about-community-big-brothers-big-sisters-headquarters-02-854x779_1665524236.jpg' alt='A group of people posing for a photo.' className='w-full h-full object-cover'
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{ ease: 'easeOut', duration: 2}}
              />

<div className='bg-[rgb(64,64,64)] w-full text-white'>
                  <h1 className='text-[16px] font-[700] leading-[21.3344px]'>
                  Big Brothers Big Sisters Headquarters
                  </h1>

                  <p>
                  Minneapolis
                  </p>
              </div>

</div>
          </div>
      </div>


      <div className='w-full bg-[rgb(230,230,230)] flex flex-col items-center justify-center mt-[2rem] px-2'>
      <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full'
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
          data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static1.gensler.com/uploads/image/78182/about-careers-gensler-chicago-854x600_1665521272.jpg' alt='return of the city' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">

                  <h3 className="text-lg font-bold dancing-script-big"> We Grow Our Firm by Growing Our People</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p"> Archbuild’s entrepreneurial culture empowers people to pursue their passions, learn new skills, take on greater responsibility, and do the best work of their careers.
                 ​</p>
                 <Link to='/careers'>
                 <button className="button">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text uppercase text-black">design your career with us</span>
                </span>
            </button>
            </Link>

                </div>
                </div>

                <div className='flex flex-col md:flex-col lg:flex-row-reverse items-center justify-center gap-4 md:gap-5 lg:gap-10 mb-[1.56rem] overflow-hidden sm:w-[25rem] md:w-[25rem] lg:w-full'
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
        <div>
                <motion.img src='https://static2.gensler.com/uploads/image/78217/gensler-sf-854x600_1665685692.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-full h-auto flex-shrink-0 img-hero' 
                  initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
                />
                </div>
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold dancing-script-big">We Support the Education of Emerging Design Talent</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Over the past year alone, our scholarship programs have awarded nearly $200,000 through the Brinkmann Scholarship, the Rising Black Designers Scholarship, and the Diversity in Design Bursary program.
                 ​</p>

                <Link to='/careers'>
                 <button className="button">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text uppercase text-black">learn more</span>
                </span>
            </button>
            </Link>
                 
                </div>
                </div>
      </div>

      <Dialogue/>

        </div>
    )
}