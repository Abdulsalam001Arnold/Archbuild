import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import {motion} from 'framer-motion'

export default function SlideGrid() {
    const [itemList, setItemList] =  useState([]);
    const [loading, setLoading] = useState(true);
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  
    useEffect(() => { // Set loading state to true before fetching data
        const fetchData = async () => {
            const url = 'https://archbuild-api.vercel.app/api/itemList';

            try {
                setLoading(true); // Set loading state to true before fetching data
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Fetched data:', data);

                if (Array.isArray(data.data)) {
                    setItemList(data.data);
                } else {
                    console.error('Fetched data is not an array:', data.data);
                    // Handle the case where data is not an array, e.g., by setting an empty array
                    setItemList([]);
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
    }, [])
    
    return (
        <div className='w-[100%] justify-center'>
            <h1 className="text-6xl text-gray-500 mt-[6rem] text-center lg:text-start">
                Blogs
            </h1>
            <div className='px-2 md:px-6 lg:px-[1rem] w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[10rem] items-center justify-center'
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                {itemList.length > 0 ? 
                (itemList.map((item, index) => (
                    <Link key={index} to={`/blog/${item.id}`} className='hover:no-underline'>
                        <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]'>
                            <motion.img src={item.imgUrl} alt='grass' className='w-[27rem] h-auto flex-shrink-0 img-hero' 
                                initial={{opacity: 0}}   
                         animate={{opacity: 1}}
                         transition={{duration: 2, ease: 'easeOut', stiffness: 300}}
                            />
                            <div className="mt-[0.5rem]">
                                <h3 className="text-lg font-bold title dancing-script-head">{item.title}</h3>
                                <h1 className='text-lg mt-[3px] text-gray-300 hover:text-black'>{item.info}</h1>
                                <p className="mt-[0.65rem] text-sm josefin-sans-p">{item.text}</p>
                            </div>
                        </div>
                    </Link>
                ))): (
                    !loading && <div>No data available</div>
                )
                
                }
            </div>
        </div>
    );
}
