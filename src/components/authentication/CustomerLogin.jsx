import { Form, Alert } from 'react-bootstrap';
import Vector from '../vector/Vector';
import { useState } from 'react';
import { FaRegCheckSquare } from 'react-icons/fa';
import Buttons from '../layout/Buttons';
import { Link } from 'react-router-dom';
// import {useHistory} from 'react-router-dom';

function CustomerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const history = useHistory();

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
  // Directing the login button to go to the landingpage
  // history.push('/landing');

  // Styling for the button
  const buttonStyle = {
    backgroundColor: '#FDC55E',
    border: 'none'
  };
  return (
    <>
      <div id="login">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id="form" onSubmit={handleSubmit}>
          <h1 className="header">Log in</h1>
          <div id="social-logins">
            <p>Log in using social networks</p>
            <div id="login-icons">
              <img className="login-icon" src="\images\flat-color-icons_google.png" alt="food-image" />
              <img className="login-icon" src="\images\ri_facebook-fill.png" alt="food-image" />
              <img className="login-icon" src="\images\x 1.png" alt="food-image" />
            </div>
            <div id="or">
            <hr style={{width:"220px"}}></hr><span>Or</span><hr style={{width:"220px"}}></hr>
            </div>
          </div>
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
            <div id="remember-me">
              <span><FaRegCheckSquare /></span> 
              <p>Remember me <span id="forgotPassword"> Forgot Password</span> </p>
          </div>
          </Form.Group>
          <div className="d-grid gap-2">
            <Buttons type="submit" size='lg' style= {buttonStyle} ><Link to='/landing' style={{textDecoration: 'none', color: 'black'}}  >LOG IN <img src="/images/arrow-right.svg" alt="" /></Link></Buttons>
          </div>
          <p style={{marginTop:"20px"}}>Don't have an account? <Link to="/customersignup" style={{color:"#FF3326"}}>Sign up</Link></p>
        </Form>
        <Vector />
      </div>
      <div className="loginImage">
        <img  src="\images\Login image.png" alt="food-image" />
      </div>
      <div id="tagline">
        <h3>Eat your favourite meal at the nearest Restaurant close to  you</h3>
        <p>We connect our customers to food Vendors  in their neighbourhood</p>
      </div>

    </>
  );
}

export default CustomerLogin;