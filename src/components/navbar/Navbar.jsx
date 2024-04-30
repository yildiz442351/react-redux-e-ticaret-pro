import React from 'react'
import NavbarLeft from './navbaritem/NavbarLeft'
const Navbar = () => {
  return (
    <div className='flex-justify-between my-5'>
        <NavbarLeft/>
        <NavbarRight />
    </div>
  )
}

export default Navbar