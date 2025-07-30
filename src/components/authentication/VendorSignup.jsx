import { Form, Alert, Spinner } from "react-bootstrap";
import { useState } from "react";
import Buttons from "../layout/Buttons";
import { useNavigate } from "react-router-dom";
// import LoadingPage from '../../pages/LoadingPage';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

function VendorSignup() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().required(),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Event handler function for the form so it submits before refreshing the page
  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post(formData);
      console.log("Submitted:", response.data);
      navigate("/vendorsdashboard");
    } catch (error) {
      console.log("Signup error:", error.response);
      setError(
        error?.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="signup">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id="form" onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
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
            <Form.Label
              style={{
                fontWeight: 500,
                fontSize: "18px",
                color: "rgba(31, 31, 31, 1)",
              }}
            >
              Business Name
            </Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="John Doe"
              onInvalid={!!errors.username}
              {...register("username")}
              style={{
                background: "rgba(240, 245, 250, 1)",
                height: "62px",
                width: "100%",
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label
              style={{
                fontWeight: 500,
                fontSize: "18px",
                color: "rgba(31, 31, 31, 1)",
              }}
            >
              Email address
            </Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              isInvalid={!!errors.email}
              {...register("email")}
              style={{
                background: "rgba(240, 245, 250, 1)",
                height: "62px",
                width: "100%",
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label
              style={{
                fontWeight: 500,
                fontSize: "18px",
                color: "rgba(31, 31, 31, 1)",
              }}
            >
              Retype Password
            </Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              isInvalid={!!errors.password}
              {...register("password")}
              style={{
                background: "rgba(240, 245, 250, 1)",
                height: "62px",
                width: "100%",
              }}
            />
          </Form.Group>
          <div style={{ marginBottom: "20px" }}>
            {loading ? (
              <>
                <Spinner />
              </>
            ) : (
              <>
                <Buttons
                  type="submit"
                  size="lg"
                  style={{
                    width: "100%",
                    backgroundColor: "#FDC55E",
                    border: "none",
                    margin: "20px 0",
                    color: "#000",
                  }}
                >
                  SIGN UP <img src="/images/arrow-right.svg" alt="" />
                </Buttons>
              </>
            )}
            <h5
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "30px",
              }}
            >
              CONTINUE A GUEST
            </h5>
          </div>
        </Form>
        <div className="vendorloginImage">
          <img src="\images\vendorsignup.png" alt="food-image" />
        </div>
      </div>
      <div className="vendorsignup-tagline">
        <h4>
          Showcase your delicious food and connect with a vibrant community of
          local customers.
        </h4>
      </div>
    </>
  );
}

export default VendorSignup;
