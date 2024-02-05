import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { setEngineerDetails } from "../redux/engineers/engineerDetailsSlice";

const EngineerDetails = () => {
  const { engineerId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const engineerDetails = useSelector((state) => state.engineerDetails);
  const { id, name, photo, speciality, consultancy_fee, about } =
    engineerDetails;

  const fetchEnginnerDetails = useCallback(async () => {
    const res = await axios
      .get(`/api/v1/engineers/${engineerId}`)
      .catch((err) => {
        setError(err);
      });
    dispatch(setEngineerDetails(res.data));
    setLoading(false);
  }, [dispatch, engineerId]);

  useEffect(() => {
    fetchEnginnerDetails();
  }, [fetchEnginnerDetails, engineerId]);
  if (error) {
    return <div className="error">{error}</div>;
  }
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner" />
        <p>Loading...</p>
      </div>
    );
  }
  return (
   
  );
};

export default EngineerDetails;
