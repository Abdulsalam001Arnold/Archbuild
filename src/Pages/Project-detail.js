import ProjectDetail from "../components/get-project"
import Footer from "../components/footer"
import Load from '../components/load';
import React, { useState, useEffect } from 'react';


export default function Get() {
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
            <ProjectDetail/>
            <Footer/>
        </div>
    )
}
