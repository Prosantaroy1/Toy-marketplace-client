import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event=>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
             <div className="hero">
                 <div className="hero-content flex-col">
                   <div className="card  w-[450px] max-w-sm shadow-2xl bg-base-100">
                    <h3 className='font-bold text-center text-3xl'>Login Please ?</h3>
                     <div className="card-body">
                       <div className="form-control">
                         <label className="label">
                           <span className="label-text">Email</span>
                         </label>
                         <input type="text" name='email' placeholder="email" className="input input-bordered" />
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
                           Have an account?  <Link to='/signin' className='font-bold text-[#4d0dfc]'>SignIn</Link>
                       </p>
                     </div>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
};

export default Login;