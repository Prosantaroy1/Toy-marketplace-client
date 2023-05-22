import React from 'react';
import Banner from '../Banner/Banner';
import GelaryImg from '../Gelary section/GelaryImg';
import ClientSection from '../ClientSection/ClientSection';
import Category from '../Category Car/Category';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='container mx-auto'>
              <GelaryImg/>
            </div>
            <Category/>
            <div className='container mx-auto'>
              <ClientSection/>
            </div>
           
        </div>
    );
};

export default Home;