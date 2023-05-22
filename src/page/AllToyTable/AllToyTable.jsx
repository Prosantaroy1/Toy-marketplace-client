import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const AllToyTable = ({product}) => {
   // console.log(product)
    //
    const{_id, email, price, quantity, sellerName, rating, subCategory, textArea,toyname, photo,} = product;
    return (
        <>
              <tr>
                 <td>{sellerName}</td>
                 <td>{toyname}</td>
                 <td>{subCategory}</td>
                 <td>{price}</td>
                 <td>{quantity}</td>
                 <td>
                  {/* <button className="btn btn-ghost btn-xs">details</button>*/}
                  {/* The button to open modal */}
                   
                    <label htmlFor="my-modal-3" className="btn">open modal</label>
                
                    
                 </td>
             </tr>
        </>
    );
};

export default AllToyTable;