import React from 'react';
import { useDispatch } from 'react-redux';
import { addEngineer } from '../redux/engineers/engineersSlice';

function EngineerForm() {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('token'));

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const speciality = e.target.speciality.value;
    const photo = e.target.photo.value;
    const about = e.target.about.value;
    const consultancyFee = e.target.consultancy_fee.value;

    dispatch(addEngineer({
      name,
      speciality,
      photo,
      about,
      consultancy_fee: consultancyFee,
    }, token));

    e.target.name.value = '';
    e.target.speciality.value = '';
    e.target.photo.value = '';
    e.target.about.value = '';
    e.target.consultancy_fee.value = '';
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
          <input type="text" className="form-control" id="name" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="speciality" className="form-label">
          Speciality
          <input type="text" className="form-control" id="speciality" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="photo" className="form-label">
          Photo
          <input type="text" className="form-control" id="photo" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="about" className="form-label">
          About
          <textarea className="form-control" id="about" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="consultancy_fee" className="form-label">
          Consultancy Fee
          <input type="number" className="form-control" id="consultancy_fee" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default EngineerForm;
