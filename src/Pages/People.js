import  People from "../components/people"
import Footer from "../components/footer"
import Load from '../components/load';
import React, { useState, useEffect } from 'react';


export default function Projects() {
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

        
            <People/>
            <Footer/>
        </div>
    )
}