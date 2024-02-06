import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { register, reset } from '../../redux/auth/authSlice';
import Authspinner from './authspinner';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    user, isLoading, isSuccess, isError, message,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess && user) {
      toast.success(message);
      navigate('/');
      dispatch(reset());
    }
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      user: {
        name,
        email,
        password,
        role: 'user',
      },
    };

    dispatch(register(userData));
  };

  if (isLoading) {
    return <Authspinner />;
  }

  return (
    <>
      <section className="register-tab">
        <h1 className="text-center" style={{ marginBottom: '5%' }}>Register</h1>
        <Form onSubmit={onSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Your Name"
            className="mb-3"
            value={name}
          >
            <Form.Control name="name" type="name" onChange={onChange} placeholder="Place your name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email Address"
            className="mb-3"
            value={email}
          >
            <Form.Control name="email" type="email" onChange={onChange} placeholder="Place your email" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-3"
            value={password}
          >
            <Form.Control name="password" type="password" onChange={onChange} placeholder="Place your password" />
          </FloatingLabel>
          <Button variant="primary" type="submit" style={{ marginTop: '5%', backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>
            Register
          </Button>
        </Form>
      </section>
    </>
  );
}

export default Register;
