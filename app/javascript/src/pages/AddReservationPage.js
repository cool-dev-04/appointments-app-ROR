import React from 'react';
import ReservationForm from '../components/ReservationForm';

function AddReservationPage() {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <h1>Add Reservation</h1>
        <ReservationForm />
    </div>
  );
}

export default AddReservationPage;
