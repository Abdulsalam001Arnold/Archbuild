import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';




export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeRoutes = ['/aboutpage', '/about/ceo-message', '/about/Corporate-data', '/about/Board-members', '/about/Corporate-Structure', '/about/Group', '/about/projects_history', '/about/social_responsibility', '/about/firm-profile'];

  const projectRoutes = ['/projects', '/projects/:projectId']
  const peopleRoutes = ['/people', '/people/:peopleId']
  const location = useLocation();
  const isActive = activeRoutes.includes(location.pathname);
  const isProject = projectRoutes.includes(location.pathname);
  const isPeople = peopleRoutes.includes(location.pathname);

  
  return (
    <motion.nav className="bg-white w-full lg:flex gap-2 lg:px-7 items-center fixed top-0 left-0 z-40 py-[14px] h-fit shadow-md" 
    initial={{y: -100, opacity: 0.32}}
    animate={{ y: 0, opacity: 1,}}
    transition={{ease: 'easeOut',type: 'string', stiffness: 500, when: 'beforeChildren', mass: 0.4, duration:0.5}}
    >

    <Link to='/'>
      <motion.div className='flex flex-col items-center justify-center ml-[2rem] text-white bg-black w-fit' whileHover={{scale: [1,1.1,1,1.1,1,1.1,1]}}
      transition={{ease: 'easeOut',type: 'string', stiffness: 120, duration:0.7}}
      >
      <h1 className='caveat-logo text-lg md:text-xl lg:text-lg inline'>Archbuild</h1>
      <span className="block text-xs josefin-sans-p">
        Immutability,transparency
      </span>
      </motion.div>
      </Link>
      <div
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden lg:hidden"
        onClick={() => setOpen(!open)}
      >
        <AiOutlineMenu name={open ? "AiOutlineClose" : "AiOutlineMenu"} />
      </div>

      <ul
        className={`md:flex bg-white md:items-center md:pb-0 pb-12 absolute md:static md:z-10 z-[10] left-0 gap-4 w-full sm:w-[70%] sm:border-y-black md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
          open ? "top-20" : "top-[-490px]"
        }`}
      
        
      >

<Link className={`${location.pathname === '/research-insights' ? 'text-red-500' : ''}`} to='/research-insights'>
          <motion.li className="hover:text-red-500 active:text-red-500 josefin-sans-p"
          initial={{ opacity: 0.32}}
    animate={{ opacity: 1}}
    whileHover={{scale: 1.076}}
    transition={{ease: 'easeOut', duration:2}}>
            Research & Insights
          </motion.li>
        </Link>


       <Link className={`${location.pathname === '/careers' ? 'text-red-500' : ''}`} to='/careers'>
          <motion.li className="hover:text-red-500 active:text-red-500 josefin-sans-p"
          initial={{ opacity: 0.32}}
    animate={{ opacity: 1}}
    whileHover={{scale: 1.076}}
    transition={{ease: 'easeOut', duration:2}}>
            Careers
          </motion.li>
        </Link>
          

        <motion.li className="hover:text-red-500 active:text-red-500 josefin-sans-p"
        initial={{ opacity: 0.32}}
    animate={{ opacity: 1}}
    whileHover={{scale: 1.076}}
    transition={{ease: 'easeOut', duration:1.3}}
        >
        <Link className={`${isPeople ? 'text-red-500' : ''}`} to='/people'>People 
        </Link>
        </motion.li>
        <motion.li className="hover:text-red-500 active:text-red-500 josefin-sans-p" initial={{ opacity: 0.32}}
    animate={{ opacity: 1}}
    whileHover={{scale: 1.076}}
    transition={{ease: 'easeOut', duration:1.3}}><Link className={`${isProject ? 'text-red-500' : ''}`} to='/projects'>Projects</Link></motion.li>
        <motion.li className="hover:text-red-500 active:text-red-500 josefin-sans-p" initial={{ opacity: 0.32}}
    animate={{ opacity: 1}}
    whileHover={{scale: 1.076}}
    transition={{ease: 'easeOut', duration:1.3}}>
          <Link className={`${isActive ? 'text-red-500' : ''}`} to="/aboutpage">About</Link>
        </motion.li>
        
        <Link className={`${location.pathname === '/contact' ? 'text-red-500' : ''}`} to='/contact'>

        <motion.li className="hover:text-red-500 active:text-red-500 josefin-sans-p" initial={{ opacity: 0.32}}
    animate={{ opacity: 1}}
    whileHover={{scale: 1.076}}
    transition={{ease: 'easeOut', duration:1.3}}>Contact Us</motion.li>
        </Link>
        
      </ul>
    </motion.nav>
  );
}
