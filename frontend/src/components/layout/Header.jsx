import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from "react-router-dom"
const Header = () => {


  const dispatch=useDispatch();

const {user,isAuthenticated} = useSelector((state)=>state.auth)

console.log(user,isAuthenticated);

  return (
    <div>
      <nav className="navbar  d-flex justify-content-center  align-items-center navbar-expand-lg bg-body-tertiary  top-0">
  <div className="   container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="  collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 d-flex ${user ? 'justify-content-center' : 'justify-content-end '} align-items-center w-100`}>
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
      {
        user !== null && (<form className="d-flex justify-content-center align-items-center upload-btn" role="search">
         
          <button className="btn btn-outline-success " type="submit">Upload details</button>
        </form>)
      }
      {
        !isAuthenticated && (
          <Link className="btn btn-outline-success "  to="/login">Login</Link>
        )
      }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
