import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { login, reset } from '../../redux/auth/authSlice';
import Authspinner from './authspinner';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    user, isLoading, isSuccess, isError, message,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess && user) {
      toast.success(message);
      dispatch(reset());
      navigate('/');
    }
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      user: {
        email,
        password,
      },
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Authspinner />;
  }

  return (
    <>
      <section className="login-tab">
        <h1 className="text-center" style={{ marginBottom: '5%' }}>Login</h1>
        <Form onSubmit={handleSubmit}>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
            value={email}
          >
            <Form.Control name="email" type="email" onChange={handleChange} placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            value={password}
          >
            <Form.Control name="password" type="password" onChange={handleChange} placeholder="Password" />
          </FloatingLabel>
          <Button type="submit">
            Login
          </Button>
        </Form>
      </section>
    </>
  );
}

export default Login;
