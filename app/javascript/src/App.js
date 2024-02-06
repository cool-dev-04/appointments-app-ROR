import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import HomePage from './pages/HomePage';
import AddEngineerPage from './pages/AddEngineerPage';
import EngineerDetails from './components/EngineerDetails';
import DeleteEngineer from './pages/DeleteEngineer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<HomePage />} />
          <Route path="/engineersList/:engineerId" element={<EngineerDetails />} />
          <Route path="consultateEngineer" element={<HomePage />} />
          <Route path="myConsultation" element={<HomePage />} />
          <Route path="addEngineer" element={<AddEngineerPage />} />
          <Route path="deleteEngineer" element={<DeleteEngineer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
