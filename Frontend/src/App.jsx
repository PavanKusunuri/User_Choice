import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/LandingPage/Landing";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import AdminDashboard from "./Components/Admin/Dashboard";
import AddMovie from "./Components/Admin/Movies/AddMovie"
import ShowMovie from "./Components/Admin/Movies/ShowMovie";
import EditMovie from "./Components/Admin/Movies/EditMovie";
import Movies from "./Components/Admin/Movies/Movies.jsx";


import './App.css'

const App = () => {

 

  return (
    <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/admin" element={<AdminDashboard />}>
       <Route path="/admin/movies" element={<Movies/>} />
      </Route>

  </Routes>
    // <p className="text-3xl font-bold underline">User Choice</p>  
  )
}

export default App
