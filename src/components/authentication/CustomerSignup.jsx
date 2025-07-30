import { useState } from "react";
import { Form, Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../layout/Buttons";
import Vector from "../vector/Vector";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// import LoadingPage from "../../pages/LoadingPage";

function CustomerSignup() {
  // use useState hook to manage the state of the page as you're filling in the form and submitting it
  const [error, setError] = useState("");
  // const [submittedData, setSubmittedData] = useState(null); // State to store submitted data
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Store your API URL in a constant variable
  const apiUrl = import.meta.env.VITE_API_ENDPOINT;

  const schema = yup.object().shape({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const { register, handleSubmit, formState: {errors}
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async (formData) => {
    setLoading(true);
    try {
        const response = await axios.post(apiUrl, formData);
        console.log("Submitted:", response.data);
        // setSubmittedData(response.data); // Update state with submitted data
        navigate("/landing");
      } catch (error) {
        console.error("Signup error:", error.response);
        // alert(error.response.data.message)
        setError( error?.response?.data?.message || "An error occurred. Please try again."); // This is not working
      } finally {
        setLoading(false);
      }
    
  };

  const styleTheButton = {
    backgroundColor: "#FDC55E",
    color: "black",
    border: "none",
    marginTop: "60px",
    width: "500px",
  };

  return (
    <>
      <div id="signup">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id="form" onSubmit={handleSubmit(onSubmit)}>
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
              isInvalid={!!errors.firstname}
              {...register("firstname")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Doe"
              isInvalid={!!errors.lastname}
              {...register("lastname")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              isInvalid={!!errors.email}
              {...register("email")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              isInvalid={!!errors.password}
              {...register("password")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
            <div className="d-grid gap-2">
              <Buttons type="submit" size="lg" style={styleTheButton}>
                {loading ? (
                  <>
                    <Spinner size="sm" animation="border" />
                  </>
                ) : (
                  <>
                    SIGN UP <img src="/images/arrow-right.svg" alt="" />
                  </>
                )}
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
        <h4>Eat your favourite meal at the nearest Restaurant close to you</h4>
        <p>We connect our customers to food Vendors in their neighborhood</p>
      </div>
    </>
  );
}

export default CustomerSignup;