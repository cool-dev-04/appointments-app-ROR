import React from 'react';
import EngineersList from '../components/EngineersList';

const HomePage = () => (
  <div className="home-main">
    <h1>AVAILABLE ENGINEERS</h1>
    <p className="text-body-tertiary dotted-bottom-border py-2">Choose an engineer to book a consultation with</p>
    <EngineersList />
  </div>
);

export default HomePage;
