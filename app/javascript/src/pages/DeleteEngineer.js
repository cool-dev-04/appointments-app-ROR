import React from 'react';
import EngineersList from '../components/EngineersList';

const DeleteEngineer = () => (
  <div className="home-main">
    <h1>AVAILABLE ENGINEERS</h1>
    <p className="text-body-tertiary dotted-bottom-border py-2">Choose an engineer to delete it from the list.</p>
    <EngineersList showDeleteButton />
  </div>
);

export default DeleteEngineer;
