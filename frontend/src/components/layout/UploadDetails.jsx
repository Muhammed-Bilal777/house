import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faMapMarker,
  faLock,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { useSendDetailsMutation } from "../../redux/api/userApi";
import { useNavigate } from "react-router-dom";

const UploadDetails = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    role: "",
    companyName: "",
    address: "",
  });

  const navigate = useNavigate();

  const [sendDetails, { data, error }] = useSendDetailsMutation();

  console.log(data);
  console.log(error);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDetails(user);
    navigate("/avatar");
    console.log(user);
  };

  return (
    <div className="container row py-5">
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <div class="mb-3 input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-describedby="name"
            placeholder="Enter your name"
            onChange={handleOnChange}
            name="name"
          />
        </div>
        <div class="mb-3 input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
          <input
            type="email"
            class="form-control"
            placeholder="Enter your Registered email"
            onChange={handleOnChange}
            name="email"
          />
        </div>

        <div class="mb-3 input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </div>
          <input
            type="tel"
            class="form-control"
            placeholder="Enter your Registered number"
            pattern="[0-9]*"
            onChange={handleOnChange}
            name="number"
          />
        </div>
        <div class="mb-3 input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <FontAwesomeIcon icon={faMapMarker} />
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your city"
            onChange={handleOnChange}
            name="address"
          />
        </div>
        <div class="mb-3 input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <FontAwesomeIcon icon={faBuilding} />
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Enter you company or college name"
            onChange={handleOnChange}
            name="companyName"
          />
        </div>
        <div class="mb-3 input-group">
          <select
            onChange={handleOnChange}
            class="form-select"
            aria-label="Default select example"
            name="role"
          >
            <option selected>Open this select menu</option>
            <option value="WORKING">working</option>
            <option value="STUDENT">student</option>
          </select>
        </div>

        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadDetails;
