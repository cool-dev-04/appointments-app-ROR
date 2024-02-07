import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  fetchEngineers,
  deleteEngineer,
  engineersState,
} from '../redux/engineers/engineersSlice';

function EngineersList({ showDeleteButton = false }) {
  const dispatch = useDispatch();
  const { engineers, error, status } = useSelector(engineersState);

  const engineersIds = (engineers) => engineers.map((engineer) => engineer.id);
  const lastId = engineersIds(engineers)[engineers.length - 1];
  const [showIds, setShowIds] = useState(engineersIds(engineers).slice(0, 3));

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
    if (ids[ids.length - 1] < lastId) {
      setShowIds(
        engineersIds(engineers)
          .filter((id) => id > ids[ids.length - 1])
          .slice(0, 3),
      );
    }
  };

  const handleDelete = async (engineerId) => {
    dispatch(deleteEngineer(engineerId));

    const newEngineersIds = engineersIds(engineers).filter((id) => id !== engineerId);
    const beginIndex = Math.max(newEngineersIds.indexOf(showIds[0]), 0);
    // above line is to handle the case where the first visible engineer is deleted

    setShowIds(newEngineersIds.slice(beginIndex, beginIndex + 3));
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEngineers())
        .then((res) => setShowIds(engineersIds(res.payload).slice(0, 3)));
    }
  }, [dispatch, status]);

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
              {showDeleteButton && (
                <button
                  type="button"
                  onClick={() => handleDelete(engineer.id)}
                  className="fw-bolder delete-btn p-2"
                >
                  <span className="fs-5 setting-icon">
                    <i className="bi bi-trash3-fill" />
                  </span>
                  Delete
                </button>
              )}
            </div>
          );
        })}
        <button
          type="button"
          className={`next carousel-btn ${
            showIds[showIds.length - 1] === lastId ? 'disabled' : ''
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

// Define propTypes for EngineersList component
EngineersList.propTypes = {
  showDeleteButton: PropTypes.bool, // showDeleteButton prop should be a boolean
};

// Define defaultProps for EngineersList component
EngineersList.defaultProps = {
  showDeleteButton: false, // Default value for showDeleteButton prop is false
};
export default EngineersList;
