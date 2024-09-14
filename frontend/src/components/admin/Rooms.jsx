import React from "react";
import AdminLayout from "../layout/AdminLayout";

const Rooms = () => {
  return (
    <AdminLayout>
      <div className="row px-2   d-flex gap-3 justify-content-center align-items-center">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} class="card col-3 " style={{ width: "15rem" }}>
            <div class="card-body ">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default Rooms;
