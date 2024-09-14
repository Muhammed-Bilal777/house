import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

import Header from "./components/layout/Header";

import AdminLayout from "./components/layout/AdminLayout";
import Rooms from "./components/admin/Rooms";
import Dashboard from "./components/admin/Dashboard";
import AllUser from "./components/admin/AllUser";
import UploadDetails from "./components/layout/UploadDetails";
import Avatar from "./components/layout/Avatar";

const App = () => {
  return (
    <Router>
      <div class="container-sm  ">
        <Toaster position="top-center" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="/admin/rooms" element={<Rooms />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<AllUser />} />
          <Route path="/upload" element={<UploadDetails />} />
          <Route path="/avatar" element={<Avatar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
