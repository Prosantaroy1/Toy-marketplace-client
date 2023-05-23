import React from 'react';
import { Link } from 'react-router-dom';


const MyCar = ({mycar, handleDelete}) => {
    const {price, toyname, email, sellerName, rating, quantity, _id, subCategory, photo} = mycar;
   // console.log(mycar);
    return (
        <>
             <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle  h-20">
                          <img src={photo} className='w-20' />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                   <div>
                        <div className="font-bold">{toyname}</div>
                        <div className="text-sm opacity-50">{subCategory}</div>
                      </div>
                  </td>
                  <td>
                    <div>
                        <div className="font-bold">{sellerName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                      </div>
                  </td>
                  <td>{price}</td>
                  <td>{quantity}</td>
                  <td>{rating}</td>
                  <th>
                     <Link>
                        <button onClick={()=> handleDelete(_id)} className="btn btn-active  btn-primary">Deleted</button>
                     </Link>
                  </th>
                  <th>
                      <button className="btn btn-active btn-accent">Update</button>
                  </th>
                </tr>
           </>
    );
};

export default MyCar;