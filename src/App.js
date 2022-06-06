import React from "react";

import { Routes, Route } from "react-router-dom";

import Test from "./pages/Test";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Watch from "./pages/Watch";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";
import Membership from "./pages/Membership";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<div>404 PAGE</div>} />
    </Routes>
  );
}

export default App;
