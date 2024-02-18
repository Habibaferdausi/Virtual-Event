"use client";

import Link from 'next/link';
import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';


export default function Navbar() {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
console.log(user);

  return (
    <div className="bg-base-100">
      <nav className="navbar py-4 lg:px-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="lg:hidden">
              <button tabIndex={0} role="button" className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </button>
            </div>
            <Link href="/" className="font-semibold text-xl text-purple-500">Virtual Event</Link>
          </div>

          <div className="hidden lg:flex lg:space-x-4">
            <Link href="/" className="font-semibold text-lg text-purple-500">Home</Link>
            <Link href="/eventspage" className="font-semibold text-lg text-purple-500">Events</Link>
            <Link href="/event" className="font-semibold text-lg text-purple-500">Add Event</Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="dropdown dropdown-end">
                <button tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                 <img src={
                        user?.
                        photoURL ||
                      "https://i.ibb.co/Sv7N6ky/Screenshot-9.jpg"
                    }/>
                  </div>
                </button>
                <ul className="menu menu-box mt-3 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <button  onClick={handleLogOut}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link href="/login" className="btn bg-purple-500 text-white">Login</Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
