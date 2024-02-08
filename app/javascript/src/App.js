import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import HomePage from './pages/HomePage';
import AddEngineerPage from './pages/AddEngineerPage';
import EngineerDetails from './components/EngineerDetails';
import DeleteEngineer from './pages/DeleteEngineer';
import Register from './components/auth/register';
import Login from './components/auth/login';
import AddReservation from './pages/AddReservationPage';

function App() {
  const token = JSON.parse(localStorage.getItem('token'), '');
  const loggedIn = token !== null;
  console.log(loggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          {!loggedIn && (
            <>
              <Route index element={<HomePage />} />
              <Route path="engineers" element={<HomePage />} />
              <Route path="/engineersList/:engineerId" element={<EngineerDetails />} />
              <Route path="consultateEngineer" element={<HomePage />} />
              <Route path="myConsultation" element={<HomePage />} />
              <Route path="addEngineer" element={<AddEngineerPage />} />
              <Route path="deleteEngineer" element={<DeleteEngineer />} />

            </>
          ) }
          {
            loggedIn && (
              <>
                <Route index element={<Login />} />
                <Route path="/register" element={<Register />} />
              </>
            )
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
