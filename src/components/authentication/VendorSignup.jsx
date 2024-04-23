import { Form, Button, Alert } from 'react-bootstrap';
import Vector from '../vector/Vector';
import { useState } from 'react';
import { FaCheckSquare, FaHome, FaSquare, FaSquareFull } from 'react-icons/fa'
import Buttons from '../layout/Buttons';
import { Link } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"

function VendorSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('')
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      setError("Please enter username, email and password");
      return;
    } else if (name !== available) {
      setError("Username not available");
      return;
    } else if (!validEmail(email)) {
      setError("Please enter a valid email address");
      return;
    } else {
      console.log('name:', name);
      console.log('email:', email);
      console.log('Password:', password);
      setError('');
    }

  }

  const styleTheButton = {
    backgroundColor: '#FDC55E',
    border: 'none',
    marginTop: '60px',
    width: '500px'
  }
  return (
    <>
      <AuthLayout rightImage={"/images/woman.svg"} text="Sign up" downText="Showcase your delicious food and connect with a vibrant community of local customers." subText="Sign up using social networks">
        <div>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}>Business Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ background: "rgba(240, 245, 250, 1)", height: "62px", width: "100%" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}>Email address</Form.Label>
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
            <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ background: "rgba(240, 245, 250, 1)", height: "62px", width: "100%" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}>Retype Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ background: "rgba(240, 245, 250, 1)", height: "62px", width: "100%" }}
            />

          </Form.Group>
          <div style={{marginBottom: "20px"}}>
            <Buttons type="submit" size='lg' style={{
              width: "100%", backgroundColor: '#FDC55E',
              border: 'none',
              margin: '20px 0',
              color: "#000"
            }}>Signup <img src="/images/arrow-right.svg" alt="" /> </Buttons>

            <h5 style={{textAlign: 'center', fontSize: "20px", fontWeight: 500, lineHeight: "30px"}}>CONTINUE A GUEST</h5>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}

export default VendorSignup;