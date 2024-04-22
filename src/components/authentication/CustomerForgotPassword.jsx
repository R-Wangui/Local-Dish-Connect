import { Form, Button, Alert } from 'react-bootstrap';
import Vector from '../vector/Vector';
import { useState } from 'react';
import { FaCheckSquare, FaHome, FaSquare, FaSquareFull } from 'react-icons/fa'
import AuthLayout from '../layout/AuthLayout';
import Buttons from '../layout/Buttons';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter a valid email");
      return;
    } else {
      console.log('Password:', password);
      setError('');
    }

  }
  return (
    <>
      {/* <h1>Log in</h1> */}
      {/* <div id="login">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id="form" onSubmit={handleSubmit}>
          <h1 clasName="header">Forget Password</h1>
          <div>
            <p>Please sign in with your existing account</p>
          </div>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              required
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Form.Group>
          <Button className="btn" type="submit">Login</Button>
          <div id="remember-me"><span><FaCheckSquare /></span> <p>Remember me <span clasName="forgotPassword"> Forgot Password</span> </p></div>
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </Form>
        <Vector />
      </div>
      <div className="forgetpasswordImage">
        <img  src="\images\Forgot password image.png" alt="food-image" />
      </div> */}
      <AuthLayout text="Forget Password" subText="Input your email address to create a new password" showIcons={false}>
        <div>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}> EMAIL</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ background: "rgba(240, 245, 250, 1)", height: "62px", width: "100%" }}
            />
          </Form.Group>
          
          
          <div style={{ marginBottom: "20px" }}>
            <Buttons type="submit" size='lg' style={{
              width: "100%", backgroundColor: '#FDC55E',
              border: 'none',
              margin: '20px 0',
              color: "#000"
            }}>Send <img src="/images/arrow-right.svg" alt="" /> </Buttons>

          </div>

          
        </div>
      </AuthLayout>
    </>
  );
}

export default ForgotPassword;