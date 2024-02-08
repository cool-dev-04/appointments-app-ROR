import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { register } from '../../redux/auth/authSlice';
import Authspinner from './authspinner';
import { fetchEngineers } from '../../redux/engineers/engineersThunk';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    user, isLoading, isSuccess, isError, message,
  } = useSelector((state) => state.auth);

  const token = JSON.parse(localStorage.getItem('token'));

  useEffect(() => {
    if (isSuccess && user) {
      toast.success(message);
      dispatch(fetchEngineers(token))
        .then(() => navigate('/'));
      // navigate('/');
    }

    if (isError) {
      toast.error(message);
    }
  }, [user, isSuccess, navigate, dispatch, token, isError, message]);

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
        username,
        email,
        password,
      },
    };

    dispatch(register(userData));
  };

  if (isLoading) {
    return <Authspinner />;
  }

  return (
    <>
      <section>
        <h1 className="text-center" style={{ marginBottom: '5%' }}>Register</h1>
        <Form onSubmit={onSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Your Username"
            className="mb-3"
            value={username}
          >
            <Form.Control name="username" type="text" onChange={onChange} placeholder="Place your username" />
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
          <Button type="submit">
            Register
          </Button>
        </Form>
      </section>
    </>
  );
}

export default Register;
