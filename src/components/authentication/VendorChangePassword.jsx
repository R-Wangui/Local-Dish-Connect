import { Form, Button, Alert } from 'react-bootstrap';
import Vector from '../vector/Vector';
import { useState } from 'react';
import { FaCheckSquare, FaHome, FaSquare, FaSquareFull } from 'react-icons/fa'
import AuthLayout from '../layout/AuthLayout';
import Buttons from '../layout/Buttons';

function VendorChangePassword() {
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
      <AuthLayout text="Change Password" subText="Please sign in with your existing account" showIcons={false}>
        <div>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}> PASSWORD</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ background: "rgba(240, 245, 250, 1)", height: "62px", width: "100%" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label style={{ fontWeight: 500, fontSize: "18px", color: "rgba(31, 31, 31, 1)" }}> RE-ENTER PASSWORD</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="**********"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
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

          <img src="/images/keyb.svg" alt="" />
        </div>
      </AuthLayout>
    </>
  );
}

export default VendorChangePassword;