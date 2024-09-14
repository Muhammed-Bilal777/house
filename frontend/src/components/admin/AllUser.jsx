import React from "react";
import AdminLayout from "../layout/AdminLayout";

const AllUser = () => {
  return (
    <AdminLayout>
      <div>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div key={index} class="card my-card">
            <div class="card-body">
              <h5 class="card-title">John Doe</h5>
              <p class="card-text">
                <strong>Email:</strong>{" "}
                <a href="mailto:johndoe@example.com">johndoe@example.com</a>
                <br />
                <strong>Phone Number:</strong> 123-456-7890
                <br />
                <strong>Room:</strong> 1234
                <br />
                <strong>Role:</strong> Software Engineer
                <br />
                <strong>City:</strong> New York
                <br />
                <strong>State:</strong> NY
              </p>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AllUser;
