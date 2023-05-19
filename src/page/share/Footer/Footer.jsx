import React from 'react';
import logo from '../../../assets/img/logo/download.jpg'
const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer p-14 bg-base-200 text-base-content">
                 <div>
                   <img src={logo} alt="" className='w-24 rounded-full'/>
                   <p>BD Toys Car Shop<br/>Providing reliable shop since 1992</p>
                 </div> 
                 <div>
                   <span className="footer-title" >Services</span> 
                   <a className="link link-hover">Branding</a> 
                   <a className="link link-hover">Design</a> 
                   <a className="link link-hover">Marketing</a> 
                   <a className="link link-hover">Advertisement</a>
                 </div> 
                 <div>
                   <span className="footer-title">Company</span> 
                   <a className="link link-hover">About us</a> 
                   <a className="link link-hover">Contact</a> 
                   <a className="link link-hover">Jobs</a> 
                   <a className="link link-hover">Press kit</a>
                 </div> 
                 <div>
                   <span className="footer-title">Legal</span> 
                   <a className="link link-hover">Terms of use</a> 
                   <a className="link link-hover">Privacy policy</a> 
                   <a className="link link-hover">Cookie policy</a>
                 </div>
            </footer>
            <div>
             <hr className='text-[#2b2a2a] bg-base-200 font-bold'/>
             <p className='text-center p-4 bg-base-200'>Copyright © 2023 BD Toys Car Shop Inc. And New policy?</p>
            </div>
        </div>
    );
};

export default Footer;