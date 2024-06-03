import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/sign-in" element={<SingIn />} />
          <Route path="/sign-up" element={<SingUp />} />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
