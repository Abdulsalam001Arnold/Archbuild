import Career from '../components/careers'
import React, { useState, useEffect } from 'react';
import Load from '../components/load';
import Footer from "../components/footer";

export default function CareerPage(){
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
        <Career/>
        <Footer/>
    </div>
)
}