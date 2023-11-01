
import React from 'react'
import imgHeader from '../images/front-page-image1.png';

function FrontHeader() {
  return (

    <div className='ps-5 pe-5 mt-5 container-fluid'>

      <img src={imgHeader} alt='img-header' className='ms-5 mt-5 front-header-img'/>

      <div className='header-text'>

        <h3>HANDCRAFTED ORGANIC SOAPS & CANDLES</h3>
        <h1 className='sub-text'>JUST LIKE NATURE INTENDED</h1>
        <button className='frontHeader-btn'>Shop Now</button>

      </div>

    </div>

  )
}

export default FrontHeader