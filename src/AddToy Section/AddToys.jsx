import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const AddToys = () => {
   const {user} = useContext(AuthContext);
  
    const handleAddProduct = event=>{
        //
        event.preventDefault();
        const from =event.target;
        const toyname = from.toyName.value;
        const sellerName = from.sellerName.value;
        const email = from.email.value;
        const rating = from.rating.value;
        const price = from.price.value;
        const quantity = from.quantity.value;
        const subCategory= from.subCategory.value;
        const photo = from.photo.value;
        const textArea = from.textArea.value;
        const newProducts ={
            toyname,
            sellerName,
            email,
            rating,
            price,
            quantity,
            subCategory,
            photo,
            textArea,
        }
        //console.log(newProducts)  
        //Post Data Server
        fetch(`http://localhost:5000/product`, {
            method: 'POST',
            headers:{
             'content-type': 'application/json'
            },
            body: JSON.stringify(newProducts)
        })
        .then(res => res.json())
        .then(data => {
             console.log(data)
        })       
    }

    return (
        <div>
            <h4 className='text-center font-bold text-2xl mb-4 mt-4'>Our Toys Car Add Please !</h4>
            <div>
                  <form onSubmit={handleAddProduct}>
                   <div className="w-2/3 lg:w-3/4 mx-auto border border-rose-400 rounded shadow-xl">
                       <div className=" flex-col">
                         <div>
                           <div className="card-body">
                            {/*name */}
                            <div className="form-control">
                               <label className="label">
                                 <span className="label-text">Toy Name</span>
                               </label>
                               <input type="text" name='toyName' required placeholder="name" className="input input-bordered" />
                             </div>
                             {/* seller name */}
                             <div className="form-control">
                               <label className="label">
                                 <span className="label-text">Seller Name</span>
                               </label>
                               <input type="text" defaultValue={user?.displayName} name='sellerName' required  className="input input-bordered" />
                             </div>
            
                             {/* email and rating */}
                              <div className='flex flex-row flex-wrap gap-2'>
                                   <div className="form-control lg:w-1/2">
                                    <label className="label">
                                      <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" defaultValue={user?.email} name='email' required placeholder="email" className="input input-bordered" />
                                   </div>
                                    {/*  rating */}
                                   <div className="form-control lg:w-1/3">
                                    <label className="label">
                                      <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" name='rating' required placeholder="rating" className="input input-bordered" />
                                   </div>
                              </div>
                               {/*  */}
                             <div className='flex flex-row flex-wrap gap-2'>
                                   {/* Price name */}
                                   <div className="form-control lg:w-1/3">
                                     <label className="label">
                                       <span className="label-text">Price</span>
                                     </label>
                                     <input type="text"  name='price' required placeholder="name" className="input input-bordered" />
                                   </div>
                                   {/*quantity  name */}
                                   <div className="form-control lg:w-1/3">
                                     <label className="label">
                                       <span className="label-text"> Quantity</span>
                                     </label>
                                     <input type="text" name='quantity' required placeholder="name" className="input input-bordered" />
                                   </div>
                                   {/*option name */}
                                   <div className="form-control lg:w-1/4">
                                     <label className="label">
                                       <span className="label-text">sub-Category</span>
                                     </label>
                                     <select name='subCategory' className="select select-bordered w-full max-w-xs">
                                        <option  selected> truck</option>
                                        <option>sports car</option>
                                        <option>regular car</option>
                                      </select>
                                   </div>
                                  
                             </div>
                               {/* PhotoUrl */}
                             <div className="form-control">
                               <label className="label">
                                 <span className="label-text">Photo URl</span>
                               </label>
                               <input type="text" name='photo' required placeholder="photo Url" className="input input-bordered" />
                             </div>
                               {/* email */}
                             <div className="form-control">
                               <label className="label">
                                 <span className="label-text">Description</span>
                               </label>
                               <textarea placeholder="Bio" name='textArea' className="textarea textarea-bordered textarea-md w-full " ></textarea>
                             </div>
                             <div className="form-control mt-6">
                               <button className="btn btn-primary">Add New Car</button>
                             </div>
                           </div>
                      </div>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;