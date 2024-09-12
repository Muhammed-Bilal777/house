import React from 'react'
import {Link} from "react-router-dom"
const Rooms = () => {
  return (
    < >

    <div className='my-3 '>
    <div className='py-3 text-center align-items-center'><h2>Rooms</h2></div>
      <div className=" flex-column  flex-md-row   card-group d-flex justify-content-around gap-5 ">
       
  <div className="card border-0 h-75 ">
    <img src="images/room-3.jpg" className="card-img-top my-images  rounded-4 " alt="..." />
    <div className="card-body">
      <h5 className="card-title">Single Sharing</h5>
      <p className="card-text">This is a wider room for single person with three waredrobe, one chair and one table.</p>
      <Link to='/single' type="button" class="btn btn-danger">Single Sharing</Link>
    </div>
  </div> 
  <div className="card  border-0 ">
    <img src="images/room-2.webp" className="card-img-top my-room-images rounded-4" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Double Sharing</h5>
      <p className="card-text">This is a wider room for two persons with three waredrobe, one chair and two tables.</p>
      <Link to='/single' type="button" class="btn btn-danger">Two Sharing</Link>
    </div>
  </div>
  <div className="card border-0   ">
    <img src="images/room-4.jpeg" className="card-img-top my-room-images rounded-4" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Three Sharing</h5>
      <p className="card-text">This is a wider and large room for persons  with three waredrobe, one chair and two tables.</p>
      <Link to='/single' type="button" class="btn btn-danger">Three Sharing</Link>
    </div>
  </div>
</div>

    </div>
    </ >
  )
}

export default Rooms
