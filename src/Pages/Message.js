import Message from "../components/message";
import Load from '../components/load';
import React, { useState, useEffect } from 'react';
import Footer from "../components/footer";



export default function CeoMessage() {
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

    return (<div className='relative'>
        <Message/>
        <Footer/>
    </div>)
};
