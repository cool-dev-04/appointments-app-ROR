import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reservation/reservationsThunk';
import { reservationsState } from '../redux/reservation/reservationsSlice';

function ConsultationList() {
  const dispatch = useDispatch();
  const { reservations, error, status } = useSelector(reservationsState);
  console.log(reservations);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchReservations());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (error && status === 'failed') {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  if (!reservations || reservations.length === 0) {
    return <p>No reservations found.</p>;
  }

  return (
    <div className="table-responsive-sm table-div">
      <table className="table table-striped table-hover table-bordered w-100">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Engineer</th>
            <th scope="col">City</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((consultation) => (
            <tr key={consultation.id}>
              <td>{consultation.user_name}</td>
              <td>{consultation.engineer_name}</td>
              <td>{consultation.city}</td>
              <td>{consultation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsultationList;
