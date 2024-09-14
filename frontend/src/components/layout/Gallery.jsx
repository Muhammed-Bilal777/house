import React from 'react'

const Gallery = () => {
  return (
    <>
      <div className="my-3 ">
        <div className="py-3 text-center align-items-center">
          <h2>Gallery</h2>
        </div>
        <div className=" flex-column  flex-md-row   card-group d-flex justify-content-around gap-5 ">
          <div className="card border-0 h-75 ">
            <img
              src="images/gal-1.webp"
              className="card-img-top my-images  rounded-4 "
              alt="..."
            />
          </div>

          <div className="card border-0 h-75 ">
            <img
              src="images/gal-2.webp"
              className="card-img-top my-images  rounded-4 "
              alt="..."
            />
          </div>

          <div className="card border-0 h-75 ">
            <img
              src="images/gal-3.png"
              className="card-img-top my-images  rounded-4 "
              alt="..."
            />
          </div>

          <div className="card border-0 h-75 ">
            <img
              src="images/gal-4.webp"
              className="card-img-top my-images  rounded-4 "
              alt="..."
            />
          </div>

          <div className=" flex-column  flex-md-row   card-group d-flex justify-content-around gap-5 ">
            <div className="card border-0 h-75 ">
              <img
                src="images/gal-5.webp"
                className="card-img-top my-images  rounded-4 "
                alt="..."
              />
            </div>

            <div className="card border-0 h-75 ">
              <img
                src="images/gal-6.webp"
                className="card-img-top my-images  rounded-4 "
                alt="..."
              />
            </div>
            <div className="card border-0 h-75 ">
              <img
                src="images/gal-7.webp"
                className="card-img-top my-images  rounded-4 "
                alt="..."
              />
            </div>
            <div className="card border-0 h-75 ">
              <img
                src="images/gal-8.jpg"
                className="card-img-top my-images  rounded-4 "
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery
