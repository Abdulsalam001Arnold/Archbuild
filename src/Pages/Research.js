import React, { useState, useEffect } from 'react';
import Footer from "../components/footer";
import Load from '../components/load';
import Research from '../components/research'

export default function Researchpage(){

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a delay (e.g., data fetching)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // Change the delay as needed
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return <Load />;
    }

    return(
        <div className='relative'>
        <Research/>
        <Footer/>
    </div>
    )
}