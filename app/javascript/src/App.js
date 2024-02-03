import React from 'react';
import {
<<<<<<< HEAD
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
// import router from './router';
=======
  RouterProvider, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import router from './router';
>>>>>>> origin/nav-menu
import Sidebar from './pages/Sidebar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className="col-auto">
          <Sidebar />

        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="consultateEngineer" element={<HomePage />} />
            <Route path="myConsultation" element={<HomePage />} />
            <Route path="addEngineer" element={<HomePage />} />
            <Route path="deleteEngineer" element={<HomePage />} />
          </Routes>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
