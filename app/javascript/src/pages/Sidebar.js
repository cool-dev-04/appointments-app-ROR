import React from 'react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../images/logo1.png'

const Sidebar = () => {
  const navRef = useRef();
  const showSidbar = () => {
    navRef.current.classList.toggle("responsive_menu");
  }
  return (
    <>
    <div ref={navRef} className='sidebar d-flex flex-column justify-content-between vh-100'>
        <div>
          <button className='nav-btn nav-close-btn' onClick={showSidbar}><i className="bi bi-x-lg"></i></button>
          <button className='nav-btn' onClick={showSidbar}><i class="bi bi-list"></i></button>
             <img src={logo1}  className='logo' />
        <ul className='nav nav-pills flex-column p-0 mt-5'>
          <li className='nav-item p-1'>
            <NavLink to="/" className='nav-link' activeClassName='active-link'>
              <span className='fs-6 fw-bold'>Engineers</span>
            </NavLink>
          </li>
          <li className='nav-item p-1'>
            <NavLink to="consultateEngineer" className='nav-link' activeClassName='active-link'>
              <span className='fs-6 fw-bold'>Consultate Engineer</span>
            </NavLink>
          </li>
          <li className='nav-item p-1'>
            <NavLink to="myConsultation" className='nav-link'>
              <span className='fs-6 fw-bold'>My Consultation</span>
            </NavLink>
          </li>
          <li className='nav-item p-1'>
            <NavLink to="addEngineer" className='nav-link'>
              <span className='fs-6 fw-bold'>Add Engineer</span>
            </NavLink>
          </li>
          <li className='nav-item p-1'>
            <NavLink to="deleteEngineer" className='nav-link'>
              <span className='fs-6 fw-bold'>Delete Engineer</span>
            </NavLink>
          </li>
        </ul>
      </div>
        <div>
          <div className='d-flex gap-3 p-3'>
            
        <i className="bi bi-twitter"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-google"></i>
        <i className="bi bi-github"></i>
          <i className="bi bi-linkedin"></i>
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
