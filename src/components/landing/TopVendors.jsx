import React from 'react'
import Cards from '../Cards'

function TopVendors() {
  return (
    <>
        <div id='topVendors'>
          <div className='vendorsTitle'>
            <h1><span>Today </span><span style={{color:"#FDC55E"}}>Top Local</span><span> <br/>Dish </span><span style={{color:"#FDC55E"}}>Vendors</span></h1>
            <h4>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"</h4>
          </div>
        </div>
        <Cards />
    </>
  )
}

export default TopVendors