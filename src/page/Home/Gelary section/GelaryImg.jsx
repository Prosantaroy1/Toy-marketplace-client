import React from 'react';
import img1 from '../../../assets/Gelary img/11.webp'
import img2 from '../../../assets/Gelary img/12.webp'
import img3 from '../../../assets/Gelary img/13.webp'
import img4 from '../../../assets/Gelary img/14.webp'
import img5 from '../../../assets/Gelary img/15.webp'
import img6 from '../../../assets/Gelary img/16.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const GelaryImg = () => {
    return (
        <>
        <div data-aos="fade-up">
         <h3 className='text-center text-3xl font-bold mt-3 text-[#7621ff]'>Best Sell Product in 2023 years</h3>
        </div>
        {/*Gelary Photo */}
        <div className='mt-5 flex flex-wrap flex-row gap-6 justify-center'>
            <div data-aos="zoom-in data-aos-delay=50 data-aos-duration=2000">
                 <img src={img1} alt="" className='rounded  w-[400px] h-[250px]'/>
            </div>
            <div data-aos="zoom-in data-aos-delay=50 data-aos-duration=2000">
                 <img src={img2} alt="" className='rounded w-[400px] h-[250px]'/>
            </div>
            <div data-aos="zoom-in data-aos-delay=50 data-aos-duration=2000">
                 <img src={img3} alt="" className='rounded w-[400px] h-[250px]'/>
            </div>
            <div data-aos="zoom-in data-aos-delay=50 data-aos-duration=2000">
                 <img src={img4} alt="" className='rounded w-[400px] h-[250px]'/>
            </div>
            <div data-aos="zoom-in data-aos-delay=50 data-aos-duration=2000">
                 <img src={img5} alt="" className='rounded w-[400px] h-[250px]'/>
            </div>
            <div data-aos="zoom-in data-aos-delay=50 data-aos-duration=2000">
                 <img src={img6} alt="" className='rounded w-[400px] h-[250px]'/>
            </div>
        </div>
       </>
    );
};

export default GelaryImg;