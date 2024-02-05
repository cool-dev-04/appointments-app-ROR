import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
// import router from './router';
import Sidebar from './pages/Sidebar';
import HomePage from './pages/HomePage';
import EngineerDetails from './components/EngineerDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<HomePage />} />
          <Route path="/engineersList/:engineerId" element={<EngineerDetails />} />
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
