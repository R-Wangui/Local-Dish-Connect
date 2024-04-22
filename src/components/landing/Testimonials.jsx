import React from 'react'
import { FaStar } from 'react-icons/fa'

function Testimonial() {
  return (
    <>
        <div id='testimonials'>
          <h1 className='testimonial-header'><span>Testi</span><span style={{color:"#FDC55E"}}>monial</span></h1>
          <h2 className='testimonial-h2'>What Our Valuable Customers Say About Us</h2>
          <div id="testimony-container">
            <img src="\images\Testimonial.png" alt="reviewer-profile" className="testimony-image" />
            <div className='testimonyand-tag'>
              <p className="testimony">i just look how fast the delivery gets to me, i am inpatient with my best snaps coming from savy bakery</p>
              <p className="user-tag" >@Jeremy<span style={{marginLeft:"80px"}}><FaStar /></span></p>
            </div> 
          </div>
          <h4 className='more-reviews'><span>See all </span><span style={{color:"#FDC55E"}}>reviews</span><span> by our </span><span style={{color:"#FDC55E"}}>customers</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
            <path d="M13.9645 10.6356L23.8639 10.6356M23.8639 10.6356L23.8639 20.5351M23.8639 10.6356L11.136 23.3636" stroke="#FDC55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></span>
          </h4>
        </div>
        
    </>
  )
}

export default Testimonial