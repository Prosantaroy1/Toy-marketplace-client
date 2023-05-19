import React from 'react';
import Marquee from "react-fast-marquee";
import {  BsFacebook, BsGoogle, BsPlayBtnFill } from "react-icons/bs";
import client1 from '../../../assets/ClientImg/member-1.png'
import client2 from '../../../assets/ClientImg/member-2.png'
import client3 from '../../../assets/ClientImg/member-3.png'
import client4 from '../../../assets/ClientImg/member-4.png'
import client5 from '../../../assets/ClientImg/member-5.png'
import client6 from '../../../assets/ClientImg/member-6.png'



const ClientSection = () => {
    return (
        <div className='mt-8'>
            <h3 className=' mt-4 mb-4 hover:text-[#4cfc20] hover:text-4xl text-3xl text-center font-bold text-[#000000]'>
                Best Our Client :
            </h3>
            <Marquee>
                <div className='flex flex-row gap-7 pr-4'>
                   <div className="card w-[250px] items-center bg-base-100 shadow-xl">      
                     <img src={client1} alt="Shoes" className="w-24 rounded-full mt-4" /> 
                     <h2 className="text-center mt-3 mb-2 text-2xl font-bold">Mrs. Jorina</h2>
                     <p className='font-semibold mb-3'>Teacher Of Collage</p>
                     <div className='flex flex-row justify-between gap-4'>
                        <div className='flex flex-row gap-4 mb-4'>
                            <BsFacebook/>
                            <BsGoogle/>
                            <BsPlayBtnFill/>
                        </div>
                     </div>
                    </div>
                   <div className="card w-[250px] items-center bg-base-100 shadow-xl">      
                     <img src={client2} alt="Shoes" className="w-24 rounded-full mt-4" /> 
                     <h2 className="text-center mt-3 mb-2 text-2xl font-bold">Shamim Hosen</h2>
                     <p className='font-semibold mb-3'>Fronted Dev.</p>
                     <div className='flex flex-row justify-between gap-4'>
                        <div className='flex flex-row gap-4 mb-4'>
                            <BsFacebook/>
                            <BsGoogle/>
                            <BsPlayBtnFill/>
                        </div>
                     </div>
                    </div>
                   <div className="card w-[250px] items-center bg-base-100 shadow-xl">      
                     <img src={client3} alt="Shoes" className="w-24 rounded-full mt-4" /> 
                     <h2 className="text-center mt-3 mb-2 text-2xl font-bold">Dipa Odhikari</h2>
                     <p className='font-semibold mb-3'>Bsc Engineer </p>
                     <div className='flex flex-row justify-between gap-4'>
                        <div className='flex flex-row gap-4 mb-4'>
                            <BsFacebook/>
                            <BsGoogle/>
                            <BsPlayBtnFill/>
                        </div>
                     </div>
                    </div>
                   <div className="card w-[250px] items-center bg-base-100 shadow-xl">      
                     <img src={client4} alt="Shoes" className="w-24 rounded-full mt-4" /> 
                     <h2 className="text-center mt-3 mb-2 text-2xl font-bold">Mr. Susil Sen</h2>
                     <p className='font-semibold mb-3'>MBBS Doctor </p>
                     <div className='flex flex-row justify-between gap-4'>
                        <div className='flex flex-row gap-4 mb-4'>
                            <BsFacebook/>
                            <BsGoogle/>
                            <BsPlayBtnFill/>
                        </div>
                     </div>
                    </div>
                   <div className="card w-[250px] items-center bg-base-100 shadow-xl">      
                     <img src={client5} alt="Shoes" className="w-24 rounded-full mt-4" /> 
                     <h2 className="text-center mt-3 mb-2 text-2xl font-bold">Dipok Roy</h2>
                     <p className='font-semibold mb-3'>Digital Marketer.</p>
                     <div className='flex flex-row justify-between gap-4'>
                        <div className='flex flex-row gap-4 mb-4'>
                            <BsFacebook/>
                            <BsGoogle/>
                            <BsPlayBtnFill/>
                        </div>
                     </div>
                    </div>
                   <div className="card w-[250px] items-center bg-base-100 shadow-xl">      
                     <img src={client6} alt="Shoes" className="w-24 rounded-full mt-4" /> 
                     <h2 className="text-center mt-3 mb-2 text-2xl font-bold">Mrs. Mina Hasda</h2>
                     <p className='font-semibold mb-3'>App Devloper</p>
                     <div className='flex flex-row justify-between gap-4'>
                        <div className='flex flex-row gap-4 mb-4'>
                            <BsFacebook/>
                            <BsGoogle/>
                            <BsPlayBtnFill/>
                        </div>
                     </div>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default ClientSection;