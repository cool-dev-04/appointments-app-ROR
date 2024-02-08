import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ConsultationList() {
  const [consultations, setConsultations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const response = await axios.get('/api/v1/consultations');
        setConsultations(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchConsultations();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  if (!consultations || consultations.length === 0) {
    return <p>No consultations found.</p>;
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
          {consultations.map((consultation) => (
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
