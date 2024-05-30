import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing'
import VendorsPage from './pages/VendorsPage'
import WelcomePage from './components/authentication/WelcomePage';
import CustomerLogin from './components/authentication/CustomerLogin';
import CustomerSignup from './components/authentication/CustomerSignup';
import VendorLogin from './components/authentication/VendorLogin';
import VendorSignup from './components/authentication/VendorSignup';
import VendorsDashboard from './pages/VendorsDashboard';
import BusinessProfile from './pages/BusinessProfile';
import CustomerChangePassword from './components/authentication/CustomerChangePassword';
import CustomerForgotPassword from './components/authentication/CustomerForgotPassword';
import VendorForgotPassword from './components/authentication/VendorForgotPassword';
import VendorChangePassword from './components/authentication/VendorChangePassword';
import MenuManagement from './pages/MenuManagement';
import LoadingPage from './pages/LoadingPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/vendorlogin' element={<VendorLogin />}></Route>
          <Route path='/customerlogin' element={<CustomerLogin />}></Route>
          <Route path='/vendorsignup' element={<VendorSignup />}></Route>
          <Route path='/customersignup' element={<CustomerSignup />}></Route>
          <Route path='/vendorsdashboard' element={<VendorsDashboard />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='/vendorspage' element={<VendorsPage />}></Route>
          <Route path='/businessprofile' element={<BusinessProfile />}></Route>
          <Route path='/menumanagement' element={<MenuManagement />}></Route>
          <Route path='/loadingpage' element={<LoadingPage />}></Route>

        </Routes>
      </Router> 
      
    </>
  )
}

export default App