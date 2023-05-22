import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyTable from '../AllToyTable/AllToyTable';

const AllToys = () => {
    ///
    const products = useLoaderData();
   // console.log(products);
  // const{_id, email, price, quantity, sellerName, rating, subCategory, textArea,toyname, photo,} = products;
    
    return (
        <div>
            <h4 className='text-center font-bold text-2xl mt-4'>All Toys Car Products</h4>
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
                                products.map(product=> <AllToyTable
                                key={product._id}
                                product={product}
                                ></AllToyTable>)
                            }
                          
                       </tbody>
                     </table>
                 </div>
            </div>
        </div>
    );
};

export default AllToys;
{/*
 <tr>
                           <th>1</th>
                           <td>{sellerName}</td>
                           <td>{toyname}</td>
                           <td>{subCategory}</td>
                           <td>{price}</td>
                           <td>{quantity}</td>
                           <td>
                             <button className="btn btn-ghost btn-xs">details</button>
                           </td>
                         </tr>


 */}