import Profile from '../components/firm-profile'
import React, { useState, useEffect } from 'react';
import Footer from '../components/footer'
import Load from '../components/load';


export default function Profilepage(){

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
        <Profile/>
        <Footer/>
    </div>
   )
}