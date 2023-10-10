import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {

    const { form, setForm } = useState([{
        name: "",
        email: ""
    }])
    return (<>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 text-center ">
                    <form method="post" action="/login" className=" form-control ">
                        <label className=" form-label m-1 " htmlFor="username">Username</label>
                        <input type="text" id="email" name="email" className=" input-group bg-primary-subtle m-1" placeholder="Enter Username"></input>
                        <label className=" form-label m-1" htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" className=" input-group bg-primary-subtle m-1 " placeholder="Enter Password"></input>
                        <button type="submit" className="btn-dark m-1 btn-group-lg ">Login</button>
                        <h5>Dont have an account?</h5>
                        <Link to="/signup">Signup</Link>
                    </form>
                </div>
            </div>
        </div>
    </>);
};

export default Login;
