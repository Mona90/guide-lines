import Image from 'next/image'
import React from 'react'

function Header() {
  
  return (
    <div className='header-content'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div className="logo"><h3>Edvora</h3></div>
        <div className='login'>
          <span className='mx-2'>Dhruv Singh</span>
          <span className="user-img"><Image className="img-fluid" src='images/user.png' alt="user"/></span>
        </div>
      </div>
    </div>
  )
}

export default Header