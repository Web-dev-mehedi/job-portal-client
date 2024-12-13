import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { JobsContext } from '../context-provider/JobsDataProvider';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
    const { name} = useContext(JobsContext);
    console.log(name)
    return (
        <div className='container mx-auto'>
             <Header/>
            {/*  */}
               <section className='py-24 bg-gray-100'>
                 <Outlet/>
               </section>
               {/* oot */}
               <Footer/>
        </div>
    );
};

export default Layout;