import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row bg-success-subtle text-center ">
          <div className="col-2">
            <Link to="/"><img className="card-img " src={require("../images/images.jpg")} alt="sorry"></img></Link>
          </div>
          <div className="col-2">
            <i class="fa-solid fa-house"></i>
            <Link to="/">Home</Link>
          </div>
          <div className="col-2">
            <input type="text" placeholder="Search" id="search" name="search"></input>
          </div>
          <div className="col-1">
            <button className="btn btn-outline-success btn-info " type="submit">search</button>
          </div>

          <div className="col-2">
            <i class="fa-solid fa-cart-shopping fa-lg"></i>
            <Link to="/cart">cart</Link>
          </div>
          <div className="col-2">
            <i class="fa-solid fa-user fa-lg"></i>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};
