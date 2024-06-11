import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; 
import { MdArrowUpward } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillWechat } from "react-icons/ai";

export default function Footer() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
          if (window.scrollY > 20) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', toggleVisibility);
    
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);


       const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


    return(
        <div className='bg-black px-4 md:px-[3rem] w-full py-[5rem]'>
            
                <footer className='w-full'>
                    <nav className='flex flex-col lg:flex-row justify-between'>
                        <ul className='text-white flex flex-col lg:flex-row gap-2 lg:gap-4'>
                        <Link to='/contact'>
                            <li className='text-[12px] uppercase hover:cursor hover:text-red-300 transition josefin-sans-p'>
                                Contact
                            </li>
                            </Link>

                            <Link to='/projects'>
                            <li className='text-[12px] uppercase hover:cursor hover:text-red-300 transition josefin-sans-p'>
                            <p className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</p> projects
                            </li>
                            </Link>

                          <Link to='/careers'>
                            <li className='text-[12px] uppercase hover:cursor hover:text-red-300 transition josefin-sans-p'>
                            Internship
                            </li>
                            </Link>

                            <Link to='/about/Board-members'>
                            <li className='text-[12px] uppercase hover:cursor hover:text-red-300 transition josefin-sans-p'>
                            Our Executives
                            </li>
                            </Link>


                            <Link to='/people'>
                            <li className='text-[12px] uppercase hover:cursor hover:text-red-300 transition josefin-sans-p'>
                            Our Team
                            </li>
                            </Link>
                            <li className='text-[12px] uppercase hover:cursor hover:text-red-300 transition josefin-sans-p'>
                            Sustainability
                            </li>

                            <Link to='/aboutpage'>
                            <li className='text-[12px] uppercase hover:cursor hover:text-red-300 transition josefin-sans-p'>
                            About us
                            </li>
                            </Link>
                        </ul>

                        <ul
      className={`back-to-top-button ${isVisible ? 'show' : 'hide'} text-white uppercase cursor-pointer hidden lg:block`}
      onClick={scrollToTop}
      title="Go to top"
    >
    <li className='text-xs flex play-regular'>
    Top of Page <MdArrowUpward />
    </li>
      
    </ul>
                    </nav>


                    <div className='mt-[2rem] flex flex-col lg:flex-row lg:justify-between'>
                        <ul className='flex items-center gap-3'>
                            <li className='listed'>
                            <TiSocialLinkedin />
                            </li>

                            <li className='listed'>
                            <FaInstagram />
                            </li>
                            <li className='listed'>
                            <FaXTwitter />
                            </li>
                            <li className='listed'>
                            <FaFacebookF />
                            </li>
                            <li className='listed'>
                            <AiFillWechat />
                            </li>
                        </ul>

                        <p className='text-[rgb(118,118,118)] font-light text-sm mt-[1rem] play-regular'>
                        &copy; 2024 <p className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</p>, All Rights Reserved&nbsp;&nbsp;
                        Privacy Statement &amp; Cookie Policy &nbsp;&nbsp;
                        Transparency Statement
                        </p>
                    </div>
                    
                </footer>
            
        </div>
    )
}