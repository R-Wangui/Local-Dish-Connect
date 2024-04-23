import { Form, Button, Alert } from 'react-bootstrap';
import Vector from '../vector/Vector';
import { useState } from 'react';
import { FaCheckSquare, FaHome, FaSquare, FaSquareFull } from 'react-icons/fa'
import Buttons from '../layout/Buttons';



function CustomerSignup() {
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
      <div id="signup">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id='form' onSubmit={handleSubmit}>
          <h1 clasName="header">Sign Up</h1>
          <div id="social-logins">
            <p>Signup using social networks</p>
            <div id="login-icons">
              <img className="login-icon" src="\images\flat-color-icons_google.png" alt="food-image" />
              <img className="login-icon" src="\images\ri_facebook-fill.png" alt="food-image" />
              <img className="login-icon" src="\images\x 1.png" alt="food-image" />
            </div>
            <div id="or">
            <hr style={{width:"220px"}}></hr><span>Or</span><hr style={{width:"220px"}}></hr>
            </div>
          </div>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              required 
              type="name" 
              placeholder="John Doe" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              required 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              required
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <div className="d-grid gap-2">
              <Buttons type="submit" size='lg' style= {styleTheButton}>Signup</Buttons>
            </div>  
          </Form.Group>
          
          <p>Already have an account? <Link to="/login" style={{color:"#FF3326"}}>Login</Link></p>
        </Form>
        <Vector />
      </div>
      <div className="signupImage">
        <img src="\images\Signup image.png" alt="food-image" />
      </div>
      <div id="tagline2">
        <h3>Eat your favourite meal at the nearest Restaurant close to  you</h3>
        <p>We connect our customers to food Vendors  in their neighbourhood</p>
      </div>
    </>
  );
}

export default CustomerSignup;