import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';


const ProNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-aos="fade-down" data-aos-duration="1000">
        <div className="container-fluid">
          <h1>
            <a className="navbar-brand" href="pronav.js">
              IHS
            </a>
          </h1>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 m-1">
              <li className="nav-but">
                <Link className="btn btn-outline-success" to="/signup">
                  SignUp
                </Link>
              </li>
              <li className="nav-but">
                <Link className="btn btn-outline-success" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ProNav;