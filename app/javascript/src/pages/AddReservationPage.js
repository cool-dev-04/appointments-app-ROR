import React from 'react';
import ReservationForm from '../components/ReservationForm';

function AddReservationPage({ engineerId = '' }) {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <h1>Add Reservation</h1>
      <ReservationForm engineerId />
    </div>
  );
}

export default AddReservationPage;
