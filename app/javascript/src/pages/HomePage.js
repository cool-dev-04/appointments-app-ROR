import React from 'react';
import EngineersList from '../components/EngineersList';

const HomePage = () => (
  <div className="home-main">
    <h1>Available Engineers</h1>
    <p>Choose an engineer to book a consultation with</p>
    <EngineersList />
  </div>
);

export default HomePage;
