import { Form, Button, Alert } from 'react-bootstrap';
import Vector from '../vector/Vector';
import { useState } from 'react';
import { FaCheckSquare, FaHome, FaSquare, FaSquareFull } from 'react-icons/fa'
import Buttons from '../layout/Buttons';

function CustomerChangePassword() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password) {
      setError("Please enter a valid password");
      return;
    } else {
      console.log('Password:', password);
      setError('');
    }

  }
  return (
    <>
      {/* <h1>Log in</h1> */}
      <div id="login">
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
      </div>
    </>
  );
}

export default CustomerChangePassword;