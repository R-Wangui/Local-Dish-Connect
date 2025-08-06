import { Form, Alert, Spinner } from "react-bootstrap";
import Vector from "../vector/Vector";
import { useState } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import Buttons from "../layout/Buttons";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { auth } from "../../services/firebase";
 
function CustomerLogin() {
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();
 
  
  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("password is required"),
  });
  const { register, handleSubmit, formState: {errors}
  } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post(auth, formData);
      console.log("Submitted:", response.data);
      navigate("/landing");
    } catch (error) {
      console.error("Error:", error);
      setError(
        error?.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
 
 
  // Styling for the button
  const buttonStyle = {
    backgroundColor: "#FDC55E",
    border: "none",
  };
  return (
    <>
      <div id="login">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id="form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="header">Log in</h1>
          <div id="social-logins">
            <p>Log in using social networks</p>
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
            <div id="remember-me">
              <span>
                <FaRegCheckSquare />
              </span>
              <p>
                Remember me <span id="forgotPassword"> Forgot Password</span>{" "}
              </p>
            </div>
          </Form.Group>
          <div className="d-grid gap-2">
            <Buttons type="submit" size="lg" style={buttonStyle}>
              {loading ? (
                <>
                  <Spinner size="sm" animation="border" />
                </>
              ) : (
                <>
                  Log in <img src="/images/arrow-right.svg" alt="" />
                </>
              )}
            </Buttons>
          </div>
          <p style={{ marginTop: "20px" }}>
            Don&apos;t have an account?{" "}
            <Link to="/customersignup" style={{ color: "#FF3326" }}>
              Sign up
            </Link>
          </p>
        </Form>
        <Vector />
      </div>
      <div className="loginImage">
        <img src="\images\Login image.png" alt="food-image" />
      </div>
      <div id="tagline">
        <h3>Eat your favourite meal at the nearest Restaurant close to you</h3>
        <p>We connect our customers to food Vendors in their neighbourhood</p>
      </div>
    </>
  );
}
 
export default CustomerLogin;
 