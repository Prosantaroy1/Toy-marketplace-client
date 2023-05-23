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
   // console.log(mycars)
   //deleted car
   const handleDelete = id =>{
     // console.log(id)
     const process = confirm('Are your sure deleted !!')
     if(process){
        fetch(`http://localhost:5000/product/${id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            alert('Deleted Your Successful');
            const remaining = mycars.filter(car => car._id !==id);
            setMycars(remaining);
        })
     }
   }
    
    return (
        <div>
            <h3 className='mt-3 text-center font-bold text-2xl'>My New Car Idea Product</h3>
            <div>
            <div className="overflow-x-auto container mx-auto mt-3">
                     <table className="table w-full">
                       {/* head */}
                       <thead>
                        <tr>
                            <th>
                              <label>
                                <input type="checkbox" className="checkbox" />
                              </label>
                            </th>
                            <th>Photo</th>
                            <th>Name & category</th>
                            <th>Seller name & Email</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Rating</th>
                            <th></th>
                            <th></th>
                          </tr>
                       </thead>
                       <tbody>
                          {
                            mycars.map(mycar => <MyCar
                             key={mycar._id}
                             mycar={mycar}
                             handleDelete={handleDelete}
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