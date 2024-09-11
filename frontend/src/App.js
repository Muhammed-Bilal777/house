import React from 'react'
 
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/Home';
import  {Toaster}  from "react-hot-toast"


const App = () => {
  return (
     <Router>
    <div class="container-sm  ">
      <Toaster position='top-center' />
       <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/register' element={ <Register/>} />
        <Route path='/login' element={<Login />} />
       </ Routes>
    </div>

     </Router>
    
  )
}

export default App
