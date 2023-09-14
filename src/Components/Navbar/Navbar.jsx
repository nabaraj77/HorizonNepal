import React, { useRef } from "react";
import { Link } from "react-scroll";
import logo from "../../../public/Images/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="nav">
              <div className="div">
                <span className="name ">
                  <h2 span="name">
                    HORIZON NEPAL{" "}
                    <img
                      className="logoHorizon fa-beat"
                      src={logo}
                      alt="Logo"
                    />
                  </h2>{" "}
                </span>
              </div>

              <div className="Motto">
                <span>
                  <h9 className="mottoSlogan">
                    {/* Making your vision become a reality. */}
                  </h9>
                </span>
              </div>
            </div>
          </a>

          {/* <button
            className="navbar-toggler bg-body-tertiary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Nabaraj Dahal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contact Me</a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
