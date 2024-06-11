import Footer from "../components/footer";
import Contact from "../components/contact";
import Load from '../components/load';
import React, { useState, useEffect } from 'react';


export default function Contactpage(){

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
        <div className='relative'>
            <Contact/>
            <Footer/>
        </div>
    )
}