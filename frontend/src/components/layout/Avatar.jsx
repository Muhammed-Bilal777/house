import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faUpload } from "@fortawesome/free-solid-svg-icons";
import Login from "../auth/Login";
import { useUpdateAvatarMutation } from "../../redux/api/userApi";
import { useNavigate } from "react-router-dom";

const Avatar = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const navigate = useNavigate();

  const [updateAvatar, { data, error, isSuccess }] = useUpdateAvatarMutation();

  if (data || isSuccess) {
    navigate("/");
  }
  const handleImageChange1 = (e) => {
    setImage1(e.target.files[0]);
    setPreview1(URL.createObjectURL(e.target.files[0]));
  };

  const handleImageChange2 = (e) => {
    setImage2(e.target.files[0]);
    setPreview2(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { avatar };
    updateAvatar(data);
  };

  const [avatar, setAvatar] = useState("");

  const onChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview1(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h5>Add Your Photo</h5>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faImage} />
              </span>
            </div>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <h5>Add Your Identification</h5>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUpload} />
              </span>
            </div>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange2}
            />
          </div>

          <div className="row my-5 d-flex justify-content-center align-items-center gap-4 flex-row">
            <div className="col-6">
              {" "}
              {preview1 && (
                <img
                  src={preview1}
                  alt="Preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              )}
            </div>
            <div className="col-6">
              {preview2 && (
                <img
                  src={preview2}
                  alt="Preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Avatar;
