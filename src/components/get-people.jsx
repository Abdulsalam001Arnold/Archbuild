import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TiSocialLinkedin } from "react-icons/ti";
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function PeopleDetail() {
    const { peopleId } = useParams(); // Get the project ID from the URL
    const [people, setPeople] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    useEffect(() => {
        if (peopleId) {
            fetch(`https://archbuild-api.vercel.app/api/peopleList/${peopleId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    setPeople(data.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                });
        }

        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should happen only once
          });
    }, [peopleId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    
    return(
        <div className="w-full mt-[5rem] mb-[2rem] md:mb-[2.3rem] lg:mb-[3rem]">
            {people ? (
                <div className="flex flex-col items-center"
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                    data-aos-offset={isBigScreen ? '10' : '2'}>
                <div className="flex-none lg:flex lg:justify-center mb-[9px] lg:mb-[1rem]">
                    
                        <motion.img src={people.image} alt={people.name} className="sm:w-full md:w-[23rem] lg:w-[30rem]"
                         initial={{opacity: 0}}   
                         animate={{opacity: 1}}
                         transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
                        />
                    </div>
                <div className="w-full px-0 lg:w-[40rem] flex flex-col md:flex-col lg:flex-row md:items-center lg:items-start gap-5 items-start"
                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                data-aos-offset={isBigScreen ? '10' : '2'}>
                    <div className="w-full items-start">
                    <h1 className="inline text-lg font-[12px] md:text-xl lg:text-2xl mb-[9px] lg:mb-[1rem] poetsen-one-regular">
                        {people.name}
                    </h1>
                    <h5 className="inline mb-[9px] lg:mb-[1rem] dancing-script-head">
                        {people.degree}
                    </h5>


                    <h3 className="mb-[1rem] caveat-heading">
                        {people.position}
                    </h3>


                    <motion.p className="text-xs w-fit lg:w-[80%] md:text-sm lg:text-[17px] josefin-sans-p"
                    initial={{opacity: 0}}   
                    animate={{opacity: 1}}
                    transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
                    >
                        {people.paragraph}
                    </motion.p>
                    </div>

                    <div className="mt-[1.5rem] md:mt-0 lg:mt-0 items-start mr-0 md:mr-0 lg:mr-[5rem]">
                        <h1 className="font-bold text-sm md:text-lg lg:text-lg">
                            CONNECT
                        </h1>

                        <ul>
                        <li className='mt-[1.5rem] mb-[1.7rem]'>
                        <span className="listing">
                            <TiSocialLinkedin className="inline" /> </span> 
                            {people.linkedin}
                            </li>

                            <li className='mb-[1.7rem]'>
                            <span className="listing">
                            <IoIosMail className="inline" /> </span> {people.email}
                            </li>

                            <li className='mb-[1.7rem]'>
                            <span className="listing">
                            <FaPhoneVolume className="inline" /> </span> {people.phone}
                            </li>
                        </ul>
                    </div>
                    </div>


                    
                </div>
            ): (
                <p>Loading...</p>
            )
                   
                
            }
        </div>
    )

}