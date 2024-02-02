import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEngineers, engineersState } from '../redux/engineers/engineersSlice';

function EngineersList() {
  const dispatch = useDispatch();
  const { engineers, error, status } = useSelector(engineersState);
  const [showId, setShowId] = useState(1);

  const handleShowClick = (prev, id) => {
    if (id > 0 && id < engineers.length + 1) {
      document.getElementById(prev).classList.remove('active');
      document.getElementById(id).classList.add('active');
      setShowId(id);
    }
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEngineers());
    }
  }, [dispatch, status]);

  if (status === 'succeeded') {
    return (
      <div className="engineers-list">
        <button type="button" onClick={() => handleShowClick(showId, showId - 1)}>Previous</button>
        {engineers.map((engineer) => {
          const {
            name, id, photo, speciality,
          } = engineer;
          return (
            <div key={id} id={id} className={engineer.id === 1 ? 'active' : ''}>
              <img className="engineer-img" src={photo} alt={name} />
              <p>{name}</p>
              <p>{speciality}</p>
            </div>
          );
        })}
        <button type="button" onClick={() => handleShowClick(showId, showId + 1)}>Next</button>
      </div>
    );
  }
  if (status === 'failed') {
    return (<p>{ error }</p>);
  }
}

export default EngineersList;
