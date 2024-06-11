import React, { useState, useEffect } from 'react';
import GetSlide from "../components/get-slide";
import Footer from "../components/footer";
import Load from '../components/load';


export default function Blog() {

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
  
    return (
        <div className='relative'>
            <GetSlide />
            <Footer />
        </div>
    );
}

