import React from 'react';


const MyCar = ({mycar}) => {
    const {price, toyname, email, sellerName, rating, quantity, _id, subCategory, photo, description} = mycar;
    console.log(mycar);
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

export default MyCar;