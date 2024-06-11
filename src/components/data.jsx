import { motion } from "framer-motion"
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";






export default function Data() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should happen only once
          });
    }, [])

    return(
        <div className='w-full mt-[6rem]'>
             <motion.div className="w-full items-start pl-[1.45rem] md:pl-[2.2rem] lg:pl-[3rem] py-[1rem] bg-[rgb(238,238,238)] md:bg-transparent lg:bg-transparent"
             initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}>
            <Link to='/aboutpage'>
            <span className="w-full flex items-center text-[rgb(136,136,136)]">
            <h1 className="uppercase text-sm md:text-lg lg:text-xl">
                About
            </h1>

            <MdChevronRight className="text-sm md:text-lg lg:text-xl"/>
            </span>
            </Link>

            <h1 className="uppercase mt-[1rem] font-[12px] md:font-[12px] lg:font-[12px] text-sm md:text-3xl lg:text-[3rem] tracking-[2px]">
                corperate data
            </h1>

            </motion.div>


            <div className="w-full mx-auto p-4"
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
      <h1 className="text-2xl text-start md:text-start lg:text-center font-bold mb-4">Corporate Data</h1>
      <div className='w-full flex flex-col justify-center items-center'>
      <table className="w-full lg:w-[50rem] bg-white border border-gray-200">
        <tbody className=''>
          <tr className='flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between'>
            <td className="px-1 py-1 font-semibold text-sm md:text-lg lg:text-lg tracking-[1px] md:tracking-[2px] lg:tracking-[2px]">NAME OF COMPANY</td>
            <td className="px-1 py-2 font-light text-xs md:text-sm lg-text-[12px]"><p className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline'>Archbuild</p> LTD</td>
          </tr>
          <tr className='flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between'>
            <td className="px-1 py-1 font-semibold text-sm md:text-lg lg:text-lg tracking-[1px] md:tracking-[2px] lg:tracking-[2px]">PRESIDENT AND CEO</td>
            <td className="px-1 py-2 font-light text-xs md:text-sm lg-text-[12px]">Atsushi Omatsu</td>
          </tr>
          <tr className='flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between'>
            <td className="px-1 py-1 font-semibold text-sm md:text-lg lg:text-lg tracking-[1px] md:tracking-[2px] lg:tracking-[2px]">REGISTERED ADDRESS</td>
            <td className="px-1 py-2 font-light text-xs md:text-sm lg-text-[12px]">2-13-3 Iidabashi, Chiyoda-ku, Tokyo, Japan</td>
          </tr>
          <tr className='flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between'>
            <td className="px-1 py-1 font-semibold text-sm md:text-lg lg:text-lg tracking-[1px] md:tracking-[2px] lg:tracking-[2px]">FOUNDED</td>
            <td className="px-1 py-2 font-light text-xs md:text-sm lg-text-[12px]">1900</td>
          </tr>
          <tr className='flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between'>
            <td className="px-1 py-1 font-semibold text-sm md:text-lg lg:text-lg tracking-[1px] md:tracking-[2px] lg:tracking-[2px]">ESTABLISHED</td>
            <td className="px-1 py-2 font-light text-xs md:text-sm lg-text-[12px]">July 1, 1950</td>
          </tr>
          <tr className='flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between'>
            <td className="px-1 py-1 font-semibold text-sm md:text-lg lg:text-lg tracking-[1px] md:tracking-[2px] lg:tracking-[2px]">CAPITAL</td>
            <td className="px-1 py-2 font-light text-xs md:text-sm lg-text-[12px]">460 Million Yen</td>
          </tr>
          <tr className='flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between'>
            <td className="px-1 py-1 font-semibold text-sm md:text-lg lg:text-lg tracking-[1px] md:tracking-[2px] lg:tracking-[2px]">NUMBER OF PERSONNEL</td>
            <td className="px-1 py-2 font-light text-xs md:text-sm lg-text-[12px]">
                <h4 className=''>
                Total：3,041 
                </h4>

                <h6>
                Japan Registered 1st Class Architects: 1,244 and Japan Registered 2nd Class Architects: 155 (Archbuild Group Total As of April 1, 2023)
                </h6>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>

    <div className='w-full mt-[2rem] mb-[9px] md:mb-[1rem] lg:mb-[2rem]'>
        <h1 className='font-semibold text-lg md:text-xl lg:text-3xl pl-[2rem] md:pl-[2.56rem] tracking-[1px] md:tracking-[2px] lg:tracking-[2px] lg:pl-[5rem] title mb-[7px] md:mb-[1rem] lg:mb-[2rem]'>
        Our Offices
        </h1>

        <motion.img src='https://www.nikken.co.jp/en/about/p4iusj0000000yzd-img/map.jpg' alt='map' className='mb-[9px] md:mb-[1rem] lg:mb-[2rem]'
            initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{delay: 1.5, ease: 'easeOut', duration: 1.5}}
        />



        <div className='sm:pl-[1rem] md:pl-[2rem] lg:pl-[14rem]'>
        <div className='flex flex-col gap-2 md:gap-3 lg:gap-7'>
            <h1 className='font-semibold text-lg md:text-xl lg:text-3xl'>
            Headquarters
            </h1>

            <div className='border-line sm:w-full md:[w-14rem] lg:w-[20rem]'>

            </div>
            </div>

            <div className='sm:mt-[8px] md:mt-[12px] lg:mt-[1rem]'>
                <h1 className='font-semibold text-sm md:text-lg lg:text-xl'>
                    Tokyo
                </h1>

                <p className='block text-[rgb(136,136,136)] text-xs md:text-sm lg:text-[14px]'>
                2-18-3 Iidabashi, Chiyoda-ku, Tokyo, Japan
                </p>

                <p className='block text-[rgb(136,136,136)] text-xs md:text-sm lg:text-[14px]'>
                TEL: +81-3-5226-3030
                </p>

                <p className='block text-[rgb(136,136,136)] text-xs md:text-sm lg:text-[14px]'>
                FAX: +81-3-5226-3052
                </p>
            </div>
            <div className='w-full mt-[12px] md:mt-[1rem] lg:mt-[3rem]'>
             <div className='border-line sm:w-full md:[w-14rem] lg:w-[20rem]'>

             </div>

             <h1 className='font-semibold text-lg md:text-xl lg:text-2xl'>
             Main Offices
             </h1>

             <p className="text-[rgb(73,73,73)] text-xs md:text-sm lg:text-sm josefin-sans-p">
Osaka, Nagoya, Kyushu, Tohoku
</p>

            </div>

            <div>
           <h1 className='text-xl md:text-2xl lg:text-3xl font-[12px] mt-[1rem] md:mt-[2rem] lg:mt-[2rem] poetsen-one-regular'>
           Overseas Offices:
           </h1>
           
        </div>

            <div className='w-full mt-[3rem] flex flex-col gap-4 justify-center md:lg-8 lg:gap-9'>
                    
                    <div className='flex flex-col md:flex-col lg:flex-row justify-center gap-4 md:gap-7 lg:gap-[13rem] w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center gap-[2rem]'
                    data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
                    data-aos-offset={isBigScreen ? '10' : '2'}>
                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg dancing-script-head'>
                        Shanghai
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        Room 3505, Bank of China Tower, 200 Yin-Cheng Rd. Central,
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        Pudong New Area, Shanghai 200120, China 
                        </p>


                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        TEL: +86-21-5037-2265 
                        </p>


                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        FAX: +86-21-5037-2779
                        </p>
                    </div>



                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg dancing-script-head'>
                        Beijing
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        Room 1210, China World Tower 1, No.1 Jian Guo Men Wai Ave.,
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        Chaoyang, Beijing 100004, China  
                        </p>


                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        TEL: +86-10-6505-4606  
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        FAX: +86-10-6505-4607  
                        </p>
                    </div>


                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg dancing-script-head'>
                        Dalian
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        Senmao Bldg. 5F, 147, Zhongshan lu, Dalian 116011, China 
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        TEL: +86-411-8364-8355 
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        FAX: +86-411-8365-7655
                        </p>

                        
                    </div>


                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg dancing-script-head'>
                        Seoul
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        2017, 92, Saemunan-ro, Jongno-gu, Seoul 03186, Korea 
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        TEL: +822-568-4090
                        </p>


                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        FAX: +822-568-4091
                        </p>

                        
                    </div>


                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg dancing-script-head'>
                        Hanoi
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        #1706 17F, GELEX Tower, 52 Le Dai Hanh str. Hai Ba Trung Dist., 
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        Hanoi, Vietnam
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        TEL: +84-24-3715-3698
                        </p>

                        
                    </div>


                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg dancing-script-head'>
                        Ho Chi Minh
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        Room 1004, 10th Floor, Zen Plaza Building, 54-56 Nguyen Trai
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        Street, District 1, Ho Chi Minh City, Vietnam
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        TEL: +84-28-3925-2570
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        FAX: +84-28-3925-2571
                        </p>

                        
                    </div>


                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg dancing-script-head'>
                        Singapore (Liaison Office)
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        182 Cecil Street, #17-85 Frasers Tower, Singapore 069547 
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        TEL: +65-6622-5330
                        </p>

                    </div>


                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg dancing-script-head'>
                        Bangkok
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        11/1 AIA Sathorn Tower BLDG., 7th Floor. Room 706, 
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        South Sathorn Road. Yannawa, Sathorn, Bangkok, 10120 Thailand
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        TEL: +66-2-285-1233
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        FAX: +66-2-285-1232
                        </p>

                    </div>




                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg dancing-script-head'>
                        Dubai
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        Office # 2903, The Burj Al Salam Tower, Trade Center First, Sh. 
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        Zayed Rd., Dubai P.O.Box 27120, U.A.E.
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        TEL: +971-4-3434269
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        FAX: +971-4-3218660
                        </p>

                    </div>


                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg dancing-script-head'>
                        Riyadh
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        Office #10, Al Izdihar Center 2, Uthman Ibn Affan Rd, Al Izdihar
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        District, Riyadh 12485, Kingdom of Saudi Arabia
                        </p>

                    </div>


                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

                    <div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
                        <h4 className='font-[10px] text-sm md:text-lg lg:text-lg dancing-script-head'>
                        Moscow
                        </h4>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        Ulitsa Usacheva, House 33, Bldg. 1, Moscow 119048, Russian Federation
                        </p>

                        <p className='font-semibold text-[rgb(136,136,136)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
                        TEL: +7-499-348-16-00
                        </p>

                    </div>


                    <div className='items-start flex flex-col gap-1 lg:gap-2'>

<div className='border-line w-full md:[w-14rem] lg:w-[20rem]'></div>
    <h4 className='font-[10px] text-sm md:text-lg lg:text-lg dancing-script-head'>
    Barcelona
    </h4>

    <p className='font-semibold text-[rgb(90,90,90)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
    Av.Diagonal 640, Planta 6, 08017 Barcelona Spain

    </p>

    <p className='font-semibold text-[rgb(88,88,88)] text-xs md:text-sm lg:text-sm josefin-sans-p'>
    TEL: +34 935 450 938
    </p>

</div>



                    </div>




                    </div>


                    

                    </div>

        </div>


    </div>




        </div>
    )
}