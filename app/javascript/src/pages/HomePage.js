import React from 'react';
import EngineersList from '../components/EngineersList';
import Sidebar from './Sidebar';

const HomePage = () => (
  <>
  <Sidebar />
  <div className="home-main">
    <h1>Available Engineers</h1>
    <p>Choose an engineer to book a consultation with</p>
    <EngineersList />
    </div>
    </>
);

export default HomePage;
