import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './pages/Sidebar';
import HomePage from './pages/HomePage';
import AddEngineerPage from './pages/AddEngineerPage';
import EngineerDetails from './components/EngineerDetails';
import DeleteEngineer from './pages/DeleteEngineer';
import Register from './components/auth/register';
import Login from './components/auth/login';
import AddReservationPage from './pages/AddReservationPage';
import MyConsultation from './pages/MyConsultation';
import { reset } from './redux/auth/authSlice';

function App() {
  const token = JSON.parse(localStorage.getItem('token'));
  const [loggedIn, setLoggedIn] = useState(token !== null);
  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess && token) {
      setLoggedIn(true);
      dispatch(reset());
    } else if (!token) {
      setLoggedIn(false);
    }
  }, [setLoggedIn, token, isSuccess, dispatch]);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Sidebar />}>
          {loggedIn && (
            <>
              <Route index element={<HomePage />} />
              <Route path="/engineersList/:engineerId" element={<EngineerDetails />} />
              <Route path="consultateEngineer/:engineerId" element={<AddReservationPage />} />
              <Route path="consultateEngineer" element={<AddReservationPage />} />
              <Route path="myConsultation" element={<MyConsultation />} />
              <Route path="addEngineer" element={<AddEngineerPage />} />
              <Route path="deleteEngineer" element={<DeleteEngineer />} />
              <Route path="/*" element={<HomePage />} />

            </>
          )}
          {!loggedIn && (
            <>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="/*" element={<Login />} />
            </>
          )}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
