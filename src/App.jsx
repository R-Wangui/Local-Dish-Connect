import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing'
import VendorsPage from './pages/VendorsPage'
import WelcomePage from './components/authentication/WelcomePage'
import CustomerLogin from './components/authentication/CustomerLogin';
import VendorLogin from './components/authentication/VendorLogin';
import VendorSignup from './components/authentication/VendorSignup';
import CustomerChangePassword from './components/authentication/CustomerChangePassword';
import CustomerForgotPassword from './components/authentication/CustomerForgotPassword';
import VendorForgotPassword from './components/authentication/VendorForgotPassword';
import VendorChangePassword from './components/authentication/VendorChangePassword';


function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path='/customerlogin' element={<CustomerLogin />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </Router> */}
      {/* <CustomerChangePassword /> */}
      <VendorChangePassword />
    </>
  )
}

export default App