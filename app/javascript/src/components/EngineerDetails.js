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
    <>
      <div class="container py-4">
        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-200 p-5">
              <img src={photo} alt="Engineer" />
            </div>
          </div>

          <div class="col-md-6 details">
            <div class="h-100 p-5">
              <h2 className="fw-bolder text-end">{name}</h2>
              <div className="px-2 mb-2 bg-light bg-gradient text-dark">
                <span>Consultancy fee:</span>
                <span className="float-end">&euro;{consultancy_fee}</span>
              </div>
              <div className="px-2 mb-2 text-dark">
                <span>Speciality:</span>
                <span className="float-end">{speciality}</span>
              </div>
              <div className="px-2 mb-2 bg-light bg-gradient text-dark">
                <span className="about">About:{about}</span>
                          </div>
                          <div className="float-end">
                              
                              <Link to={"/"} className="fw-bolder carousel-btn reserve-btn">
                                  <span className="fs-5 setting-icon">
                                      
                                  <i class="bi bi-gear"></i>
                                  </span>
                                  Reserve
                                  <span className="fs-5 right-arrow">
                                      
                                  <i class="bi bi-arrow-right-circle"></i>
                                  </span>
              </Link>
                          </div>
            </div>
          </div>
        </div>
      </div>
      <Link to={"/"} className="carousel-btn back-btn">
        <i className="bi bi-caret-left float-end" />
      </Link>
    </>
  );
};

export default EngineerDetails;
