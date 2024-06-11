import React, { useState, useEffect } from 'react';
import Footer from "../components/footer";
import AboutMain from "../components/about";
import Load from '../components/load';


export default function AboutPage() {
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
            <AboutMain/>
            <Footer/>
        </div>
    )
}