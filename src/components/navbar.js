import React from 'react'
import { Link } from 'react-router-dom'



function Navbars() {

  return (

    <div className='d-flex justify-content-between align-items-center'>
      
      <div className='col-lg-3 d-flex justify-content-between  ms-5'>
        <Link className='nav-item'>SHOP</Link>
        <Link className='nav-item'>OUR STORY</Link>
        <Link className='nav-item'>SALE</Link>
        <Link className='nav-item'>CONTACT</Link>
      </div>

      <div className='pt-5 pb-5 col-lg-3'>

        <Link to='/' className='proj-title text-decoration-none fs-3 fw-bold'>Britney A.</Link>

      </div>
      
      <div className='me-5 col-lg-1 d-flex justify-content-around align-items-center'>

       
        <span className='fs-4 icon d-flex align-items-center'>
          <i class="fa-solid fa-circle-user"></i>
        </span>

        <span><Link className='nav-item text-decoration-none'>Log in</Link></span>
        

        <span>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="30px" viewBox="0 0 164.9 196.4" preserveAspectRatio="xMinYMax meet" data-hook="svg-icon-9">
            <text x="84" y="131" dy=".35em" text-anchor="middle" class="bGBBgJ jDuYHa" data-hook="items-count" font-size="100">0</text>
            <path d="M81.9 11.5c-18.8 0-34.1 16-34.1 35.7v18.1h7.8V47.2c0-15.4 11.8-27.9 26.4-27.9 14.5 0 26.4 12.5 26.4 27.9v18.1h6.6V64h1.1V47.2c-.1-19.7-15.4-35.7-34.2-35.7z"></path>
            <path d="M156.9 70.5v118H8v-118h148.9m8-8H0v134h164.9v-134z"></path>
          </svg>

        </span>
        
      </div>


    </div>



  )


}

export default Navbars