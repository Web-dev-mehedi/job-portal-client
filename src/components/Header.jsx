import React from 'react';
import Navbar from './Navber';
import Hero from './Hero';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation()
    return (
        <div className='hero-banner bg-[#272727bb] bg-blend-overlay'>
             <Navbar/>
             {/* hero */}
            {  location.pathname ==="/"? "" :
               <Hero title={''} path={location.pathname}/>
            }
        </div>
    );
};

export default Header;