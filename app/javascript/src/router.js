import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </>
    ,
  ),
);

export default router;
