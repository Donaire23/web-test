import React from 'react'
import {Link} from 'react-router-dom'
import vid from '../images/file.mp4'

function Frontsection2() {
  return (

    <div>

      <h1 className='sec2-h1 text-center'>SHOP OUR FAVORITES</h1>

      <div className='d-flex justify-content-center pt-5'>

        <div className='col-lg-4'>

          <h1 className='sec-txt'>NATURE'S ESSENCE SCENTED CANDLES</h1>
          <p className='sec-parag mt-5 mb-5'>Experience the soothing harmony of Nature's Essence Scented Candles. Our handcrafted candles are carefully infused with the purest scents inspired by the natural world, bringing the outdoors into your home. Immerse yourself in the tranquil ambiance of a forest, the invigorating ocean breeze, or the gentle bloom of a spring garden, all through the captivating fragrances of our scented candles. Crafted with love and care, these candles not only enhance your living space but also provide a moment of relaxation and connection to the wonders of nature. Discover the enchantment of our Nature's Essence Scented Candles and let their fragrant notes transport you to the heart of the great outdoors.</p>

          <Link className='section2-btn pt-2 pb-2 ps-5 pe-5 text-decoration-none'> Shop Candles </Link>

        </div>

        <div className='col-lg-4'>

          <video width="740" height="360" autoPlay muted loop>
            <source src={vid} type='video/mp4'/>
          </video>
          
        </div>

      </div>
      
    </div>

  )
}

export default Frontsection2