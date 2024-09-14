import React from 'react'

const Services = () => {
  return (
    <>
      <div className="my-3 ">
        <div className="py-3 text-center align-items-center">
          <h2>Services</h2>
        </div>
        <div className=" flex-column  flex-md-row   card-group d-flex justify-content-around gap-5 ">
          <div className="card border-0">
            <img
              src="images/kitchen.webp"
              className="card-img-top my-images  rounded-4"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Fully Furnished Kitchen</h5>
              <p className="card-text">
                We serve our client's diverse requirement of optimum fully
                furnished modular kitchen.
              </p>
            </div>
          </div>
          <div className="card border-0">
            <img
              src="images/washroom.webp"
              className="card-img-top my-images  rounded-4"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Hot/Cold Shower</h5>
              <p className="card-text">
                You can adjust the hot or cold water temperatures in bathroom as
                per your preference.
              </p>
            </div>
          </div>
          <div className="card border-0">
            <img
              src="images/terrace.webp"
              className="card-img-top my-images  rounded-4"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Terrace Re-creation</h5>
              <p className="card-text">
                You can relax in your open terrace with the fresh breeze & can
                beautify it as per your preference.
              </p>
            </div>
          </div>
          <div className="card border-0">
            <img
              src="images/wardrobe.webp"
              className="card-img-top my-images  rounded-4"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                You can secure your personal stuff in your personal wardrobe by
                locking it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services
