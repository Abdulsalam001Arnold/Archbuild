import { Link } from 'react-router-dom';
import { MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion"
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive';
import 'aos/dist/aos.css';
import React, { useState,useEffect, useRef } from "react";


export default function History(){



  const [activeSection, setActiveSection] = useState('');
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once
    });

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const section1 = section1Ref.current;
    const section2 = section2Ref.current;

    if (section1) observer.observe(section1);
    if (section2) observer.observe(section2);

    return () => {
      if (section1) observer.unobserve(section1);
      if (section2) observer.unobserve(section2);
    };

    

  }, []);
  

    return(
        <div className="w-full mt-[6rem] mb-[4rem]">
      
        <div className="w-full relative h-screen md:h-[100vh]" id='section1'>

        <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p1_bg.jpg' alt='map' className="w-full h-full object-cover"/>

        <div className="absolute z-10 image-bg">
        <div className="w-full items-start sm:pl-[1.45rem] md:pl-[2.2rem] lg:pl-[5rem] py-[3rem]">
            <Link to='/aboutpage'>
            <span className="w-full flex items-center text-white">
            <h1 className="uppercase text-sm md:text-lg lg:text-xl josefin-sans-p">
                About
            </h1>

            <MdChevronRight className="text-sm md:text-lg lg:text-xl"/>
            </span>
            </Link>

            <h1 className="uppercase mt-[1rem] font-[12px] text-white md:font-[12px] lg:font-[12px] text-xl md:text-3xl lg:text-[3rem] josefin-sans-p">
            Projects History
            </h1>

            </div>

            <div className="w-full flex flex-col items-center justify-center text-white sm:mt-[1rem] md:mt-[2rem] lg:mt-[3rem]">
                <div className="items-start sm:w-full lg:w-[40rem]">
                    <h3 className="sm:text-xs md:text-sm lg:text-[19px]">
                    Part 1: The First Sixty Years (1900-1960)
                    </h3>
                    <h2 className="sm:text-xl md:text-2xl text-3xl sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem] poetsen-one-regular">
                    Pioneering Social and Environmental Design:
                    </h2>
                    
                    <h2 className='caveat-logo text-3xl md:text-4xl lg:text-6xl inline sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>Archbuild</h2><p className="inline sm:text-2xl md:text-xl lg:text-xl sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]">’s DNA</p>


                    <p className="poetsen-one-regular sm:text-sm md:text-lg lg:text-lg sm:mt-[1.56rem] md:mt-[2rem] lg:mt-[2rem]">
                    Archbuild has walked stride for stride with Japan as it has modernized. Rather than focus on realizing its own vision, or on becoming a pioneer in its own field, the company has aimed to respond to the demands of society.
The times require certain "needs"; the company takes on the challenge of "projects" to meet these needs, thereby "contributing" to society, and yielding advanced results. This is  Archbuild’s unchanging image.
Image courtesy of The Sumitomo Warehouse Co., Ltd.
                    </p>
                </div>
            </div>
        </div>

        </div>

        <div className="mt-[4rem] w-full flex flex-col items-center justify-center">
            <div className="justify-center sm:w-full md:w-full px-2 lg:w-[50rem]">
                <h3 className="sm:text-2xl md:text-3xl lg:text-3xl josefin-sans-p">
                The Inherited Cycle of "Needs," "Projects," and "Contributions”
                </h3>

                <p className='poetsen-one-regular sm:text-xs md:text-sm lg:text-lg sm:mt-[1rem] md:mt-[2.5rem] lg:mt-[2.5rem]'>
                Archbuild undertakes projects to respond to the needs of the times. Through the acquisition of knowledge and research and development, it creates original ideas and innovative technologies that address society’s demands. The outcomes and societal contributions of these efforts push its group of experts to evolve, and enables the application of gained know-how to the next case. In this way, Archbuild has grown together with Japanese society.
                </p>
            </div>
        </div>

        <div className='w-full bg-[rgb(245,245,245)] mt-[2rem] md:mt-[3rem] lg:mt-[4rem] py-[5rem]'>

        <div className='w-full flex flex-col md:flex-col lg:flex-col items-center justify-center'
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
            <div className='items-center sm:w-full md:w-[45rem] lg:w-[55rem]'>
                <h3 className='sm:text-xl md:text-2xl lg:text-3xl josefin-sans-p'>
                Architecture and Civil Engineering: the Birth of Two Professional Groups
                </h3>

                <h4 className='sm:mt-[2rem] md:mt-[2rem] lg:mt-[4rem] sm:text-xl md:text-2xl lg:text-3xl'>
                Realizing “Architecture for the Next Century” in the Age of Wooden Structures
                </h4>

                <div className='w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center gap-6 mt-[2rem]'>
                    <div className='sm:w-full md:w-full lg:w-[30rem]'>
                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular'>
                        The Westernization of Japan progressed as the nation transitioned from the Edo period (1603-1867) to the Meiji period (1868-1912). The new government issued money, and the yen was born as the fundamental unit of currency. The monetary economy that we know today began to take off in earnest.

                        </p>
                    
                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        During the Edo period, Osaka was known as “the nation’s kitchen" and played a central role in the developing Japanese economy. However, from the end of the Edo period to the beginning of the Meiji period, Osaka's economy temporarily declined due to the discontinuation of storehouses and the sequestration of debts, following the abolition of feudal domains.
                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        Hoping to establish a monetary economy in the Kansai region and revive Osaka as a commercial capital, the Sumitomo company decided to start a banking business and planned to build a head office. It was determined that the construction work should be sufficiently robust, span several years, and last for a century.
                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        To take charge of the need for a monetary economy and the construction of the head office in 1900, the Temporary Building Department of the Sumitomo Head Office, comprised of a group of architectural experts, was established. This was the origin of Archbuild.
                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        As the word "temporary" suggests, the design organization was supposed to be disbanded when construction was completed. However, high expectations were placed on the 26 members who were specially selected for their technological expertise.
                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        This project for the Sumitomo head office contributed to the economic development of the Kansai region and the establishment of the modern banking industry with an architecture that used new technology to show how a bank should be for the new era. Archbuild inherited the aspirations of Sumitomo's mining engineers to contribute to the national interest as part of its DNA.
                        </p>

                    </div>

                    <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]'>
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/tg1is20000004gxc.jpg' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold title dancing-script-big">[Osaka Library: (Present) Osaka Prefectural Nakanoshima Library, 1904.]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">The library was built with a donation from the Sumitomo family to the Osaka Prefectural Government for the purpose of sharing knowledge for the city's modernization effort. It was designed by Magoichi Noguchi of the Temporary Building Department of the Sumitomo Head Office, the predecessor of Archbuild Ltd.
Image Source: Yutaka Hidaka (1920) "Dr. Noguchi Architectural Drawing Collection" by Yutaka Hidaka</p>
                </div>
              </div>



              <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]'>
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_02.jpg' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold title dancing-script-big">[The Sumitomo Building (now the headquarters of Sumitomo Mitsui Banking Corporation) when it was built in 1930.]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">A fusion of Oriental and Western architecture, the building remains in the history of modern Japanese architecture.
Image courtesy of Sumitomo Historical Archives​</p>
                </div>
              </div>
            </div>
                </div>
            </div>

            
        </div>

          <div className='w-full flex flex-col md:flex-col lg:flex-col items-center justify-center'>
            <div className='items-center sm:w-full md:w-full lg:w-[60rem]' 
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
            <h4 className='sm:mt-[2rem] md:mt-[2rem] lg:mt-[4rem] sm:text-xl md:text-2xl lg:text-3xl'>
            A Pioneering Urban Development Project with Public- and Private-sector Collaboration
                </h4>

                <div className='w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center gap-6 mt-[2rem]'>
                    <div className="sm:w-full md-w-full lg:w-[30rem]">
                        <p className='text-xs md:text-lg lg-text-[17px] play-regular'>
                        After the Meiji Restoration, the number of ships coming from overseas increased, and Osaka's trade and commerce grew, necessitating improving the port. Large-scale port construction work initiated by the city of Osaka was suspended due to financial difficulties brought about by the economic depression following the Russo-Japanese War (1904-5).
                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        After witnessing this situation, Sumitomo stepped forward to build the first quay and warehouse complex behind it for the development of the regional Kansai economy, which became the catalyst for the Osaka North Port project.
                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        The City of Osaka accepted the offer, and all construction work was carried out by Sumitomo under municipal supervision.
                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        Against this backdrop, Sumitomo established an independent Temporary Civil Engineering Division in its head office in 1919 to kick off the Osaka North Port project. Together with related landowner associations, Osaka Hokko Co. was set up, and the project was promoted by introducing new civil engineering technology.
                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        The project included the construction of a harbor, including breakwaters and piers, reclaimed land, warehouses, factories, and housing. The goal was to develop an international industrial city directly connected to the Port of Osaka.
                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        At a time when the concept of public works did not exist, Archbuild contributed to urban development by establishing a system equivalent to today's public-private partnership projects. The port project involved the collaboration of two groups of specialists in architecture and civil engineering, and served as a prototype for Archbuild as a company.
                        </p>
                    </div>

                    <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]'>
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_03.jpg' alt='map' className='w-[21rem] h-auto flex-shrink-0 img-hero' />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold title dancing-script-big">[Map of Osaka’s North Port]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">he ground and soil surveys, as well as the building’s structural design, were all carried out by the company. The current method of structural design based on reliable in-house data was established at this time.<br/>
Source: Osaka Hokko Co. Ltd. (ed.), Twenty Years of Osaka Hokko.​</p>
                </div>
              </div>
                </div>
            </div>
           </div>

        </div>



        <div className="w-full sm:mt-[3rem] md:mt-[4rem] lg:mt-[4rem] flex flex-col items-center justify-center"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>

                <h3 className='sm:mt-[2rem] md:mt-[2rem] lg:mt-[4rem] font-semibold sm:text-xl md:text-2xl lg:text-3xl'>
                The Great Depression, and Escape
                </h3>

                <div className='w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center gap-6 mt-[2rem]'>
                    <div className="sm:w-full md-w-full lg:w-[30rem]">
                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular'>
                        In 1929, the Great Depression hit countries around the world. Sumitomo, too, experienced a serious business downturn, which compelled layoffs. Eikichi Hasebe and Kenzo Takekoshi, leaders of the design and engineering department (known as the Construction Work Department), subsequently left the Sumitomo Limited Partnership Company, unable to bear staff departures. The pair went on to establish Hasebe-Takekoshi Architects Office.
                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        Sumitomo gave a warm send off, lending the men the capital for their new venture. While no bonuses were paid in the first year of operations, they at least had an opportunity.
                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>

                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        Sumitomo was asked to work on a project for the Osaka Stock Market Exchange Building, which had the "business" of developing Osaka’s economy. Even in times of hardship, the company has proven its resolve to respond to the “needs” of the time by working a "project" and "contributing" to society, a cycle that remains intact at the firm.
                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        
                        </p>

                        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                        The Osaka Stock Exchange Building is a large, air-conditioned space with a 2,000-person capacity, pioneering lighting and acoustic design. It was a precursor to later stadiums and other highly functional large spaces. Hasebe-Takekoshi Architects was lauded for its work on the project, went on to a succession of projects outside Sumitomo, and eventually repaid all the capital it had initially borrowed. It became the first architectural design firm in Japan to be incorporated, fulfilling its social responsibility mission without outside capital influence -- the equivalent of a European or U.S. professional corporation. The event marked the start of the corporation both in form and spirit, which Archbuild carries on today.
                        </p>
                    </div>
                    
                    <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]'>
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_04.jpg' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold title dancing-script-big">[Map of Osaka’s North Port]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">he ground and soil surveys, as well as the building’s structural design, were all carried out by the company. The current method of structural design based on reliable in-house data was established at this time.<br/>
Source: Osaka Hokko Co. Ltd. (ed.), Twenty Years of Osaka Hokko.​</p>
                </div>
              </div>

                </div>

        </div>

        <div className="w-full bg-[rgb(245,245,245)] sm:mt-[2rem] md:mt-[3rem] lg:mt-[4rem] py-[5rem]">
            <div className="flex flex-col items-center justify-center w-full" 
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
            <h3 className='sm:mt-[2rem] md:mt-[2rem] lg:mt-[4rem] font-semibold sm:text-xl md:text-2xl lg:text-3xl'>
            The Belief that Engineers are Vital to Postwar Reconstruction
                </h3>

                <div className="w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center gap-6 mt-[2rem]">

                <div className="sm:w-full md-w-full lg:w-[30rem]">
                <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular'>
                After World War II, Sumitomo decided to set up a company to regather the engineers who returned home jobless after years of hardship. The dispersal of these trained and nurtured human resources would have constituted both a serious loss of human capital as well as a loss to the effort of rebuilding the nation. Sumitomo first and foremost believed that engineers were vitally necessary for Japan's postwar reconstruction.
                </p>

                <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                The dismantling of zaibatsu (vertically integrated business conglomerates) was also predicted. Rather than prepare for its own dismantling, however, the company prepared for its division as an agenda-driven organization.
                </p>

                <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                Thus, a new organization was established. Derived from the ideal of "building a new Japan out of devastation," it was named "Nippon Kensetsu Sangyo" (“Japan Construction Industry”), and later Archbuild Komu Co., Ltd. (“Archbuild Design & Engineering”). At the time of Archbuild Komu’s birth, all company shares were held by Nippon Kensetsu Sangyo to support its establishment. However, when business took off, the firm’s President and 14 other members took ownership of the shares.
                </p>

                <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                From early on, the President established a policy of not releasing the shares externally, which essentially began the current internal shareholder system. This system was established to ensure that the company would not face outside shareholder control, strictly maintaining its independence and self-discipline as a designer and construction supervisor. This system is deeply rooted in the spirit of the company.
                </p>
                </div>

                <div className="flex flex-col justify-center items-center">
                <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]'>
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_05.jpg' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold title dancing-script-big">[University of the Sacred Heart, Tokyo, 1950-1959]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">The Tokyo branch of Nippon Kensetsu Sangyo was contracted to design and supervise the first several phases of the University of the Sacred Heart building, which still stands in Hiroo, Tokyo.​</p>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]'>
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_06.jpg' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold title dancing-script-big">[Joshigakuin, 1950-1955]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Archbuild Komu Co., Ltd. took charge of several phases of design and construction of the school. In 1992, the school building was rebuilt (designer: W.M. Vories &amp; Co., Architects), but still retains some characteristics of its original appearance.​</p>
                </div>
              </div>
                </div>
        

                </div>
            </div>
        </div>



        

        <div className="w-full relative h-screen md:h-[100vh] mt-[5rem]" id='section2'>
        <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_bg.jpg' alt='map' className="w-full h-full object-cover"/>

        <div className="absolute z-10 image-bg pt-[7rem] md:pt-[4rem] lg:pt-[8rem]">
            <div className="sm:pl-0 md:pl-[2rem] lg:pl-[12rem]"
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
                <h3 className="sm:mb-[1rem] md:mb-[2rem] lg:mb-[2rem] text-xs md:text-sm lg:text-[19px] text-white"> 
                Part 2: Sixty Years of Diversity (1961-)
                </h3>
                <h1 className="sm:text-xl md:text-2xl text-3xl mt-[1rem] md:mt-[2rem] lg:mt-[2rem] poetsen-one-regular text-white">
                Diversifying Archbuild's Contributions Along with Society’s Needs
                </h1>

                <p className="poetsen-one-regular sm:text-sm md:text-lg lg:text-lg mt-[2rem] md:mt-[3rem] lg:mt-[4rem] sm:w-full md:w-[90%] lg:w-[80%] text-white">
                From the 1960s, Japan's society and economy continued to change and expand.Archbuild kept pace with these changes, expanding its business into the fields of architecture, urban planning and the environment. However, this was not a mere expansion of business, but rather a result of its continued adherence to the cycle of responding to the needs of an increasingly diverse era and working on projects to contribute to it.
Photo by kuremo - stock.adobe.com
                </p>
            </div>
        </div>
        </div>

        <div className="w-full mt-[4rem]">
            <div className="flex flex-col items-center justify-center w-full"
            data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
            data-aos-offset={isBigScreen ? '10' : '2'}>
            <h3 className='sm:mt-[2rem] md:mt-[2rem] lg:mt-[4rem] font-semibold sm:text-xl md:text-2xl lg:text-3xl'>
            Energizing a New Postwar Society
                </h3>

                <div className="w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center gap-6 mt-[2rem]">
                <div className="sm:w-full md-w-full lg:w-[30rem]">
                    <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular'>
                    As represented by the famous statement “It is no longer the postwar,” Japan dedicated itself to modernization and building a new nation. Stimulated by the national 1960 Income Doubling Plan and the 1964 Tokyo Summer Olympics, economic growth accelerated, general companies grew, and the number of office workers surged. This created an unprecedented need for large-scale office buildings, and Archbuild Komu responded.
                    </p>

                    <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                    The Palaceside Building is one project that the firm took on to meet this challenge. A groundbreaking building that combined offices and commercial facilities, it became the prototype for large-scale mixed-use buildings. The building provided a comfortable environment for office workers by introducing ceiling-height windows and allowed public rooftop access. Today, the structure remains as one of the most iconic office buildings of the era and has contributed to the development of office building space in Japan.
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center">
                <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]'>
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/tg1is20000004cbi.png' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Palaceside Building, 1966]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">With a total floor area of 120,000 square meters, it was a groundbreaking building for its time, and a pioneering long-span office building, a Archbuild specialty.
                 ​</p>

                 <p>
                 Photo: Taisuke Ogawa (exterior) / Shuji Yamada (rooftop)
                 </p>
                </div>
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row items-start justify-center gap-2 w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/tg1is20000004cc0.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-[9rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Hyakujushi Building / Hyakujushi Bank Head Office 1966]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">In the era of an autocratic economy, the Hyakujushi Building created a new image of a bank that was open to the public. Through its architecture, it embodied “bank hospitality,” and contributed to the development of civil society.
                 ​</p>

                 <p>
                 Photography by Toshio Taira, Taira Photo
                 </p>
                </div>
                </div>
                </div>

                </div>

            </div>
        </div>

        <div className="w-full mt-[4rem] bg-[rgb(245,245,245)]">
        <div className="flex flex-col items-center justify-center w-full"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
            <h3 className='sm:mt-[2rem] md:mt-[2rem] lg:mt-[4rem] font-semibold sm:text-xl md:text-2xl lg:text-3xl poetsen-one-regular'>
            Creating a Symbol for the “Age of the Masses”
                </h3>

                <div className="w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center gap-6 mt-[2rem]">
                <div className="sm:w-full md-w-full lg:w-[30rem]">
                <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular'>
                As the liberal economy grew and civic life became more active, public masses assumed a leading role in the era. With an ascending GDP, people could afford to enjoy culture and entertainment, and demand for multi-purpose facilities rose. The project that came about in response to this need was the National Labor Youth Center (now Nakano Sunplaza).
                </p>

                <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                Three buildings were constructed on a site with limited area: an auditorium for theater and music, a hotel, and an office and sports facility. The trio were arranged three-dimensionally, using structural technology gleaned through factory designs. The large triangular shape of the complex became symbolic of the era. Subsequent demand for a space to accommodate large-scale events led to the creation of Tokyo Dome.
                </p>

                <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                The capacity of Tokyo Dome was 60,000 people, a big leap from the 10,000-person scales common for concert halls. The facility became the forerunner of all-weather multipurpose stadiums now seen around the world. Archbuild has continued to contribute to expanding popular culture from the 1970s to today.
                </p>
                </div>

                <div className="flex flex-col justify-center items-center">
                <div className='flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]'>
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_01.jpg' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />
                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[National Labor Youth Center (now Nakano Sunplaza), 1973]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">The large triangular architecture became symbolic of both the times and of Japanese pop culture. The shape owes to its evacuation design, in which larger facilities for use by greater numbers of people are placed at lower levels.
                 ​</p>

                 
                </div>
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row items-start justify-center gap-2 w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_02.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-[9rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Tokyo Dome, 1988]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Japan's first all-weather multipurpose stadium. It greatly advanced structural and MEP engineering technologies, as well as disaster prevention planning and acoustic and lighting design for large spaces.
                 ​</p>

                 <p>
                 Image courtesy of Tokyo Dome
                 </p>
                </div>
                </div>
                </div>
                </div>
        </div>
        </div>

        <div className="w-full mt-[4rem]">
        <div className="flex flex-col items-center justify-center w-full"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
        <h3 className='sm:mt-[2rem] md:mt-[2rem] lg:mt-[4rem] font-semibold sm:text-xl md:text-2xl lg:text-3xl poetsen-one-regular'>
        Enhancing Intercity Competitiveness Through Private Sector Vitality
        </h3>

        <div className="w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center gap-6 mt-[2rem]">
        <div className="sm:w-full md-w-full lg:w-[30rem]">
        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular'>
        In 1970, Archbuild Komu Co., Ltd. changed its name to Archbuild Ltd. Like a “Big Bang”, Japanese society and technology began to rapidly expand that year. By 1972, the Japanese archipelago remodeling theory was proposed, and urban remodeling and the development of regional cities were promoted. As a result, Japanese cities began to search for new ways to develop.
                </p>

                <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                In response to the need to further develop Osaka, Japan's second largest city, the company undertook the Osaka Business Park (OBP) project. The project was led not by the government, but by the landowner and Archbuild themselves.
                </p>

                <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
                The project was positioned as a model for utilizing private-sector vitality and became a pioneer of private-sector-led development projects. It succeeded and contributed to Osaka’s economic development, thanks to the accumulation of trust that emerged from the encounters and the fortitude of all the persons involved.
                </p>
        </div>

        <div className="flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_03.jpg' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Osaka Business Park, 1970s - ]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">This large-scale land readjustment project of approximately 26 hectares was led by the private sector. Archbuild, together with Takenaka Corporation and Fumihiko Maki, proposed “OBP Plan 1969”. Since the 1970s, Archbuild has contributed to urban development through collaboration that transcends the boundaries of position and expertise.
                 ​</p>

                 <p>
                 Photography by Naotoshi Higuchi, Photo Kyodo Pro
                 </p>
                </div>
                </div>

        </div>
        </div>
        </div>


        <div className='w-full mt-[4rem] bg-[rgb(245,245,245)]'>
        <div className="flex flex-col items-center justify-center w-full"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
        <h3 className='sm:mt-[2rem] md:mt-[2rem] lg:mt-[4rem] font-semibold sm:text-xl md:text-2xl lg:text-3xl poetsen-one-regular'>
        From Japan to the World in the Era of Internationalization
        </h3>

        <div className="w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center gap-6 mt-[2rem]">
        <div className="sm:w-full md-w-full lg:w-[30rem]">
        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular'>
        As the Japanese market shifted from growth to maturity, many companies began to seek overseas arenas for their products and services. Here, the need for international airports was created, and Kansai International Airport, Japan's first airport facility capable of 24-hour operations, was born. A national project designed for safety, the airport was built on a man-made island about five kilometers off the coast of Osaka Bay.
        </p>

        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
          
        </p>

        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
        Construction of the island, which covered approximately 510 hectares of sea at an average depth of about 18 meters, was a large-scale world-class undertaking.
        </p>

        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]'>
        Archbuild's comprehensive strengths in architecture and civil engineering, cultivated over the years, enabled it to carry out this sophisticated and challenging project and contribute to Japan’s globalization.
        </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col md:flex-col lg:flex-row items-start justify-center gap-2 w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_05.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-[9rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Central Japan International Airport "Centrair" Passenger Terminal Building, 2004]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">This terminal building was constructed as a new international hub for the Chubu region, with 24-hour access to and from the sea airport.

                 ​</p>

                 <p>
                 Photography: SS. Inc
                 </p>
                </div>
                </div>


                <div className="flex flex-col md:flex-col lg:flex-row items-start justify-center gap-2 w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_06.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-[9rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Kansai International Airport Passenger Terminal Building, 1994]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">A single connected roof covers the entire length of the building (approx. 1.7 km) and realizes a grand space that integrates design, structure, and MEP.
                 ​</p>

                 <p>
                 (Large roof designed by Renzo Piano)

                 </p>
                 <p>
                 Image courtesy of Takenaka Corporation
                 </p>
                </div>
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row items-start justify-center gap-2 w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_04.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-[9rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Narita International Airport, 1978-]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">This facility was created during a period of rapid economic growth in response to demand for international transportation and the proliferation of large jet aircraft. It continues to support Japan's skies while responding to societal changes. Archbuild's history of international airport design began here.
                 ​</p>

                 <p>
                 Photography: SS. Inc

                 </p>
                </div>
                </div>

                <div className="flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_07.jpg' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Islamic Development Bank Headquarters Building, 1993]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">The period around 1990 was also a time when Archbuild took on the challenge of designing overseas buildings. This project was lauded for the high quality of technology, service, and attitude toward its undertaking that Japanese firms had developed during the recent economic boom. Built in Jeddah, Saudi Arabia’s second largest city, the Islamic Development Bank Headquarters Building reflects a thorough and deep understanding of the climate, culture, religion, and temperament of the local people, as well as spatial concepts and customs unique to Islamic architecture. Some 30 years after its construction, its appearance remains unchanged.
                 ​</p>

                
                </div>
                </div>
        </div>
        </div>
          </div>
        </div>


        <div className='w-full mt-[6rem]'>
        <div className="flex flex-col items-center justify-center w-full"
        data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
        data-aos-offset={isBigScreen ? '10' : '2'}>
        <h3 className='sm:mt-[2rem] md:mt-[2rem] lg:mt-[4rem] font-semibold sm:text-xl md:text-2xl lg:text-3xl poetsen-one-regular'>
        Creating Mature Society Values after the Collapse of the Bubble Economy
        </h3>

        <div className="w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center gap-6 mt-[2rem]">
        <div className="sm:w-full md-w-full lg:w-[30rem]">
          <p className="sm:text-xs md:text-lg lg-text-[17px] play-regular">
          With the collapse of the bubble economy, society as a whole came to a standstill and shifted its priorities from economic growth – the prime directive since the end of World War II -- to citizen comfort and convenience.
          </p>

          <p className="sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]">
          The Tokyo Midtown project reflects the needs of a mature Japanese society. This large-scale redevelopment project covers approximately 10 hectares in total and was designed to be integrated with the adjacent Minato Ward Hinokicho Park. It creates an unprecedented open space of approximately four hectares of lush greenery, providing space where people can relax and enjoy themselves in the heart of Tokyo.
          </p>

          <p className="sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]">
          Multiple designers from Japan and abroad were involved in Tokyo Midtown, and Archbuild was also in charge of the development’s management. Today, private consulting services for urban and community planning are common. However, at the time, the government customarily undertook urban planning, making this project innovative in that respect.
          </p>

          <p className="sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[1rem] md:mt-[2rem] lg:mt-[2rem]">
          The key to creating value on the scale of city blocks rather than individual buildings is coordination and consensus. Archbuild made decisions in the spirit of neutrality, demonstrating its commitment to social and environmental design that contributes to people.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_08.jpg' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Tokyo Midtown, 2007]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Although large scale and long-term projects tend to experience delays in opening dates in response to changes in social and economic conditions, a precise and accurate roadmap enabled this project to open on schedule.
                 ​</p>

                <p className='mt-[0.65rem] text-sm josefin-sans-p'>
                Photography: Kawasumi Kobayashi Kenji Photograph Office
                </p>
                
                </div>
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row items-start justify-center gap-2 w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_09.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-[9rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Tokyo Midtown Grass Square]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">This area is an important part of the “Green Belt” that stretches from Aoyama to Roppongi to Akasaka and plays a role in reducing Tokyo's heat island effect.
                 ​</p>

                 <p>
                 Image courtesy of Tokyo Midtown

                 </p>
                </div>
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row items-start justify-center gap-2 w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_10.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-[9rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Nakanoshima Area, 2012-2017]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Nakanoshima had been the political, economic, and cultural center of Osaka, its abundant water, greenery, and historical architecture forming a landscape representative of the city. The area continues as a place to enjoy the richness provided by culture and history, as illustrated by the rebuilding of Festival Hall, long beloved by the citizens of Osaka.
                 ​</p>

                
                </div>
                </div>

        </div>


        </div>

        </div>
        </div>


      <div className='w-full mt-[5rem] bg-[rgb(245,245,245)] py-5'>
      <div className="flex flex-col items-center justify-center w-full"
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '10' : '2'}>
      <h3 className='sm:mt-[2rem] md:mt-[2rem] lg:mt-[4rem] font-semibold sm:text-xl md:text-2xl lg:text-3xl poetsen-one-regular'>
      Before and After the Major Earthquakes
        </h3>

        <div className="w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center gap-6 mt-[2rem]">
        <div className="sm:w-full md-w-full lg:w-[30rem]">
        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular'>
        The Great Hanshin Earthquake and the Great East Japan Earthquake drastically changed public disaster awareness. Long before these events, however, Archbuild had faced the “needs” of Japan’s earthquake-prone geography.
        </p>

        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[2rem] md:mt-[2rem] lg:mt-[2rem]'>
        In the Japanese Red Cross Ishinomaki Hospital project, Archbuild conducted a geological survey and studied the past flooding of the old Kitakami River. The height of the embankment had been set higher than the water level during the past flood. Thus, the building was spared from flooding damage caused by the Great East Japan Earthquake tsunami, leading to the continuation of advanced medical activities.
        </p>

        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[2rem] md:mt-[2rem] lg:mt-[2rem]'>
        Archbuild's DNA, which always responds to the needs of the times, has led to contributions that affect lives. The experience gained from the project has been utilized in the design of subsequent medical facilities.
        </p>

        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular sm:mt-[2rem] md:mt-[2rem] lg:mt-[2rem]'>
        In addition, a team of Archbuild volunteers developed an “escape map” tool for visualizing evacuation routes in the event of disaster. Designed from a professional urban planning and architecture perspective, the map can be created easily by individuals or workshops and shared on the Internet. The tool is now being used by local governments, schools throughout Japan, and overseas organizations.
        </p>
        </div>

        <div className="flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_11.jpg' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Japanese Red Cross Ishinomaki Hospital, 2011]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Based on the experiences of the Great East Japan Earthquake and the achievements of the Japanese Red Cross Ishinomaki Hospital, Archbuild reviewed its design methods to further ensure resilience in times of disaster.
                 ​</p>

                <p className='mt-[0.65rem] text-sm josefin-sans-p'>
                Photo: Ono Studio
                </p>
                
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-2 w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_12.jpg' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-[9rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Escape Map]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">The escape map, which visualizes evacuation routes and times during disasters, has been developed independently by various municipalities since its creation by the team.
                 ​</p>

                 
                </div>
                </div>
                </div>
      
      </div>

      </div>
      </div>




      <div className='w-full mt-[4rem] '>
      <div className="flex flex-col items-center justify-center w-full"
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '10' : '2'}>
      <h3 className='sm:mt-[2rem] md:mt-[2rem] lg:mt-[4rem] font-semibold sm:text-xl md:text-2xl lg:text-3xl poetsen-one-regular'>
      Managing Urban Restructuring
        </h3>
        <div className="w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center gap-6 mt-[2rem]">
        <div className="sm:w-full md-w-full lg:w-[30rem]">
          <p className="sm:text-xs md:text-lg lg-text-[17px] play-regular">
          More than half a century has passed since Japan’s period of high economic growth, and the urban facilities and buildings created during that time need to be renewed and rebuilt. In order to achieve optimal solutions amid multiple issues, it is necessary not for owners to deal with each issue individually, but for entire cities to renew themselves systematically.
          </p>

          <p className="sm:text-xs md:text-lg lg-text-[17px] play-regular mt-[1rem] md:mt-[2rem] lg:mt-[2rem]">
          In discovering the need for urban reorganization, Archbuild, as a group of social and environmental design experts, has committed to going beyond basic technical and design capabilities to designing social systems and mechanisms, building consensus among numerous stakeholders, and providing solutions through long-term project management. The Shibuya Redevelopment Project, said to be a once-in-a-century effort, is one concrete example.
          </p>

          <p className="sm:text-xs md:text-lg lg-text-[17px] play-regular mt-[1rem] md:mt-[2rem] lg:mt-[2rem]">
          In urban renewal, it is important to eliminate the boundaries between the city, architecture, and social infrastructure, and to work in an integrated manner. The collaboration between industry, government, academia, and the private sector demonstrated in the Shibuya Redevelopment Project will contribute to society as a model case for future urban renewal and regeneration. As a professional services firm, Archbuild will continue to provide new values of experience by integrating its diverse expertise.
          </p>
          </div>

          <div className='flex flex-col items-center justify-center gap-4'>
          <div className="flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_13.jpg' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Shibuya Redevelopment Project]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">New mechanisms such as the Urban Core were created to provide smooth access to Shibuya Station, which had formerly been a complex and intertwined area. The photo shows one of the project’s symbolic facilities, Shibuya Scramble Square Phase I (East Wing: completed in 2019).
                 ​</p>

                <p className='mt-[0.65rem] text-sm josefin-sans-p'>
                Photo: SS. Inc
                </p>
                
                </div>
                </div>

                <div className="flex flex-col items-center justify-center mb-[1.56rem] overflow-hidden w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_14.jpg' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Grand Front Osaka, 2013]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">A new face of Osaka open to the people was created under the theme of “water and greenery” on the site of a former freight station in front of JR Osaka Station -- said to be the last ”prime” location in Kansai. In the second phase starting in 2024, a vast urban park of about 45,000 square meters will be created in front of the station.
                 ​</p>

            
                
                </div>
                </div>



          </div>

          </div>
      </div>
      </div>

      <div className='w-full bg-[rgb(245,245,245)] mt-[2rem] md:mt-[3rem] lg:mt-[4rem] py-[5rem]'>
      <div className="flex flex-col items-center justify-center w-full"
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '10' : '2'}>
      <h3 className='sm:mt-[2rem] md:mt-[2rem] lg:mt-[4rem] font-semibold sm:text-xl md:text-2xl lg:text-3xl poetsen-one-regular'>
      Pioneering Carbon-neutral Social and Environmental Design
        </h3>
        <div className="w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center gap-6 mt-[2rem]">
        <div className="sm:w-full md-w-full lg:w-[30rem]">
        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular'>
        Since the oil crisis, Archbuild has worked to realize energy- and resource-efficient buildings, environmentally friendly architecture, and eco-cities. In the 2000s, efforts to address global environmental issues have progressed, and carbon neutrality has become a pressing issue. The Ministry of Education, Culture, Sports, Science, and Technology (MEXT) launched its Super Eco-School Demonstration Project to promote zero-energy public school facilities, as more than 70% of Japan’s public school buildings have aged at least 25 years since their completion.
        </p>

        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular mt-[2rem] md:mt-[2rem] lg:mt-[2rem]'>
        Archbuild’s project for Mizunamikita Junior High School in Gifu Prefecture reflects the company’s belief that it is important for students to be aware of ecology and energy conservation and to take action based on their own initiative. The system introduced to the facility incentivizes energy-saving behavior, and resulted in the achievement of ZEB (zero energy building) status for the first time in Japan for elementary and junior high schools. As a ZEB model, the project has opened up possibilities for many public schools across Japan and will contribute to the future promotion of carbon neutrality.
        </p>

        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular mt-[2rem] md:mt-[2rem] lg:mt-[2rem]'>
        Almost every year, Archbuild receives numerous awards for facilities that excel in advanced technology, energy conservation, and resource conservation. Carbon neutrality is a project that is part of Archbuild's DNA. As such, the company is committed to continuing to link human activities and the natural environment.
        </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-start justify-center gap-2 w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_15.png' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Mizunamikita Junior High School, 2018]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">Students' daily awareness of the school’s environmental architecture, as well as changes in air flow and light was also a key to “zero energy” achievement. The image shows students operating the eco-monitors installed in each classroom.

                 ​</p>

                 <p>
                 Exterior photography: KINDAIKENCHIKU-SHA CO., LTD.
                 </p>
                </div>
                </div>



                <div className="flex flex-col items-start justify-center gap-2 w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_16.png' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[NBF Osaki Building, 2011]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">This project features “Bioskin”, the world's first evaporative cooling exterior system inspired from “uchimizu,” the idea of sprinkling water on the ground to lower the ambient temperature. The system reduces the heat island effect as well as the building’s internal cooling load.

                 ​</p>

                 <p>
                 Exterior photography: Harunori Noda [Gankosha].
                 </p>
                </div>
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-2 w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_17.png' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-[9rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Tokyo Gas Earth Port, 1996 and 2010]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">From energy conservation measures controlling heat and light, and integrated energy systems using renewable energy and city gas installed in 2010, Tokyo Gas Earth Port is working its way to become a zero energy building.

                 ​</p>

                 <p>
                 Photography: SS. Inc
                 </p>
                </div>
                </div>


                </div>
</div>
        </div>

      </div>
      

      <div className='w-full mt-[4rem]'>
      <div className="flex flex-col items-center justify-center w-full"
      data-aos={isBigScreen ? 'fade-up' : 'fade-up'}
      data-aos-offset={isBigScreen ? '10' : '2'}>
      <h3 className='sm:mt-[2rem] md:mt-[2rem] lg:mt-[4rem] font-semibold sm:text-xl md:text-2xl lg:text-3xl poetsen-one-regular'>
      Solving the World's Urban Problems Through Social and Environmental Design
        </h3>

        <div className="w-full flex flex-col md:flex-col lg:flex-row items-center md:items-center lg:items-start justify-center gap-6 mt-[2rem]">
        <div className="sm:w-full md-w-full lg:w-[30rem]">
        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular'>
        Cities in China, Southeast Asia, India, the Middle East, South America and elsewhere face chronic traffic congestion and are looking for ways to shift to public transportation. TOD (Transit Oriented Development) is the answer to this need. TOD refers to urban development centered around public transportation rather than automobiles, as well as development along rail lines. In recent years, Archbuild has been implementing urban regeneration efforts such as the Shibuya Redevelopment Project, and contributes to solving urban problems by introducing Japanese-style TOD in emerging countries.
        </p>

        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular mt-[2rem] md:mt-[2rem] lg:mt-[2rem]'>

        </p>

        <p className='sm:text-xs md:text-lg lg-text-[17px] play-regular mt-[2rem] md:mt-[2rem] lg:mt-[2rem]'>
        What kind of system and process should be used to achieve total optimization? The company plans to demonstrate its design capabilities from know-how thus far cultivated, and has begun to take a proactive approach in overseas markets. In doing so, it carries on the cycle of "needs”, "projects", and "contributions”, and will continue to pioneer meaningful social and environmental design, both in Japan and around the world.
        </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-2 w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_18.png' alt='map' className='sm:w-[25rem] md:w-[25rem] lg:w-[9rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Chongqing Shapingba Station Complex Development, 2020]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">With a total floor area of 480,000 square meters, this grand project integrates commercial, office, and hotel/serviced apartment facilities in a public transportation hub connecting a high-speed rail line and three subway lines.

                 ​</p>

                 <p>
                 Photography: Large Format
                 </p>

                 <p>
                 Photography Studio
                 </p>
                </div>
                </div>

                <div className="flex flex-col items-start justify-center gap-2 w-[25rem]">
                <img src='https://www.nikken.co.jp/en/about/p4iusj00000011cd-img/projects_history_p2_19.jpg' alt='map' className='w-[25rem] h-auto flex-shrink-0 img-hero' />

                <div className="mt-[0.5rem]">
                  <h3 className="text-lg font-bold text-blue-400 dancing-script-big">[Shenzhen Xili Comprehensive Transportation Hub, scheduled for 2025 completion]</h3>
                  
                  <p className="mt-[0.65rem] text-sm josefin-sans-p">China’s largest transportation hub. A green, low-carbon city was proposed under the concept of next-generation TOD “that integrates the station, city, people, and nature.”

                 ​</p>

                
                </div>
                </div>

        </div>

        </div>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: '10px', zIndex:'20', display:'flex', justifyContent:'center', gap:'6px' }} className='sm:left-[50%] md:left-[21%] lg:left-[30%]'>
      <a href="#section1" style={{ textDecoration: 'none', color: 'inherit' }}>
      <button className="text-blue-400 items-center justify-center bg-white py-3 px-2 linked hover:bg-blue-400 hover:text-white text-xs md:textsm lg:text-sm hidden md:hidden lg:block" style={{backgroundColor: activeSection === 'section1' ? 'white' : 'lightblue' }}>
      <p className="capitalize">Part 1: the first 60 years (1900-1960)</p>
      </button>
      </a>
      <a href="#section2" style={{ textDecoration: 'none', color: 'inherit' }}>
      <button className="text-blue-400 items-center justify-center bg-white py-3 px-2 linked hover:bg-blue-400 hover:text-white text-xs md:textsm lg:text-sm hidden md:hidden lg:block" style={{backgroundColor: activeSection === 'section2' ? 'white' : 'lightblue' }}>
      <p className="capitalize">Part 2: sixty years of diversity(1961-)</p>
      </button>
      </a>
    </div>

      
        </div>
    )
}

