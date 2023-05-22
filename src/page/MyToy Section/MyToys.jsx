import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyCar from '../MyCar/MyCar';

const MyToys = () => {
    //user
    const{user} = useContext(AuthContext);
    //state
    const [mycars, setMycars] = useState([]);
    //
    const url= `http://localhost:5000/product?email=${user.email}`;
    //
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=>{  
            setMycars(data)
        })
    },[])
    console.log(mycars)
    
    return (
        <div>
            <h3 className='mt-3 text-center font-bold text-2xl'>My New Car Idea Product</h3>
            <div>
            <div className="overflow-x-auto container mx-auto mt-3">
                     <table className="table w-full">
                       {/* head */}
                       <thead>
                         <tr>
                           
                           <th>Seller Name</th>
                           <th>Toy Name</th>
                           <th>Sub-category</th>
                           <th>Price</th>
                           <th>Quantity</th>
                           <th></th>
                         </tr>
                       </thead>
                       <tbody>
                          {
                            mycars.map(mycar => <MyCar
                             key={mycar._id}
                             mycar={mycar}
                            ></MyCar>)
                          }
                          
                       </tbody>
                     </table>
                 </div>
            </div>
        </div>
    );
};

export default MyToys;