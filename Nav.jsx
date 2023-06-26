import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='w-screen h-32 bg-black'>
        <ul className='flex flex-row px-10 py-2 justify-center align-center '>
             <li className='text-blue-100 font-bold text-2x1 px-10 border rounded-r-full'> <Link to ='/Home'>HOME</Link></li>
            <li className='text-pink-100 font-bold text-2x1 px-10 border rounded-l-full'> <Link to='/AboutUs'>ABOUT US</Link> </li>
            <li className='text-yellow-100 font-bold text-2x1 px-10 border rounded-r-full'><Link to='/Blog'>BLOG</Link></li>
            <li className='text-green-100 font-bold text-2x1 px-10 border rounded-l-full'><Link to='/Service'>SERVICES</Link></li>
        </ul>
       
    </div>
  )
}

export default Nav