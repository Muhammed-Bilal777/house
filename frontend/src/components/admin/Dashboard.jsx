import React from "react";
import AdminLayout from "../layout/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="row row px-2   d-flex gap-3 justify-content-center align-items-center">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            key={index}
            class="card my-card col-3 "
            style={{ width: "15rem" }}
          >
            <div class="card-header">Quote</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
