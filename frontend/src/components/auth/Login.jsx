import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/api/userApi';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate =useNavigate()

   const [user ,setUser] = useState({
    name:"",
    password:""
   })

   const [login,{data, error , isLoading,isSuccess} ] = useLoginMutation()


   useEffect(()=>{
   
    if(error){
      toast.error(error.data.message)
     console.log(error)
    }
    if(isSuccess){
      navigate('/' )
     toast.success("logged  In")
     console.log(data);
     
     
    }

   
    },[error,isSuccess])
    
   const onChangeFields =(e)=>{
    const {name,value} =e.target;
    setUser((prev)=>({
      ...prev,[name] :value
    }))
  }
 
  const submitData =(e)=>{
    e.preventDefault();
    login(user)
    
  }




  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="form-container p-4 shadow-lg rounded-3" style={{ width: '500px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
        <form onSubmit={submitData}>
          <h2 className="text-center mb-4">Login Form</h2>
          <div className="form-group mb-3">
            <input onChange={onChangeFields} type="email" className="form-control rounded-pill"  name="email" placeholder="Email" />
          </div>
          <div className="form-group mb-3">
            <input onChange={onChangeFields} type="password" className="form-control rounded-pill"   name="password" placeholder="Password" />
          </div>
          <button disabled={isLoading} type="submit" className="btn btn-primary btn-block rounded-pill">Login</button>
          <p className="text-right mt-3">
            New user? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;