import React from 'react'

const Contact = () => {
  return (
    <>
      <div id="contact" className="my-3 ">
        <div className="py-3 text-center align-items-center">
          <h2>Contact Us</h2>
        </div>
        <div className=" flex-column  flex-md-row   card-group d-flex justify-content-around gap-5 ">
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Name
              </label>
              <input type="email" class="form-control" />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Phone
              </label>
              <input
                type="text"
                class="form-control"
                id="inputPhone"
                placeholder="+91 1234567899"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>

            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact
