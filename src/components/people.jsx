import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import { MdChevronRight, MdOutlineDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import 'aos/dist/aos.css'; // Import AOS styles

export default function People() {
    const [peopleList, setPeopleList] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true);
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://archbuild-api.vercel.app/api/peopleList';

            try {
                setLoading(true); // Set loading state to true before fetching data
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Fetched data:', data);

                if (Array.isArray(data.data)) {
                    setPeopleList(data.data);
                } else {
                    console.error('Fetched data is not an array:', data.data);
                    // Handle the case where data is not an array, e.g., by setting an empty array
                    setPeopleList([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Set loading state to false after fetching data
            }
        };

        fetchData();

        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should happen only once
        });
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className="w-full mt-[5rem] justify-center px-2 md:px-[1rem] lg:px-[2rem]">
            <motion.div
                className="w-full items-start pl-[1.45rem] md:pl-[2.2rem] lg:pl-[3rem] mb-[1rem] md:mb-[1.45rem] lg:mb-[1rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, ease: 'easeOut', duration: 1.5 }}
            >
                <Link to='/aboutpage'>
                    <span className="w-full flex items-center text-[rgb(136,136,136)]">
                        <h1 className="uppercase text-sm md:text-lg lg:text-xl caveat-heading">
                            About
                        </h1>
                        <MdChevronRight className="text-sm md:text-lg lg:text-xl" />
                    </span>
                </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center w-full pl-0 md:pl-[2rem] lg:pl-[3rem] gap-4 px-2">
                {peopleList.length > 0 ? (
                    peopleList.map((people, index) => (
                        <Link key={index} to={`/people/${people.id}`}className='hover:no-underline'>
                            <div className="w-full lg:w-[20rem] mb-[2rem]"
                                data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                                data-aos-offset={isBigScreen ? '10' : '2'}>
                                <div className="mb-[8px] md:mb-[9px] lg:mb-[1rem]">
                                    <motion.img src={people.image} alt={people.name} className="img-hero sm:w-full md:w-[20rem] lg:w-[30rem]"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 2, ease: 'easeOut', stiffness: 300 }}
                                    />
                                </div>

                                <div className="flex flex-col items-start">
                                    <h1 className="font-bold text-sm md:text-lg lg:text-lg title poetsen-one-regular">
                                        {people.name}
                                    </h1>

                                    <h5 className='dancing-script-big'>
                                        {people.position}
                                    </h5>

                                    <div className="w-fit flex items-center gap-1 mb-[6px] md:mb-[10px] lg:mb-[1rem]">
                                        <p className='josefin-sans-p'>
                                            Email <MdOutlineDoubleArrow className='text-xs text-customBlue inline' />
                                        </p>
                                        <div className="line"></div>

                                        <p className='josefin-sans-p'>
                                            LinkedIn <MdOutlineDoubleArrow className='text-xs text-customBlue inline' />
                                        </p>
                                    </div>

                                    <p className='play-regular'>
                                        {people.text}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    !loading && <div>No data available</div>
                )}
            </div>
        </div>
    );
}
