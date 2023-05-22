import React from 'react';

const TarckCar = ({category}) => {

    const {_id, price, rating, photo, toyname} = category || {};

    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl">
               <img src={photo} alt="Shoes" />
               <div className="card-body">
                 <h2 className="card-title">Name: {toyname}</h2>
                <div className='flex flex-row justify-between'>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                </div>
                <button className="btn btn-primary mt-3">Details Car</button>
               </div>
           </div>
        </div>
    );
};

export default TarckCar;