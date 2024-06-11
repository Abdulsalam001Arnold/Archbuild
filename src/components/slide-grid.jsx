import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
import { http } from "../components/axios";

export default function SlideGrid() {
    const [itemList, setItemList] = useState(null);
  
    useEffect(() => { // Set loading state to true before fetching data
        http.get('/itemList') // Assuming '/projectList' is the correct endpoint
            .then(res => {
                setItemList(res.data);
            });
    }, []);

    return (
        <div className='w-[100%] justify-center'>
            <h1 className="text-6xl text-gray-500 mt-[6rem] text-center lg:text-start">
                Blogs
            </h1>
            <div className='px-[1rem] w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[10rem] items-center justify-center'>
                {itemList && itemList.map((item, index) => (
                    <Link key={index} to={`/blog/${item.id}`} className='hover:no-underline'>
                        <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]'>
                            <img src={item.imgUrl} alt='grass' className='w-[27rem] h-auto flex-shrink-0 img-hero' />
                            <div className="mt-[0.5rem]">
                                <h3 className="text-lg font-bold title dancing-script-head">{item.title}</h3>
                                <h1 className='text-lg mt-[3px] text-gray-300 hover:text-black'>{item.info}</h1>
                                <p className="mt-[0.65rem] text-sm josefin-sans-p">{item.text}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
