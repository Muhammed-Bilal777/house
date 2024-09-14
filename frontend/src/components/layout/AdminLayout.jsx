import React from "react";
import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <div class="container text-center h-100">
        <div class="row ">
          <div
            style={{
              backgroundColor: "#e83ac8",
              color: "white",
            }}
            class=" d-flex flex-column gap-3 underline-n col-12 col-lg-2  py-5"
          >
            <Link
              to="/admin/dashboard"
              className="text-white text-decoration-none"
            >
              Dashboard
            </Link>
            <Link to="/admin/rooms" className="text-white text-decoration-none">
              All Rooms
            </Link>
            <Link to="/admin/users" className="text-white text-decoration-none">
              All User
            </Link>

            <Link className="text-white text-decoration-none">Reviews</Link>
            <Link className="text-white text-decoration-none">New Booking</Link>
          </div>
          <div
            style={{ backgroundColor: "#d3d0d6" }}
            class=" col-12 col-lg-10 py-5  "
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
