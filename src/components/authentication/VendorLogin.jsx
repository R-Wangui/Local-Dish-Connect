import { Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { FaRegCheckSquare, FaSquare, FaSquareFull } from 'react-icons/fa'
import Buttons from '../layout/Buttons';
import { Link } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"

function VendorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    } else if (!validEmail(email)) {
      setError("Please enter a valid email address");
      return;
    } else if (password !== 'password') {
      setError("Incorrect password.Please enter the correct pass");
      return;
    } else {
      console.log('email:', email);
      console.log('Password:', password);
      setError('');
    }
  }
  const validEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const buttonStyle = {
    backgroundColor: '#FDC55E',
    border: 'none'
  };
  return (
    <>
      <AuthLayout text="Log In" downText="Welcome back! Manage your profile, update your menu, and connect with customer" subText="Log in using social networks">
        <div>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}>BUSINESS EMAIL</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ background: "rgba(240, 245, 250, 1)", height: "62px", width: "100%" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}>PASSWORD</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ background: "rgba(240, 245, 250, 1)", height: "62px", width: "100%" }}
            />
          </Form.Group>
          <div style={{display: "flex", alignItems: 'center', justifyContent: "space-between"}}>
            <div style={{display: "flex", alignItems: 'center', gap: "10px"}}>
                <span><FaRegCheckSquare /></span> 
                Remember me <span id="forgotPassword"> </span> 
            </div>
            <p style={{color: "rgba(255, 118, 34, 1)", fontSize: "14px", fontWeight: 400}}>Forgot Password</p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <Buttons type="submit" size='lg' style={{
              width: "100%", backgroundColor: '#FDC55E',
              border: 'none',
              margin: '20px 0',
              color: "#000"
            }}>LOG IN <img src="/images/arrow-right.svg" alt="" /> </Buttons>

          </div>

          <div style={{fontSize: "16px", fontWeight: 700, textAlign: "center", marginBottom: "30px" }}>
            {"Don’t"} have an account? <span style={{color: "rgba(255, 51, 38, 1)", fontWeight: 500}}>Sign up</span>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}

export default VendorLogin;