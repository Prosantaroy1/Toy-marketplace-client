import React from 'react';
import { Link } from 'react-router-dom';

const TarckCar = ({category}) => {

    const {_id, price, rating, photo, toyname} = category;
    //
    

    return (
        <div>
             <div className="card w-96  bg-base-100 shadow-xl">
               <img src={photo} alt="Shoes"  className='h-[200px]'/>
               <div className="card-body">
                 <h2 className="card-title">Name: {toyname}</h2>
                <div className='flex flex-row justify-between'>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                </div>
                <Link to={`/detalisBtn/${_id}`}>
                   <button  className="btn btn-primary mt-3">Details Car</button>
                </Link>
               </div>
           </div>
        </div>
    );
};

export default TarckCar;