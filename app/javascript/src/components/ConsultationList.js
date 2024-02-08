import React, { useEffect, useState } from "react";
import axios from "axios";

function ConsultationList() {
  const [consultations, setConsultations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const response = await axios.get("/api/v1/consultations");
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
    return <p>Error: {error}</p>;
  }

  if (!consultations || consultations.length === 0) {
    return <p>No consultations found.</p>;
  }

  return (
   
  );
}

export default ConsultationList;
