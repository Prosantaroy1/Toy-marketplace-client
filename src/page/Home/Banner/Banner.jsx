import React from 'react';
import baner1 from '../../../assets/banner/sample-1.jpg'
import baner2 from '../../../assets/banner/sample-2.jpg'
import baner3 from '../../../assets/banner/sample-3.jpg'
import { BsDot } from "react-icons/bs";

const Banner = () => {
    return (
        <div>
             <div className="carousel w-full h-[550px]">
              <div id="item1" className="carousel-item  relative w-full">
                     <img src={baner2} className="w-full" />
                     <div className='container  absolute flex flex-col items-center mt-[190px]'>
                        <h2 className="text-[#ffff]  font-extrabold text-3xl  lg:text-5xl">
                            <span className='text-green-500 pr-4'>BD</span> 
                            <span className='text-pink-500 pr-3'>TOYS CAR</span>
                            <span className='text-fuchsia-500'>SHOP.</span>
                         </h2>
                         <p className='text-center mt-5 mb-7 font-bold text-xl text-[#fdf7f7]'>
                            New Toys Car Collection For Bangladesh. <br/>
                            Our Site All New And Old Toys Car Available for  <br/>
                            All Member.Remote Car ,Bettey Car,Slot Cars,Pull-Back Cars <br/>
                            All Categroy Car Ace..
                         </p>
                         <div className='flex flex-row gap-3'>
                         <button className="btn px-10 btn-primary">Car Details</button>
                         <button className="btn px-10 font-bold  btn-light">Add New Car</button>
                         </div>
                     </div>
                     
                   </div>
                   <div id="item2" className="carousel-item w-full relative">
                     <img src={baner1} className="w-full "/>
                     <div className='container  absolute flex flex-col items-center mt-[190px]'>
                        <h2 className="text-[#ffff]  font-extrabold text-3xl  lg:text-5xl">
                            <span className='text-green-500 pr-4'>BD</span> 
                            <span className='text-pink-500 pr-3'>TOYS CAR</span>
                            <span className='text-fuchsia-500'>SHOP.</span>
                         </h2>
                         <p className='text-center  mt-5 mb-7 font-bold text-xl text-[#0f0e0e]'>
                            New Toys Car Collection For Bangladesh. <br/>
                            Our Site All New And Old Toys Car Available for  <br/>
                            All Member.Remote Car ,Bettey Car,Slot Cars,Pull-Back Cars <br/>
                            All Categroy Car Ace..
                         </p>
                         <div className='flex flex-row gap-3'>
                         <button className="btn px-10 btn-primary">Car Details</button>
                         <button className="btn px-10 font-bold btn-outline order-12 text-red-500  btn-light">Add New Car</button>
                         </div>
                     </div>
                   </div>  
                   <div id="item3" className="carousel-item relative w-full">
                     <img src={baner3} className="w-full h-full" />
                     <div className='container  absolute flex flex-col items-center mt-[190px]'>
                        <h2 className="text-[#ffff]  font-extrabold text-3xl  lg:text-5xl">
                            <span className='text-green-500 pr-4'>BD</span> 
                            <span className='text-pink-500 pr-3'>TOYS CAR</span>
                            <span className='text-fuchsia-500'>SHOP.</span>
                         </h2>
                         <p className='text-center mt-5 mb-7 font-bold text-xl text-[#fdf7f7]'>
                            New Toys Car Collection For Bangladesh. <br/>
                            Our Site All New And Old Toys Car Available for  <br/>
                            All Member.Remote Car ,Bettey Car,Slot Cars,Pull-Back Cars <br/>
                            All Categroy Car Ace..
                         </p>
                         <div className='flex flex-row gap-3'>
                         <button className="btn px-10 btn-primary">Car Details</button>
                         <button className="btn px-10 font-bold  btn-light">Add New Car</button>
                         </div>
                     </div>
                   </div> 
                   <div id="item4" className="carousel-item relative  w-full">
                     <img src={baner1} className="w-full" />
                     <div className='container  absolute flex flex-col items-center mt-[190px]'>
                        <h2 className="text-[#ffff]  font-extrabold text-3xl  lg:text-5xl">
                            <span className='text-green-500 pr-4'>BD</span> 
                            <span className='text-pink-500 pr-3'>TOYS CAR</span>
                            <span className='text-fuchsia-500'>SHOP.</span>
                         </h2>
                         <p className='text-center mt-5 mb-7 font-bold text-xl text-[#000000]'>
                            New Toys Car Collection For Bangladesh. <br/>
                            Our Site All New And Old Toys Car Available for  <br/>
                            All Member.Remote Car ,Bettey Car,Slot Cars,Pull-Back Cars <br/>
                            All Categroy Car Ace..
                         </p>
                         <div className='flex flex-row gap-3'>
                         <button className="btn px-10 btn-primary">Car Details</button>
                         <button className="btn px-10 font-bold  btn-light">Add New Car</button>
                         </div>
                     </div>
                   </div>
                 </div> 
                 <div className="flex justify-center w-full py-2 gap-2">
                   <a href="#item1" className="btn btn-xs"><BsDot className='font-bold' /></a> 
                   <a href="#item2" className="btn btn-xs"><BsDot className='font-bold' /></a> 
                   <a href="#item3" className="btn btn-xs"><BsDot className='font-bold' /></a> 
                   <a href="#item4" className="btn btn-xs"><BsDot className='font-bold' /></a>
                 </div>
        </div>
    );
};

export default Banner;