import { useState, useEffect } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Buttons from "../layout/Buttons";
import Vector from "../vector/Vector";
import axios from "axios";
import LoadingPage from "../../pages/LoadingPage";


function CustomerSignup() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null); // State to store submitted data
  const [loading, setLoading] = useState(false)

  
  const apiUrl = "https://dishcorner.onrender.com/api/v1/auth/register";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    // Set loading state to true at the beginning of the function
    setLoading(true);
  
    if (!email || !password || !firstname || !lastname) {
      setError("Please enter all the required fields");
      setLoading(false); // Reset loading state
      return;
    } else if (!validEmail(email)) {
      setError("Please enter a valid email address");
      setLoading(false); // Reset loading state
      return;
    }
  
    try {
      // Log values to debug
      console.log("Submitting data:", {
        firstname,
        lastname,
        email,
        password,
      });
  
      const response = await axios.post(apiUrl, {
        firstname,
        lastname,
        email,
        password,
      });
      setSubmittedData(response.data);
  
      // Delay navigation and state reset by 3 seconds
      setTimeout(() => {
        setLoading(false); // Reset loading state
      }, 5000);
  
    } catch (error) {
      console.error("An error occurred:", error.response || error.message);
      setError("An error occurred. Please try again.");
  
      // Ensure loading state is reset after 3 seconds even in case of error
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };
  

  const validEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  if (loading) {
    return <LoadingPage />; // Render the Loading page component if loading
  }

  const styleTheButton = {
    backgroundColor: "#FDC55E",
    border: "none",
    marginTop: "60px",
    width: "500px",
  };

  return (
    <>
      <div id="signup">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id="form" onSubmit={handleSubmit}>
          <h1 className="header">Sign Up</h1>
          <div id="social-logins">
            <p>Signup using social networks</p>
            <div id="login-icons">
              <img
                className="login-icon"
                src="\images\flat-color-icons_google.png"
                alt="food-image"
              />
              <img
                className="login-icon"
                src="\images\ri_facebook-fill.png"
                alt="food-image"
              />
              <img
                className="login-icon"
                src="\images\x 1.png"
                alt="food-image"
              />
            </div>
            <div id="or">
              <hr style={{ width: "220px" }}></hr>
              <span>Or</span>
              <hr style={{ width: "220px" }}></hr>
            </div>
          </div>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="John"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Doe"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
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
              <Buttons type="submit" size="lg" style={styleTheButton}>
                <Link to="/landing" style={{ textDecoration: "none", color: "black" }}>
                  SIGN UP <img src="/images/arrow-right.svg" alt="" />
                </Link>
              </Buttons>
            </div>
          </Form.Group>
          <p>
            Already have an account?{" "}
            <Link to="/customerlogin" style={{ color: "#FF3326" }}>
              Login
            </Link>
          </p>
        </Form>
        <Vector />
      </div>
      <div className="signupImage">
        <img src="\images\Signup image.png" alt="food-image" />
      </div>
      <div id="tagline2">
        <h3>Eat your favourite meal at the nearest Restaurant close to you</h3>
        <p>We connect our customers to food Vendors in their neighborhood</p>
      </div>

      {/* Display submitted data */}
      {submittedData && (
        <div>
          
        </div>
      )}
    </>
  );
}

export default CustomerSignup;