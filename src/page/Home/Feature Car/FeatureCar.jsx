import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import feature1 from '../../../assets/Fetature car/pexels-photo-1213294.webp'
import feature2 from '../../../assets/Fetature car/pexels-photo-2127037.jpeg'
import feature3 from '../../../assets/Fetature car/pexels-photo-3729464.jpeg'
import feature4 from '../../../assets/Fetature car/pexels-photo-3752169.jpeg'
import feature5 from '../../../assets/Fetature car/pexels-photo-3752194.jpeg'
import feature6 from '../../../assets/Fetature car/pexels-photo-3764984.jpeg'

const FeatureCar = () => {
    return (
        <> 
          <div className='flex flex-row justify-center items-center gap-6'>
            <h4 className='font-bold text-center text-4xl'>After Day Featurte Car :</h4>
             <div className="flex gap-5">
                    <div>
                      <span className="countdown font-mono text-4xl">
                          <span style={{"--value":15}}></span>
                      </span>
                      days
                    </div> 
                    <div>
                      <span className="countdown font-mono text-4xl">
                          <span style={{"--value":10}}></span>
                      </span>
                      hours
                    </div> 
                    <div>
                      <span className="countdown font-mono text-4xl">
                        <span style={{"--value":24}}></span>
                      </span>
                      min
                    </div> 
                    <div>
                      <span className="countdown font-mono text-4xl">
                        <span style={{"--value": 46}}></span>
                      </span>
                      sec
                    </div>
              </div>
          </div>
            {/*car start */}
         <div className='mt-5 flex flex-wrap flex-row gap-12 justify-center'>
            <div data-aos="zoom-in data-aos-delay=50 data-aos-duration=2000 border">
              <div className="card card-compact w-96 h-[380px] bg-base-100 shadow-xl">
                <figure><img src={feature1} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Honda Grace</h2>
                  <div className='flex flex-row justify-between'>
                     <p className='font-semibold'>Price: ${20000}</p>
                     <p className='font-semibold'>Avaiable-car : 05</p>
                  </div>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
               </div>
            </div>
            <div data-aos="zoom-in data-aos-delay=50 data-aos-duration=2000">
              <div className="card card-compact w-96 h-[380px]  bg-base-100 shadow-xl">
                <figure><img src={feature2} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Toyota Premio</h2>
                  <div className='flex flex-row justify-between'>
                     <p className='font-semibold'>Price: ${42000}</p>
                     <p className='font-semibold'>Avaiable-car : 01</p>
                  </div>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in data-aos-delay=50 data-aos-duration=2000">
             <div className="card card-compact w-96 h-[380px]  bg-base-100 shadow-xl">
                <figure><img src={feature5} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">JMC Car</h2>
                  <div className='flex flex-row justify-between'>
                     <p className='font-semibold'>Price: ${19000}</p>
                     <p className='font-semibold'>Avaiable-car : 04</p>
                  </div>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
               </div>
            </div>
            <div data-aos="zoom-in data-aos-delay=50 data-aos-duration=2000">
              <div className="card card-compact w-96 h-[380px]  bg-base-100 shadow-xl">
                <figure><img src={feature3} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Toyota Hiace (Brand New)</h2>
                  <div className='flex flex-row justify-between'>
                     <p className='font-semibold'>Price: ${32000}</p>
                     <p className='font-semibold'>Avaiable-car : 02</p>
                  </div>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
               </div>
            </div>
            <div data-aos="zoom-in data-aos-delay=50 data-aos-duration=2000">
             <div className="card card-compact w-96 h-[380px]  bg-base-100 shadow-xl">
                <figure><img src={feature4} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Nissan Xtrail (Brand New)</h2>
                  <div className='flex flex-row justify-between'>
                     <p className='font-semibold'>Price: ${22000}</p>
                     <p className='font-semibold'>Avaiable-car : 07</p>
                  </div>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
               </div>
            </div>
            <div data-aos="zoom-in data-aos-delay=50 data-aos-duration=2000">
              <div className="card card-compact w-96 h-[380px]  bg-base-100 shadow-xl">
                <figure><img src={feature6} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Toyota C-HR</h2>
                  <div className='flex flex-row justify-between'>
                     <p className='font-semibold'>Price: ${32000}</p>
                     <p className='font-semibold'>Avaiable-car : 02</p>
                  </div>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
        </div>
    </>
    );
};

export default FeatureCar;