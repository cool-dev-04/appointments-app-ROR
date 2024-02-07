import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import HomePage from './pages/HomePage';
import AddEngineerPage from './pages/AddEngineerPage';
import Register from './components/auth/register';
import Login from './components/auth/login';

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
              <Route path="/register" element={<Register />} />
              <Route path="engineers" element={<HomePage />} />
              <Route path="consultateEngineer" element={<HomePage />} />
              <Route path="myConsultation" element={<HomePage />} />
              <Route path="addEngineer" element={<AddEngineerPage />} />
              <Route path="deleteEngineer" element={<HomePage />} />
            </>
          ) }
          {
            loggedIn && (
              <>
              </>
            )
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
