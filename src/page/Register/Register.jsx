import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleLogin = event=>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const photo = from.photo.value;
        const password = from.password.value;
        const newUser = {
            UserName: name,
             email, 
             photo,
             password
          }
          console.log(newUser)
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
             <div className="hero">
                 <div className="hero-content flex-col">
                   <div className="card  w-[450px] max-w-sm shadow-2xl bg-base-100">
                    <h3 className=' mt-3 font-bold text-center text-[#ff2121] text-3xl'>Created A Acoount?</h3>
                     <div className="card-body">
                     <div className="form-control">
                         <label className="label">
                           <span className="label-text">Name</span>
                         </label>
                         <input type="text" name='name' placeholder="name" className="input input-bordered" />
                       </div>
                       <div className="form-control">
                         <label className="label">
                           <span className="label-text">Email</span>
                         </label>
                         <input type="text" name='email' placeholder="email" className="input input-bordered" />
                       </div>
                       <div className="form-control">
                         <label className="label">
                           <span className="label-text">Photo URl</span>
                         </label>
                         <input type="text" name='photo' placeholder="photo Url" className="input input-bordered" />
                       </div>
                       <div className="form-control">
                         <label className="label">
                           <span className="label-text">Password</span>
                         </label>
                         <input type="text" name='password' placeholder="password" className="input input-bordered" />
                       </div>
                       <div className="form-control mt-6">
                         <button className="btn btn-primary">Login</button>
                       </div>
                       <p className='text-center font-semibold'>
                           Already Have A Acoount?
                          <Link to='/login' className='font-bold pl-3 text-[#4d0dfc]'>Login</Link>
                       </p>
                       <p className='text-center font-semibold text-[#fc0dfc]'>
                          Or Sign In with
                       </p>
                     </div>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
};

export default Register;