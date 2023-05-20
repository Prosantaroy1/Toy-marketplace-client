import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo/download.jpg'
import { AuthContext } from '../../../provider/AuthProvider';

const Navber = () => {
     //logout
     const {logout, user} = useContext(AuthContext);

     //logout
     const handleLogout=()=>{
        logout()
         .then()
         .catch(error=>{
            console.log(error)
         })
     }

    const navItems = <div className='flex flex-col lg:flex-row gap-4 font-semibold'>
        <li><Link>Home</Link></li>
        <li><Link to='/alltoys'>All Toys</Link></li>
        {
          user && <li><Link to='/mytoys'>My Toys</Link></li>
        }
        <li><Link to='/addToy'>Add A Toys</Link></li>
        <li><Link to='/blog'>Blogs</Link></li> 
    </div>
    
    return (
        <div>
             <div className="navbar bg-green-100">
                  <div className="navbar-start">
                    <div className="dropdown">
                      <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </label>
                      <ul tabIndex={0} className="menu gap-3 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                         {navItems}
                      </ul>
                    </div>
                    <Link className="flex items-center justify-center text-xl gap-2">
                        <img src={logo} alt="logo" className='w-14 rounded-full'/>
                         BD Toys Car
                        </Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3">
                       {navItems}
                    </ul>
                  </div>
                  <div className="navbar-end">
                        {user && <div className=" me-5">
                          <img src={user?.photoURL} title={user?.displayName}  className="rounded-full"
                            style={{width: '50px', height: '50px'}}/>
                        </div>}
                        {
                          user? 
                            <button onClick={handleLogout} className="btn btn-outline btn-secondary">LogOut</button> :
                          <Link to='/login'>
                          <button className="btn btn-outline btn-secondary">Login</button>
                         </Link> 
                         
                        }
                  </div>
             </div>
        </div>
    );
};

export default Navber;