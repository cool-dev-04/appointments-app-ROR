import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, redirect } from 'react-router-dom';
import { fetchEngineers, engineersState } from '../redux/engineers/engineersSlice';

function EngineersList() {
  const dispatch = useDispatch();
  const { engineers, error, status } = useSelector(engineersState);
  const engineersIds = (engineers) => engineers.map((engineer) => engineer.id);
  const lastId = (engineers) => engineersIds(engineers)[engineers.length - 1];
  const [showIds, setShowIds] = useState(engineersIds(engineers).slice(0, 3));
  const token = JSON.parse(localStorage.getItem('token'));

  const handlePrevClick = (ids) => {
    if (showIds[0] > engineersIds(engineers)[0]) {
      setShowIds(
        engineersIds(engineers)
          .filter((id) => id < ids[0])
          .slice(-3),
      );
    }
  };

  const handleNextClick = (ids) => {
    if (ids[ids.length - 1] < lastId(engineers)) {
      setShowIds(
        engineersIds(engineers)
          .filter((id) => id > ids[ids.length - 1])
          .slice(0, 3),
      );
    }
  };

  // console.log(status, 'status', engineers, 'engineers', error, 'error');
  useEffect(() => {
    console.log(status, 'status', engineers, 'engineers', error, 'error');
    if (status === 'idle') {
      dispatch(fetchEngineers(token))
        .then((res) => {
          setShowIds(engineersIds(res.payload).slice(0, 3));
          if (res.payload.redirectToLogin) {
            redirect('/');
          }
        });
    }
  }, [dispatch, status, engineers, token, error]);

  if (status === 'succeeded') {
    if (!Array.isArray(engineers) || engineers.length === 0) {
      return (
        <div className="empty-div">
          <p className="empty-msg">
            There are no engineers to display.
          </p>
        </div>
      );
    }

    return (
      <div className="engineers-list">
        {status === 'loading' && <p>Loading...</p>}
        <button
          type="button"
          className={`prev carousel-btn ${showIds[0] === engineersIds(engineers)[0] ? 'disabled' : ''}`}
          onClick={() => handlePrevClick(showIds)}
        >
          {/* eslint-disable jsx-a11y/control-has-associated-label */}
          <i className="bi bi-caret-left" />
        </button>
        {engineers.map((engineer) => {
          const {
            name, id, photo, speciality,
          } = engineer;
          return (
            <div
              key={id}
              id={id}
              className={`engineer-card ${
                showIds.includes(engineer.id) ? 'active-item' : 'item'
              }`}
            >
              <div className="engineer-img-container">
                <img className="engineer-img" src={photo} alt={name} />
              </div>
              <Link
                to={`engineersList/${engineer.id}`}
                className="engineer text-black"
              >
                <p>{name}</p>
                <p className="text-body-tertiary dotted-top-border">
                  {speciality}
                </p>
              </Link>
            </div>
          );
        })}
        <button
          type="button"
          className={`next carousel-btn ${
            showIds[showIds.length - 1] === lastId(engineers) ? 'disabled' : ''
          }`}
          onClick={() => handleNextClick(showIds)}
        >
          {/* eslint-disable jsx-a11y/control-has-associated-label */}
          <i className="bi bi-caret-right" />
        </button>
      </div>
    );
  }
  if (status === 'failed') {
    return <p>{error}</p>;
  }
}

export default EngineersList;
