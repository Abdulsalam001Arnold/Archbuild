import Load from '../components/load';
import React, { useState, useEffect } from 'react';
import Slide from "../components/carousel";
import Hero from "../components/hero";
import Carousel from "../components/mini-slide";
import About from '../components/info'
import Display from "../components/vid-display";
import Card from "../components/card";
import Dialogue from "../components/dialogue";
import Join from "../components/join";
import Report from "../components/download-report";
import Footer from "../components/footer";
import GetSlide from '../components/get-slide';
import { motion } from 'framer-motion';


const pageVariants = {
  hidden: { opacity: 0 },
  visible:{
    opacity:1,
    transition:{
      delay: 1.5,
      duration: 1.5,
      ease: 'easeOut',
      type: 'string', 
      stiffness: 500, 
      when: 'beforeChildren'
    }
  }

};

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return <Load />;
    }


   

    return(
        <motion.div className='w-full relative'
        variants={pageVariants} 
        initial='hidden '
        animate='visible'>
            <Slide/>
            <Hero/>
            <Carousel/>
            <GetSlide/>
            <About/>
            <Display/>
            <Card/>
            <Dialogue/>
            <Join/>
            <Report/>
            <Footer/>

        </motion.div>
    )
}