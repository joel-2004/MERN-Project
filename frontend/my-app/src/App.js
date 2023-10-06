// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.min.js"
import "./App.css"
import React from "react";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
