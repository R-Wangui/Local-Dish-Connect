import { Form, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Vector from '../vector/Vector';
import Buttons from '../layout/Buttons';

function CustomerSignup() {
  // use useState hook to set the email, password and throw error incase of an error
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const apiURL = import.meta.env.VITE_API_ENDPOINT;

  // Event handler function for the form so it submits before refreshing the page
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      // This condition checks that you enter a valid email and password
      setError("Please enter username, email and password");
      return;
    } else if (!validEmail(email)) {
      setError("Please enter a valid email address");
      return;
    } else {
      // Send the name, email and password saved in memory to the server for registration
      fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        }),
      })
      .then(response => response.json())
      .then(data => {
        // If user is registered successfully, fetch user data
        if (data.success) {
          fetchUserData(email);
        } else {
          setError(data.message);
        }
      })
      .catch((err) => console.log(err));
    }
  };

  // Fetch user data after successful registration
  const fetchUserData = (email) => {
    const getUserDataURL = `https://dishcorner.onrender.com/api/v1/auth/register${email}`;
    fetch(getUserDataURL)
      .then((response) => response.json())
      .then((data) => {
        setName(data.firstName);
        setEmail(data.email);
        setPassword(data.password);
      })
      .catch((err) => console.log(err));
  };
    
  // validate the email so the user has to input a correct email and in the right formart
  const validEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const styleTheButton = {
    backgroundColor: '#FDC55E',
    border: 'none',
    marginTop: '60px',
    width: '500px'
  };

  return (
    <>
      <div id="signup">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id='form' onSubmit={handleSubmit}>
          <h1 className="header">Sign Up</h1>
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
              <Buttons type="submit" size='lg' style= {styleTheButton}> Sign up
                {/* <Link to='/landing' style={{textDecoration: 'none', color: 'black'}}  >SIGN UP <img src="/images/arrow-right.svg" alt="" /></Link> */}
              </Buttons>
            </div>  
          </Form.Group>
          
          <p>Already have an account? <Link to="/customerlogin" style={{color:"#FF3326"}}>Login</Link></p>
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
