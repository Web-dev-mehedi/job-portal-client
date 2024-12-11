import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <h1 className='text-white bg-green-300'>hello form layouts</h1>
               <Outlet/>
        </div>
    );
};

export default Layout;