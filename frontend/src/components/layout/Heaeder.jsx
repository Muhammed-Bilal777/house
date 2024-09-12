import React from 'react'
import {Link} from "react-router-dom"
const Heaeder = () => {
  return (
    <div>
      <nav className="navbar d-flex justify-content-center align-items-center navbar-expand-lg bg-body-tertiary  top-0">
  <div className="   container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="  collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center w-100 ">
        <li className="nav-item px-3">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/rooms">Rooms</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item px-3">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search " />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Heaeder
