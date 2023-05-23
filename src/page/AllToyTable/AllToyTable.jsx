import React, { useContext, useState } from 'react';
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
                 <Link to={`/detalisBtn/${_id}`}>
                    <button  className="btn btn-primary mt-3">Details</button>
                 </Link>

                 </td>
             </tr>
        </>
    );
};

export default AllToyTable;