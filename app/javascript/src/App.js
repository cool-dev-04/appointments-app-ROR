import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<HomePage />} />
          <Route path="consultateEngineer" element={<HomePage />} />
          <Route path="myConsultation" element={<HomePage />} />
          <Route path="addEngineer" element={<HomePage />} />
          <Route path="deleteEngineer" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
