import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className="text-center my-3">
        <div className="row d-flex flex-md-row gap-4">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            <div className='py-2 align-content-center text-center'>
              <h2>About Us</h2>
            </div>
            <div className='py-2 align-content-center text-center '>
              <p>Our paying guest, dummy company at area in city state, signifies warmth and friendliness, simplicity, style, convenience and affordability. Our Pg is an exemplary showcase of elegance in its ambiance, distinguished by the latest technology, modern amenities. We are an excellent choice for leisure and travellers for the flawless blend of luxury. We provide you with a comfortable experience beyond all expectations.</p>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-12 col-xl-12 aboutus-image">
            <img src='images/aboutus.webp' className='rounded-4' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs