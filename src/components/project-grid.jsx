import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import { http } from '../components/axios';
import Loading from './loading';
import { motion } from "framer-motion";
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import 'aos/dist/aos.css';

export default function Grid() {
  const [projectList, setProjectList] = useState(null);
  const [loading, setLoading] = useState(true);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(() => { 
    // Set loading state to true before fetching data
    http.get('/projectList') // Assuming '/projectList' is the correct endpoint
      .then(res => {
        setProjectList(res.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of error
      });

      AOS.init({
        duration: 1000, // Animation duration
        once: false, // Whether animation should happen only once
      });
  }, []);

  return (
    <div className='w-[100%] justify-center'>
      <h1 className="text-6xl text-gray-500 mt-[6rem] text-center lg:text-start caveat-heading">
        Projects
      </h1>
      <div className='px-[1rem] w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[10rem] items-center justify-center'>
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden sm:w-full md:w-[25rem] lg:w-[25rem]'>
              <Loading />
            </div>
          ))
        ) : (
          projectList && projectList.map((project, index) => (
            <Link key={index} to={`/projects/${project.id}`} className='hover:no-underline'>
              <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden sm:w-full md:w-[25rem] lg:w-[25rem]'
              data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
              data-aos-offset={isBigScreen ? '10' : '2'}>
                <motion.img src={project.img} alt={project.heading} className='sm:w-full md:w-[25rem] lg:w-[25rem] h-auto flex-shrink-0 img-hero'
                initial={{opacity: 0}}   
                animate={{opacity: 1}}
                transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
                          />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold title dancing-script-big">{project.heading}</h3>
                  <h1 className='text-lg mt-[3px] text-gray-300 hover:text-black play-regular'>{project.location}</h1>
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">{project.paragraph}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
