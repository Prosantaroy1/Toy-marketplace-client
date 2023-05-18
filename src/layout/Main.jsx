import React from 'react';
import Navber from '../page/share/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../page/share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;