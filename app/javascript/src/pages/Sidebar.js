import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../images/logo1.png';

const Sidebar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(true);
  const navRef = useRef();
  const showSidebar = () => {
    setIsMenuClicked(!isMenuClicked);
    navRef.current.classList.toggle('responsive_menu');
  };
  const hideSidebar = () => {
    setIsMenuClicked(!isMenuClicked);
    navRef.current.classList.toggle('responsive_menu');
  };

  return (
    <>
      <div className="toggle-btn">
        {
          isMenuClicked
            /* eslint-disable jsx-a11y/control-has-associated-label */
            ? <button type="button" className="nav-btn nav-show-btn" onClick={showSidebar}><i className="bi bi-list" /></button>
            : <span />

        }
      </div>
      <div ref={navRef} className="sidebar d-flex flex-column justify-content-between vh-100">
        <div>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button type="button" className="nav-btn nav-close-btn" onClick={hideSidebar}><i className="bi bi-x-lg" /></button>

          <img src={logo1} className="logo" alt="logo" />
          <ul className="nav nav-pills flex-column p-0 mt-5">
            <li className="nav-item p-1">
              <NavLink to="/" className="nav-link">
                <span className="fs-6 fw-bold">Engineers</span>
              </NavLink>
            </li>
            <li className="nav-item p-1">
              <NavLink to="consultateEngineer" className="nav-link">
                <span className="fs-6 fw-bold">Consultate Engineer</span>
              </NavLink>
            </li>
            <li className="nav-item p-1">
              <NavLink to="myConsultation" className="nav-link">
                <span className="fs-6 fw-bold">My Consultation</span>
              </NavLink>
            </li>
            <li className="nav-item p-1">
              <NavLink to="addEngineer" className="nav-link">
                <span className="fs-6 fw-bold">Add Engineer</span>
              </NavLink>
            </li>
            <li className="nav-item p-1">
              <NavLink to="deleteEngineer" className="nav-link">
                <span className="fs-6 fw-bold">Delete Engineer</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <div className="d-flex gap-3 p-3">

            <i className="bi bi-twitter" />
            <i className="bi bi-facebook" />
            <i className="bi bi-google" />
            <i className="bi bi-github" />
            <i className="bi bi-linkedin" />
          </div>
          <div>
            <span>&copy;2024 something</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default Sidebar;
