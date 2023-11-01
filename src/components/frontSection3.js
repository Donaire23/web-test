import React from 'react'
import imgHeader from '../images/front-page-image2.png'
import {Link} from 'react-router-dom'

function FrontSection3() {
  return (
    <div className='section3-container d-flex justify-content-center'>

      <div className='me-5'>
       <img src={imgHeader} alt='img-header'/>
      </div>

      <div className='d-flex align-items-center me-5'>

        <div>

          <h1 className='bars-text mb-5'>PROBIOTIC CLEANSING BARS</h1>

          <p className='sec3-txt mb-5'>Introducing our Probiotic Cleansing Bars - where science meets skincare for a fresh and healthy glow. Formulated with the power of probiotics, these cleansing bars work wonders for your skin by balancing its natural microbiome. Our bars gently cleanse, nourish, and protect your skin, leaving it feeling revitalized and radiant. With a focus on promoting skin health from within, our Probiotic Cleansing Bars are the ultimate solution for a clean and rejuvenated complexion. Unlock the secret to a natural, glowing beauty with the science-backed benefits of our Probiotic Cleansing Bars.</p>

          <Link className='shopSoap-btn text-decoration-none'>Shop Soap</Link>    

        </div>
       

      </div>

      

    </div>
  )
}

export default FrontSection3