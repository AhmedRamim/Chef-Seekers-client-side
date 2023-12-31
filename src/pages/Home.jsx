import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Banner from './Banner';
import Chefs from './Chefs';
import Newsletter from './Newsletter';
import ChefPlans from './ChefPlans';


const Home = () => {
    return (
        <div className='bg-[#01051e] '>
            <div className='md:w-[80%] mx-auto'>

            <Navbar></Navbar>
            <Banner></Banner>
            <Chefs></Chefs>
            <ChefPlans></ChefPlans>
            <Newsletter></Newsletter>
            {/* <Review></Review> */}
            </div>
            <Footer></Footer>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;