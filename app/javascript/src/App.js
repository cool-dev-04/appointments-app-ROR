import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './pages/Sidebar';
import HomePage from './pages/HomePage';
import AddEngineerPage from './pages/AddEngineerPage';
import EngineerDetails from './components/EngineerDetails';
import Register from './components/auth/register';
import Login from './components/auth/login';
import { reset } from './redux/auth/authSlice';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('token'));
  const { isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess && token) {
      setLoggedIn(true);
      dispatch(reset());
      // dispatch(fetchEngineers(token));
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
              <Route path="addEngineer" element={<AddEngineerPage />} />
              <Route path="consultateEngineer" element={<HomePage />} />
              <Route path="myConsultation" element={<HomePage />} />
              <Route path="deleteEngineer" element={<HomePage />} />
            </>
          )}
          {!loggedIn && (
            <>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
            </>
          )}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
