import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { setEngineerDetails } from '../redux/engineers/engineerDetailsSlice';

const EngineerDetails = () => {
  const { engineerId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const engineerDetails = useSelector((state) => state.engineerDetails);
  const {
    name,
    photo,
    speciality,
    /* eslint-disable camelcase */
    consultancy_fee,
    about,
  } = engineerDetails;

  const fetchEnginnerDetails = useCallback(async () => {
    const token = JSON.parse(localStorage.getItem('token'));

    const res = await axios
      .get(`/api/v1/engineers/${engineerId}`, {
        headers: {
          Authorization: token,
        },
      })
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
      <div className="py-4 my-container">
        <div className="engineer-details row row align-items-md-stretch">
          <Link to="/" className="prev carousel-btn back-btn">
            <i className="bi bi-caret-left float-end" />
          </Link>
          <div className="col-md-6">
            <div className="h-200 p-5">
              <img src={photo} alt="Engineer" />
            </div>
          </div>

          <div className="col-md-6 details">
            <div className="h-100 p-5">
              <h2 className="fw-bolder text-end name">{name}</h2>
              <div className="px-2 mb-2 bg-light bg-gradient text-dark hidden-div">
                <span className="fw-bolder">Consultancy fee:</span>
                <span className="float-end">
                  &euro;
                  { /* eslint-disable camelcase */ }
                  {consultancy_fee}
                </span>
              </div>
              <div className="px-2 mb-2 text-dark hidden-div">
                <span className="fw-bolder">Speciality:</span>
                <span className="float-end">{speciality}</span>
              </div>
              <div className="px-2 mb-2 bg-light bg-gradient text-dark white-div">
                <span className="about fw-bolder hidden-div">
                  About:
                  <br />
                </span>
                <p className="text-wrap description">

                  {about}
                </p>
              </div>
              <div className="d-flex gap-3 p-3 justify-content-center">
                <i className="bi bi-twitter" />
                <i className="bi bi-facebook" />
                <i className="bi bi-google" />
              </div>
              <div className="float-end">

                <Link to="/" className="fw-bolder carousel-btn reserve-btn">
                  <span className="fs-5 setting-icon">

                    <i className="bi bi-gear" />
                  </span>
                  Reserve
                  <span className="fs-5 right-arrow">

                    <i className="bi bi-arrow-right-circle" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngineerDetails;
