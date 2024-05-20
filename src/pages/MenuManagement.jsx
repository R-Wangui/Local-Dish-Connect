import React from 'react'
import Buttons from '../components/layout/Buttons'
import Aside from '../components/vendors dashboard/Aside'
import VendorsDashboardNavbar from '../components/vendors dashboard/VendorsDashboardNavbar'

function MenuManagement() {
  const menuManagementBtn = {
    backgroundColor: "#006B61",
    border: "none"
  }
  return (
    <>
      <VendorsDashboardNavbar />
      <Aside />
      <div id='menuManagement'>
        <div className='menuTitle'>
          <h4>Menu Management</h4> 
          <Buttons style={menuManagementBtn}>Add Food</Buttons><Buttons style={menuManagementBtn}>Edit</Buttons>
        </div>
        {/* <div>
            <h4>Menu Food</h4>
            <h4>Menu Categories</h4>
          </div>
          <div>
            
        </div> */}
      </div>
    </>
  )
}

export default MenuManagement