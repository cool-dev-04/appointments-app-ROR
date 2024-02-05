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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Sidebar />}>
          <Route index element={<HomePage />} />
          <Route path="consultateEngineer" element={<HomePage />} />
          <Route path="myConsultation" element={<HomePage />} />
          <Route path="addEngineer" element={<AddEngineerPage />} />
          <Route path="deleteEngineer" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
