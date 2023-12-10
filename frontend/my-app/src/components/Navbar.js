import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="container-fluid ">

        <div className="row bg-primary-subtle ">
          <div className="col-5"></div>
          <div className="col-2">
            <Link to="/"><img className="card-img" src={require("../images/images.png")} alt="sorry"></img></Link>
          </div>
        </div>
      </div>



    </>
  );
};
