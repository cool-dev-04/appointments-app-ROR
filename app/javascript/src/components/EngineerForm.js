import React from 'react';
import { useDispatch } from 'react-redux';
import { addEngineer } from '../redux/engineers/engineersSlice';

function EngineerForm() {
  const dispatch = useDispatch();

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
    }));
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="speciality" className="form-label">Speciality</label>
        <input type="text" className="form-control" id="speciality" />
      </div>
      <div className="mb-3">
        <label htmlFor="photo" className="form-label">Photo</label>
        <input type="text" className="form-control" id="photo" />
      </div>
      <div className="mb-3">
        <label htmlFor="about" className="form-label">About</label>
        <textarea className="form-control" id="about" />
      </div>
      <div className="mb-3">
        <label htmlFor="consultancy_fee" className="form-label">Consultancy Fee</label>
        <input type="number" className="form-control" id="consultancy_fee" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default EngineerForm;
