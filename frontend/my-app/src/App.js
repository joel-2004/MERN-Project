import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./App.css"
import React from "react";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ToDo1 from "./components/ToDo1"
import ToDo from "./components/ToDo";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <Router>
        <Navbar></Navbar>
        <Routes>
          {/* <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/todo" element={<ToDo></ToDo>}></Route> */}
          <Route path="/" element={<ToDo></ToDo>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
