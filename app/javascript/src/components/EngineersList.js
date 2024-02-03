import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEngineers, engineersState } from '../redux/engineers/engineersSlice';

function EngineersList() {
  const dispatch = useDispatch();
  const { engineers, error, status } = useSelector(engineersState);
  console.log('engineers', engineers);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEngineers());
    }
  }, [dispatch, status]);

  if (status === 'succeeded') {
    return (
      <div className="engineers-list">
        {engineers.map((engineer) => {
          const {
            name, id, photo, speciality,
          } = engineer;
          return (
            <div key={id}>
              <img className="engineer-img" src={photo} alt={name} />
              <p>{name}</p>
              <p>{speciality}</p>
            </div>
          );
        })}
      </div>
    );
  }
  if (status === 'failed') {
    return (<p>{ error }</p>);
  }
}

export default EngineersList;
