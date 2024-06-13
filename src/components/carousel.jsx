import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y  } from "swiper/modules";
import { Link } from 'react-router-dom';



  const Slide = () => {

    
  
      return (
        <div className='mt-[5rem] md:mt-[4rem] lg:mt-[1rem]'>
    

        <Swiper 
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation={true}
      pagination={true}
      slides-per-view={1}
       spaceBetween={0} className='mb-7 w-full'>


        <SwiperSlide className='relative'>
      <video loop={true} autoPlay={true} height='100%' width='100%'>
        <source src='https://data.openasset.com/3f741c2e/05e51d96c94bf73cf1ff6be5d8c89454/F_240514_N4_mp4/F_240514_N4_videolarge.mp4' type='video/mp4'></source>
    </video>

    <div className='absolute small-container image-container'>
        <h1 className='text-white text-xl md:text-3xl lg:text-4xl font-[700] relative top-0 md:top-[10rem] lg:top-[10rem] left-0 md:left-[7rem] lg:left-[7rem] mb-0 md:mb-[2rem] lg:mb-[2rem] mt-0 md:mt-[3rem] lg:mt-[3rem] dancing-script-big title'>Archbuild's Global Workplace Survey 2024</h1>
        <p className='text-white block mt-0 md:mt-4 lg:mt-4 text-lg left-0 md:left-[7rem] lg:left-[7rem] relative top-0 md:top-[10rem] lg:top-[10rem] sm:w-full md:w-[30%] lg:w-[30%] poetsen-one-regular'>Our Survey Data Reveals the Top Factors Driving a High-Performance Workplace</p>

        <Link to='/research-insights'>
        <button className="button top-0 md:top-[10rem] lg:top-[10rem] left-0 md:left-[7rem] lg:left-[7rem] hidden md:block lg:block">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text josefin-sans-p">Explore</span>
    </span>
 </button>
 </Link>
    </div>
      </SwiperSlide>



        <SwiperSlide className='relative'>
      <video loop={true} autoPlay={true} height='100%' width='100%'>
        <source src='https://data.openasset.com/3f741c2e/340a26e1bee8eba813d50bf90a18b2e3/F_240425_N3_mp4/F_240425_N3_videomedium.mp4' type='video/mp4'></source>
    </video>

    <div className='small-container image-container absolute'>
        <h1 className='text-white text-xl md:text-3xl lg:text-4xl font-[700] relative top-0 md:top-[10rem] lg:top-[10rem] left-0 md:left-[7rem] lg:left-[7rem] mb-0 md:mb-[2rem] lg:mb-[2rem] mt-0 md:mt-[3rem] lg:mt-[3rem] dancing-script-big title'>The Return of the City</h1>
        <p className='text-white block mt-0 md:mt-4 lg:mt-4 text-lg left-0 md:left-[7rem] lg:left-[7rem] relative top-0 md:top-[10rem] lg:top-[10rem] sm:w-full md:w-[30%] lg:w-[30%] poetsen-one-regular'>Our Survey Reveals How Perceptions Have Shifted From 2021 to 2023 across 15 Global Cities.</p>

        <Link to='/research-insights'>
        <button className="button top-[10rem] left-[7rem] hidden md:block lg:block">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text josefin-sans-p">Explore</span>
    </span>
</button>
</Link>
    </div>
      </SwiperSlide>




      <SwiperSlide className='relative'>
      <video loop={true} autoPlay={true} poster='//static2.gensler.com/uploads/image/79259/project-633-folsom-06-2000x1125_1670617919.jpg' height='100%' width='100%'>
        <source src='https://data.openasset.com/3f741c2e/9e1b7619e101c3e9901b2eb91d1cb247/F_221107_N7.mp4' type='video/mp4'></source>
    </video>

    <div className='small-container image-container absolute'>
        <h1 className='text-white text-xl md:text-3xl lg:text-4xl font-[700] relative top-0 md:top-[10rem] lg:top-[10rem] left-0 md:left-[7rem] lg:left-[7rem] mb-0 md:mb-[2rem] lg:mb-[2rem] mt-0 md:mt-[3rem] lg:mt-[3rem] dancing-script-big title'>Our Low-Carbon Transformation of a <br/> Generational Asset</h1>
        <p className='text-white block mt-0 md:mt-4 lg:mt-4 text-lg left-0 md:left-[7rem] lg:left-[7rem] relative top-0 md:top-[10rem] lg:top-[10rem] sm:w-full md:w-[30%] lg:w-[30%] poetsen-one-regular'>Sustainable Design and Reuse Strategies Reanimated 633 Folsom <br/> While Saving 3 Million Kgs of CO<sub>2</sub></p>

        <Link to='/projects'>
        <button className="button top-[10rem] left-[7rem] hidden md:block lg:block">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text josefin-sans-p">Learn More</span>
    </span>
</button>
</Link>
    </div>
      </SwiperSlide>

      <SwiperSlide className='relative'>
        <img src='https://static1.gensler.com/uploads/hero_element/23252/thumb_desktop/thumbs/moody-center-04-2000x1125_1705097240_1600x900.jpg' alt='crowd'/>

        <div className='small-container image-container absolute'>
        <h1 className='text-white text-xl md:text-3xl lg:text-4xl font-[700] relative top-0 md:top-[10rem] lg:top-[10rem] left-0 md:left-[7rem] lg:left-[7rem] mb-0 md:mb-[2rem] lg:mb-[2rem] mt-0 md:mt-[3rem] lg:mt-[3rem] dancing-script-big title'>The Trends Shaping the <br/> Future of Entertainment</h1>
        <p className='text-white block mt-0 md:mt-4 lg:mt-4 text-lg left-0 md:left-[7rem] lg:left-[7rem] relative top-0 md:top-[10rem] lg:top-[10rem] sm:w-full md:w-[30%] lg:w-[30%] poetsen-one-regular'>From Immersive Experiences to Entertainment Districts, Here's What's <br/> Impacting Entertainment in the Built Environment</p>
    </div>
      </SwiperSlide>


      <SwiperSlide className='relative'>
      <video loop={true} autoPlay={true} height='100%' width='100%'>
        <source src='https://data.openasset.com/3f741c2e/25ab48d26fb17e65683232003c087b4f/F_231205_N9_mp4/F_231205_N9_videolarge.mp4' type='video/mp4'></source>
    </video>

    <div className='small-container image-container absolute'>
        <h1 className='text-white text-xl md:text-3xl lg:text-4xl font-[700] relative top-0 md:top-[10rem] lg:top-[10rem] left-0 md:left-[7rem] lg:left-[7rem] mb-0 md:mb-[2rem] lg:mb-[2rem] mt-0 md:mt-[3rem] lg:mt-[3rem] dancing-script-big title'>Design Forecast 2024: <br/>
Ideas Redefining Cities</h1>
        <p className='text-white block mt-0 md:mt-4 lg:mt-4 text-lg left-0 md:left-[7rem] lg:left-[7rem] relative top-0 md:top-[10rem] lg:top-[10rem] sm:w-full md:w-[30%] lg:w-[30%] poetsen-one-regular'>Explore the Design Trends and Strategies Transforming Tough <br/> Challenges Into Lasting, Positive Change</p>
       
    </div>
      </SwiperSlide>
      

      <SwiperSlide className='relative'>
        <img src='https://static1.gensler.com/uploads/hero_element/23574/thumb_desktop/thumbs/home-hero-20240318-14-1600x900_1710814269_1600x900.jpg' alt='congress'/>

        <div className='small-container image-container absolute'>
        <div className='text-white text-xl md:text-3xl lg:text-4xl font-[700] relative top-0 md:top-[10rem] lg:top-[10rem] left-0 md:left-[7rem] lg:left-[7rem] mb-0 md:mb-[2rem] lg:mb-[2rem] mt-0 md:mt-[3rem] lg:mt-[3rem] dancing-script-big title'><p className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</p> Named One of Fast Company’s <br/> Top 10 Most Innovative For 2024</div>
        <p className='text-white block mt-0 md:mt-4 lg:mt-4 text-lg left-0 md:left-[7rem] lg:left-[7rem] relative top-0 md:top-[10rem] lg:top-[10rem] sm:w-full md:w-[30%] lg:w-[30%] poetsen-one-regular'>Transformationhe Firm Earned the #6 Overall Ranking and #1 in the <br/> Urban Development and Real Estate Category</p>
        
    </div>
      </SwiperSlide>


      <SwiperSlide className='relative'>
      <video loop={true} autoPlay={true} height='100%' width='100%'>
        <source src='https://data.openasset.com/3f741c2e/1a70c898c400fcc6e0d91761c82ee3bd/F_230801_mp4/F_230801_videomedium.mp4' type='video/mp4'></source>
    </video>

    <div className='small-container image-container absolute'>
        <h1 className='text-white text-xl md:text-3xl lg:text-4xl font-[700] relative top-0 md:top-[10rem] lg:top-[10rem] left-0 md:left-[7rem] lg:left-[7rem] mb-0 md:mb-[2rem] lg:mb-[2rem] mt-0 md:mt-[3rem] lg:mt-[3rem] dancing-script-big title'>Design Forecast 2024: <br/>
Ideas Redefining Cities</h1>
        <p className='text-white block mt-0 md:mt-4 lg:mt-4 text-lg left-0 md:left-[7rem] lg:left-[7rem] relative top-0 md:top-[10rem] lg:top-[10rem] sm:w-full md:w-[30%] lg:w-[30%] poetsen-one-regular'>Explore the Design Trends and Strategies Transforming Tough <br/> Challenges Into Lasting, Positive Change</p>

        
    </div>
      </SwiperSlide>

    </Swiper>
    </div>
      )
  };
  export default Slide;