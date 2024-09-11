import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../redux/api/userApi';
import toast from 'react-hot-toast';
 
 
const Register = () => {

  const navigate =useNavigate()
  const [user , setUser]= useState({
    name :"",
    phoneNumber :"",
    email : "",
    password:""
  })


  const [registerUser, { isLoading, isSuccess, data, error }] = useRegisterUserMutation()
     useEffect(()=>{
     if(error){
      console.log(error)
     }

     if(isSuccess){
      toast.success(data.message)
      navigate('/login')
     }
     },[error,isSuccess,data])
  const onChangeFields =(e)=>{
    const {name,value} =e.target;
    setUser((prev)=>({
      ...prev,[name] :value
    }))
  }

  const submitData =(e)=>{
    e.preventDefault();
    registerUser(user)
    console.log(user);
    
  }


  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="form-container p-4 shadow-lg rounded-3" style={{ width: '500px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
        <form  onSubmit={submitData}>
          <h2 className="text-center mb-4">Registration Form</h2>
          <div className="form-group mb-3">
            <input onChange={onChangeFields} type="text" className="form-control rounded-pill" id="name" name="name" placeholder="Name" />
          </div>
          <div className="form-group mb-3">
            <input onChange={onChangeFields}  type="email" className="form-control rounded-pill" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group mb-3">
            <input onChange={onChangeFields} type="password" className="form-control rounded-pill" id="password" name="password" placeholder="Password" />
          </div>
          <div className="form-group mb-3">
            <input onChange={onChangeFields} type="tel" className="form-control rounded-pill" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
          </div>
          <button disabled={isLoading} type="submit" className="btn btn-primary btn-block rounded-pill">Register</button>
          <p className="text-right mt-3">
            Already Registerd? <Link to="/login">Login Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;