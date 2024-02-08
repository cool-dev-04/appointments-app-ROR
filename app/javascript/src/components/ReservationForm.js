import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addReservations } from '../redux/reservation/reservationsSlice';

function ReservationForm() {
  const dispatch = useDispatch();
  const { engineerId } = useParams();
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(JSON.parse(localStorage.getItem('user')).id, 'userId');
  const [userId, setUserId] = useState(user.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserId(user.id);
    const engineerId = e.target.engineer_id.value;
    const date = e.target.date.value;
    const city = e.target.city.value;
    const data = {
      user_id: userId,
      engineer_id: engineerId,
      date,
      city,
    };
    console.log(data, 'data');
    dispatch(addReservations());

    e.target.engineer_id.value = '';
    e.target.date.value = '';
    e.target.city.value = '';
  };

  return (
    <form id="reservation-form" method="post" onSubmit={handleSubmit}>
      {engineerId && <input type="hidden" name="engineer_id" value={engineerId} />}
      {!engineerId && (
        <div className="mb-3">
          <label htmlFor="engineer_id" className="form-label">
            Engineer ID
            <input type="text" className="form-control" id="engineer_id" />
          </label>
        </div>
      )}
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
