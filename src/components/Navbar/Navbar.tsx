"use client";

import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className='max-w-[1500px] mx-auto'>
    <div className="navbar  bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
         
        </div>
       
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
        <Link href="/" className="font-semibold text-lg text-purple-500">Home</Link></li>
          <li> <Link href="/eventspage" className="font-semibold text-lg text-purple-500">Events</Link> </li> 
           <li>

        </li>
       
          </ul>
        
      </div>
      <Link href="/" className="btn btn-ghost text-xl">Virtual Event</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
        <Link href="/" className="font-semibold text-lg text-purple-500">Home</Link></li>
          <li> <Link href="/eventspage" className="font-semibold text-lg text-purple-500">Events</Link> </li> 
          
        {user?(
        <li> <Link href="/addevent" className="font-semibold text-lg text-purple-500">Add Event</Link></li>

        ):(
          <li></li>
        )
        }
       
      </ul>
    </div>
    <div className="navbar-end me-3">
    <div className="flex items-center space-x-4">
            {user ? (
              <div className="dropdown dropdown-end">
                <button
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10   rounded-full overflow-hidden">
                    <img
                      src={user?.photoURL || "https://i.ibb.co/Sv7N6ky/Screenshot-9.jpg"}
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>

                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box ">
        
        <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
        
        
      </ul>
                
              </div>
            ) : (
              <Link href="/login" className="btn bg-purple-500 text-white">Login</Link>
            )}
          </div>
        </div>

    </div>
    </div>

  
  );
}
