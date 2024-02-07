import React from 'react';
import { useDispatch } from 'react-redux';
import { addReservations } from '../redux/reservation/reservationsSlice';

function ReservationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = e.target.user_id.value;
    const engineerId = e.target.engineer_id.value;
    const date = e.target.date.value;
    const city = e.target.city.value;

    dispatch(addReservations({
      user_id: userId,
      engineer_id: engineerId,
      date,
      city,
    }));

    e.target.user_id.value = '';
    e.target.engineer_id.value = '';
    e.target.date.value = '';
    e.target.city.value = '';
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="user_id" className="form-label">
          User ID
          <input type="text" className="form-control" id="user_id" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="engineer_id" className="form-label">
          Engineer ID
          <input type="text" className="form-control" id="engineer_id" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
          <input type="date" className="form-control" id="date" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">
          City
          <textarea className="form-control" id="city" />
        </label>
      </div>
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ReservationForm;
