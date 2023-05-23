import React from 'react';
import Banner from '../Banner/Banner';
import GelaryImg from '../Gelary section/GelaryImg';
import ClientSection from '../ClientSection/ClientSection';
import Category from '../Category Car/Category';
import FeatureCar from '../Feature Car/FeatureCar';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='container mx-auto'>
              <GelaryImg/>
            </div>
            <Category/>
            <div className='mt-10'>
             <FeatureCar/>
            </div>
            <div className='container mx-auto mb-12'>
              <ClientSection/>
            </div>
             
        </div>
    );
};

export default Home;