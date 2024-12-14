
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {

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