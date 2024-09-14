import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as LINK } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { useGetMeQuery } from "../../redux/api/userApi";
import { setAuth, setUser } from "../../redux/features/userSlice";
const Header = () => {
  const dispatch = useDispatch();
  const [athenticated, setAuthenticated] = useState(false);

  const { data, loading } = useGetMeQuery();
  let user;
  if (data) {
    user = data.user;
    dispatch(setUser(user));
    dispatch(setAuth(true));
  }

  const LoggedUser = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (data && LoggedUser) {
      setAuthenticated(LoggedUser);
    }
  }, [LoggedUser, data]);

  return (
    <div className="sticky-top top-0">
      <nav className="navbar  d-flex justify-content-center  align-items-center navbar-expand-lg bg-body-tertiary  top-0">
        <div className="   container-fluid">
          <LINK className="navbar-brand" to="/">
            <img style={{ width: "145px" }} src="images/logo.png" alt="" />
          </LINK>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="  collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul
              className={`navbar-nav me-auto mb-2 mb-lg-0 d-flex ${
                user ? "justify-content-center" : "justify-content-end "
              } align-items-center w-100`}
            >
              <li className="nav-item px-3">
                <Link
                  className="nav-link active btn "
                  aria-current="page"
                  to="header"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  className="nav-link btn "
                  to="rooms"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                >
                  Rooms
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  className="nav-link btn "
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  className="nav-link btn "
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  className="nav-link btn "
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                >
                  Contact
                </Link>
              </li>
            </ul>
            {LoggedUser && (
              <LINK
                className="upload-btn btn btn-outline-success "
                type="submit"
                to="/upload"
              >
                Upload details
              </LINK>
            )}
            {!LoggedUser && (
              <div className="d-flex justify-content-center align-self-center">
                <LINK className="btn btn-outline-success " to="/login">
                  Login
                </LINK>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
