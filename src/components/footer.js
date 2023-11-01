import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {

  return (

    <div className='footer-container  d-flex justify-content-around pt-5 pb-5'>
      
      <div>
      <Link to='/' className='proj-title text-decoration-none fs-3 fw-bold'>Britney A.</Link>
      </div>

      <div>

        <h3 className='mb-4'>SHOP</h3>

       
          <p>CANDLES</p>
          <p>SOAPS</p>
          <p>SALE</p>
       

      </div>

      <div>
          <h3 className='mb-4'>Britney A.</h3>
          <p>OUR STORY</p>
          <p>CONTACT US</p>
          <p>TERMS & CONDITIONS</p>
          <p>PRIVACY POLICY</p>
          <p>SHIPPING & RETURNS</p>
      </div>
      
    </div>


  )
}

export default Footer