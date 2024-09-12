import React from 'react'

const Carousel = () => {
  return (
    <>
     <div id="carouselExampleInterval" className="carousel slide my-carouselcontainer" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1600">
      <img src="images/2.png" className="d-block w-100 slide " alt="light house pg nagwara, bengaluru" />
    </div>
    <div className="carousel-item" data-bs-interval="1600">
      <img src="images/1.png" className="d-block w-100 slide " alt="light house pg nagwara, bengaluru" />
    </div>
     
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carousel
