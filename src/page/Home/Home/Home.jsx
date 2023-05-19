import React from 'react';
import Banner from '../Banner/Banner';
import GelaryImg from '../Gelary section/GelaryImg';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='container mx-auto'>
              <GelaryImg/>
            </div>
        </div>
    );
};

export default Home;