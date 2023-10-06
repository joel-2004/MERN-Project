import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
    return (<>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 text-center ">
                    <form method="post" action="/login" className=" form-control ">
                        <label className=" form-label m-1 " for="username">Username</label>
                        <input type="text" id="email" name="email" className=" input-group bg-primary-subtle m-1" placeholder="Enter Username"></input>
                        <label className=" form-label m-1" for="password">Password</label>
                        <input type="password" id="password" name="password" className=" input-group bg-primary-subtle m-1 " placeholder="Enter Password"></input>
                        <label className=" form-label m-1" for="password2">Re-Enter Password</label>
                        <input type="password" id="password2" name="password2" className=" input-group bg-primary-subtle m-1 " placeholder="Enter Password"></input>
                        <button type="submit" className="btn-dark m-1 btn-group-lg ">Create</button>
                        <h5>Aldready have an account?</h5>
                        <Link to="/login">Login</Link>
                    </form>
                </div>
            </div>
        </div>
    </>);
};

export default Signup;
