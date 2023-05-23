import React from 'react';
import { useLoaderData } from 'react-router-dom';


const AllDetailsBtn = () => {
    //
    const details = useLoaderData();
    console.log(details);
    //
    const {description, email, price, quantity, sellerName, rating, subCategory, toyname, photo, textArea} = details;

    return (
        <> 
             <div>
                <h3 className='text-center font-bold text-2xl mt-6'>Toys Car Details Page:</h3>
                <div>
                <div className="hero  bg-base-200 mt-5">
                   <div className="hero-content flex-col gap-12 lg:flex-row">
                     <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                     <div>
                        <h4 className='text-xl font-semibold'>
                            <span className='text-[#ff3c3c] font-bold'>Toy Name</span> : {toyname}
                        </h4>
                        <div className='flex flex-row gap-5'>
                            <p className='text-xl font-semibold'><span className='text-[#ff3c3c] font-bold'>Seller Name</span> : {sellerName}</p>
                            <p className='text-xl font-semibold'><span className='text-[#ff3c3c] font-bold'>Seller Email</span> : {email}</p>
                        </div>
                        <div className='flex flex-row  gap-6'>
                            <p className='text-xl font-semibold'><span className='text-[#ff3c3c] font-bold'>Category</span> : {subCategory}</p>
                            <p className='text-xl font-semibold'><span className='text-[#ff3c3c] font-bold'>Qnantity</span> : {quantity}</p>
                         </div>
                         <div className='flex flex-row gap-6'>
                             <p className='text-xl font-semibold'><span className='text-[#ff3c3c] font-bold'>Price</span> : {price}</p>
                             <p className='text-xl font-semibold'><span className='text-[#ff3c3c] font-bold'>Rating</span> : {rating}</p>
                         </div>
                         <div>
                             <p><span className='text-xl font-bold'>Product About</span>: {description}</p>
                         </div>
                         </div>
                   </div>
                  </div>
                </div>
             </div>     
        </>
    );
};

export default AllDetailsBtn;