import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>


<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
     
    </div>
    <Link  className="font-semibold text-xl text-purple-500 ms-3 " href="/">Virtual Event</Link>
  </div>
 
  <div className="navbar-end">
    <Link className="btn bg-purple-500 text-white" href="/login">Login</Link>
  </div>
</div>
    </div>
  )
}
