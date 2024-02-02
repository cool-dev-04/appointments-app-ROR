import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Sidebar from './pages/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
    <div className='d-flex'>
      <div className='col-auto'>
        <Sidebar />

      </div>
        <div>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
          </Routes>

      </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
