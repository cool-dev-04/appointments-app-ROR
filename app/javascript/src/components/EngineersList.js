import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  fetchEngineers,
  engineersState,
} from '../redux/engineers/engineersSlice';

function EngineersList({ showDeleteButton = false }) {
  const dispatch = useDispatch();
  const { engineers, error, status } = useSelector(engineersState);
  const [showIds, setShowIds] = useState([1, 2, 3]);

  const lastId = (engineers) => engineers.map((engineer) => engineer.id)[engineers.length - 1];

  const handlePrevClick = (ids) => {
    if (showIds[0] > 1) {
      setShowIds(
        engineers
          .map((engineer) => engineer.id)
          .filter((id) => id < ids[0])
          .slice(-3),
      );
    }
  };

  const handleNextClick = (ids) => {
    if (ids[ids.length - 1] < lastId(engineers)) {
      setShowIds(
        engineers
          .map((engineer) => engineer.id)
          .filter((id) => id > ids[2])
          .slice(0, 3),
      );
    }
  };

  const handleDelete = async (engineerId) => {
    try {
      const response = await fetch(`/api/v1/engineers/${engineerId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Refresh engineer list after successful deletion
        dispatch(fetchEngineers());
      } else {
        console.error('Failed to delete engineer');
      }
    } catch (error) {
      console.error('Failed to delete engineer', error);
    }
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEngineers());
    }
  }, [dispatch, status]);

  if (status === 'succeeded') {
    if (!Array.isArray(engineers) || engineers.length === 0) {
      return <div className="empty-div">
        <p className='empty-msg'>
        There are no engineers to display.
        </p>
      </div>;
    }

    return (
      <div className="engineers-list">
        <button
          type="button"
          className={`prev carousel-btn ${showIds[0] === 1 ? 'disabled' : ''}`}
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

// Define propTypes for EngineersList component
EngineersList.propTypes = {
  showDeleteButton: PropTypes.bool, // showDeleteButton prop should be a boolean
};

// Define defaultProps for EngineersList component
EngineersList.defaultProps = {
  showDeleteButton: false, // Default value for showDeleteButton prop is false
};
export default EngineersList;
