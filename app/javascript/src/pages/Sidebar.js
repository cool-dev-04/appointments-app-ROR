import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../images/logo1.png'

const Sidebar = () => {
  return (
    <>
    <div className='sidebar d-flex flex-column justify-content-between vh-100'>
        <div>
             <img src={logo1}  className='logo' />
        <ul className='nav nav-pills flex-column p-0 mt-5'>
          <li className='nav-item p-1'>
            <NavLink to="/" className='nav-link' activeClassName='active-link'>
              <span className='fs-6'>Engineers</span>
            </NavLink>
          </li>
          <li className='nav-item p-1'>
            <NavLink to="consultateEngineer" className='nav-link' activeClassName='active-link'>
              <span className='fs-6'>Consultate Engineer</span>
            </NavLink>
          </li>
          <li className='nav-item p-1'>
            <NavLink to="myConsultation" className='nav-link'>
              <span className='fs-6'>My Consultation</span>
            </NavLink>
          </li>
          <li className='nav-item p-1'>
            <NavLink to="addEngineer" className='nav-link'>
              <span className='fs-6'>Add Engineer</span>
            </NavLink>
          </li>
          <li className='nav-item p-1'>
            <NavLink to="deleteEngineer" className='nav-link'>
              <span className='fs-6'>Delete Engineer</span>
            </NavLink>
          </li>
        </ul>
      </div>
        <div>
          <div className='d-flex gap-3 p-3'>
            
        <i class="bi bi-twitter"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-google"></i>
        <i class="bi bi-github"></i>
          <i class="bi bi-linkedin"></i>
         </div>
          <div>
          <span>&copy;2024 somethin</span>
          </div>
        </div>
    </div>
    
      </>
  );
};

export default Sidebar;
