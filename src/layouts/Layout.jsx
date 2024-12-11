import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { JobsContext } from '../context-provider/JobsDataProvider';

const Layout = () => {
    const { name} = useContext(JobsContext);
    console.log(name)
    return (
        <div>
            <h1 className='text-white bg-green-300'>hello form layouts</h1>
               <Outlet/>
        </div>
    );
};

export default Layout;