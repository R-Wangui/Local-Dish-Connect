import React from 'react'
import Buttons from '../components/layout/Buttons'
import Aside from '../components/vendors dashboard/Aside'
import VendorsDashboardNavbar from '../components/vendors dashboard/VendorsDashboardNavbar'
import { FaEdit, FaPlus, FaRegTrashAlt, FaToggleOff, FaToggleOn } from 'react-icons/fa'

function MenuManagement() {
  const menuManagementBtn = {
    backgroundColor: "#006B61",
    border: "none",
    marginRight: "12px"
  }
  const menuManagement = {
    color: "#006B61",
    border: "1px solid #006B61",
    backgroundColor: "white"
  }
  return (
    <>
      <VendorsDashboardNavbar />
      <Aside />
      <div id='menuManagement'>
        <div className='menuTitle'>
          <h4>Menu Management</h4> 
          <div>
            <Buttons style={menuManagementBtn}> <FaPlus></FaPlus> Add Category</Buttons><Buttons style={menuManagement}> <FaEdit></FaEdit> Edit</Buttons>
          </div>
        </div>
        <hr  />
        <div>
          <h6 className='chooseTab'>Menu Food</h6>
          <h6>Menu Categories</h6>
        </div>
        <hr />
        <div className='menuDetails'>
          <div>
            <div className='menuEntry'>
              <h6>Rank</h6>
              <h6>Image</h6>
              <h6>Category</h6>
              <h6>Description</h6>
            </div>
            <hr />
            <div className='menuItem'>
              <p>1</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Soup</p>
              <p>1,500</p>
              <FaToggleOn className='menuOn'></FaToggleOn>
              <span ><span className='menuInactive'><FaEdit></FaEdit></span><span className='menuActive'><FaRegTrashAlt></FaRegTrashAlt></span></span>
            </div>
            <hr />
            <div className='menuItem'>
              <p>2</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Afang soup</p>
              <p>Soup</p>
              <p>2,000</p>
              <FaToggleOff className='menuOff'></FaToggleOff>
              <span><span className='menuInactive'><FaEdit></FaEdit></span><span className='menuActive'><FaRegTrashAlt></FaRegTrashAlt></span></span>
            </div>
            <hr />
            <div className='menuItem'>
              <p>3</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Pounded yam</p>
              <p>Swallow</p>
              <p>3,000</p>
              <FaToggleOff className='menuOff'></FaToggleOff>
              <span><span className='menuActive'><FaEdit></FaEdit></span><span className='menuInactive'><FaRegTrashAlt></FaRegTrashAlt></span></span>
            </div>
            <hr />
            <div className='menuItem'>
              <p>4</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Ofada Rice</p>
              <p>Rice</p>
              <p>2,500</p>
              <FaToggleOn className='menuOn'></FaToggleOn>
              <span><span className='menuActive'><FaEdit></FaEdit></span><span className='menuInactive'><FaRegTrashAlt></FaRegTrashAlt></span></span>
            </div>
            <hr />
            <div className='menuItem'>
              <p>5</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Coconut Rice</p>
              <p>Rice</p>
              <p>3,500</p>
              <FaToggleOn className='menuOn'></FaToggleOn>
              <span><span className='menuActive'><FaEdit></FaEdit></span><span className='menuInactive'><FaRegTrashAlt></FaRegTrashAlt></span></span>
            </div>
            <hr />
            <div className='menuItem'>
              <p>6</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Jollof Rice</p>
              <p>Rice</p>
              <p>2,000</p>
              <FaToggleOn className='menuOn'></FaToggleOn>
              <span><span className='menuInactive'><FaEdit></FaEdit></span><span className='menuActive'><FaRegTrashAlt></FaRegTrashAlt></span></span>
            </div>
            <hr />
            <div className='menuItem'>
              <p>7</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Ogbono soup</p>
              <p>Soup</p>
              <p>2,000</p>
              <FaToggleOff className='menuOff'></FaToggleOff>
              <span><span className='menuInactive'><FaEdit></FaEdit></span><span className='menuActive'><FaRegTrashAlt></FaRegTrashAlt></span></span>
            </div>
            <hr />
            <div className='menuItem'>
              <p>8</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Ofe Nsala</p>
              <p>Soup</p>
              <p>3,500</p>
              <FaToggleOn className='menuOn'></FaToggleOn>
              <span><span className='menuInactive'><FaEdit></FaEdit></span><span className='menuActive'><FaRegTrashAlt></FaRegTrashAlt></span></span>
            </div>
            <hr />
            <div className='menuItem'>
              <p>9</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Banga Soup</p>
              <p>Soup</p>
              <p>2,500</p>
              <FaToggleOn className='menuOn'></FaToggleOn>
              <span><span className='menuInactive'><FaEdit></FaEdit></span><span className='menuActive'><FaRegTrashAlt></FaRegTrashAlt></span></span>
            </div>
            <hr />
            <div className='menuItem'>
              <p>10</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Eba</p>
              <p>Swallow</p>
              <p>2,500</p>
              <FaToggleOn className='menuOn'></FaToggleOn>
              <span><span className='menuInactive'><FaEdit></FaEdit></span><span className='menuActive'><FaRegTrashAlt></FaRegTrashAlt></span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuManagement